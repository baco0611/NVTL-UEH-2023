<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Login;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\PasswordReset;
use App\Notifications\ResetPasswordRequest;
use App\Service\LoginService;
use Illuminate\Http\Response as HttpResponse;

class ResetPasswordController extends Controller
{
    /**
     * Create token password reset.
     *
     * @param  ResetPasswordRequest $request
     * @return JsonResponse
     */
    public function sendMail(Request $request)
    {
        $userService= new LoginService();
        $item= $userService->checkEmail($request['email']);
        if (Empty(json_decode($item))) {
            return response()->json([
                'mess' =>'Email chưa được đăng kí',
                'status'=>HttpResponse::HTTP_UNPROCESSABLE_ENTITY
            ]);
        }
        $user = Login::where('email', $request['email'])->firstOrFail();
        $passwordReset = PasswordReset::updateOrCreate([
            'email' => $user->email,
        ], [
            'token' => Str::random(60),
        ]);
        if ($passwordReset) {
            $user->notify(new ResetPasswordRequest($passwordReset->token));
        }
        return response()->json([
        'message' => 'Chúng tôi đã gửi đến email bạn liên kết đặt lại mật khẩu!'
        ]);
    }

    public function reset(Request $request, $token)
    {
        $valid=$this->validate($request, array(
            'new_password' => ['required', 'min:8'],
            'confirm_new_password' => ['required', 'same:new_password']
        ), array(
            'required' => 'Mật khẩu không được bỏ trống',
            'new_password.min'=>'Mật khẩu ít nhất 8 kí tự',
            'confirm_new_password.same'=>'Nhập lại mật khẩu sai'
        ));
        $passwordReset = PasswordReset::where('token', $token)->firstOrFail();
        if (Carbon::parse($passwordReset->updated_at)->addMinutes(720)->isPast()) {
            $passwordReset->delete();

            return response()->json([
                'message' => 'Token đặt lại mật khẩu không hợp lệ',
            ], 422);
        }
        $user = Login::where('email', $passwordReset->email)->firstOrFail();
        $userSevice = new LoginService();
        $updatePasswordUser = $userSevice->resetPassword($user,$request);
        $passwordReset->delete();
        return response()->json([
            'success' => boolval($updatePasswordUser),
            'status'=>HttpResponse::HTTP_OK
        ]);
    }
}