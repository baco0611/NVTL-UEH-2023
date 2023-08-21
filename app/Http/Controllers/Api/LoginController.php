<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBlogAccount;
use App\Http\Requests\StoreBlogLogin;
use App\Http\Resources\AccountResource;
use App\Http\Resources\LoginResource;
use App\Models\Login;
use App\Service\LoginService;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function userAccount()
    {
        $loginService = new LoginService();
        $listAccount = $loginService->getListAccount();
        return response()->json([
            'data'=>LoginResource::collection($listAccount),
            'status'=>HttpResponse::HTTP_OK
        ], HttpResponse::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     * @param  StoreBlogAccount  $request
     * @param  StoreBlogLogin  $request
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function registerAccount(StoreBlogAccount $request)
    {
        $request['password']= md5($request['password']);
        $userSevice = new LoginService();
        $user=$userSevice->insertData($request);
        $userAccount =AccountResource::collection($user);
        return response()->json([
            'userAccount'=>$userAccount,
            'status' =>HttpResponse::HTTP_OK
        ]);
    }
    public function checkAccount(StoreBlogLogin $request)
    {
        $pass= md5($request['password']);
        $accountName=$request['accountName'];
        $userSevice = new LoginService();
        $userName= $userSevice->checkNameAccount($accountName);
        if (Empty(json_decode($userName))) {
            return response()->json([
                'accountName' =>'Tên đăng nhập không đúng'
            ]);
        }
        $userPass=$userSevice->checkPassAccount($accountName,$pass);
        if (Empty(json_decode($userPass))) {
            return response()->json([
                'password' =>'Mật khẩu không đúng'
            ]);
        }
        $userAccount =AccountResource::collection($userPass);
        return response()->json([
            'userAccount'=>$userAccount,
            'status' =>HttpResponse::HTTP_OK,
            'mess'=>"Đăng nhập thành công"
        ]);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showAccount($id)
    {
        $userSevice = new LoginService();
        $item = $userSevice->getAccount($id);   
        $userAccount =AccountResource::collection($item);
        return response()->json([
            'userAccount'=>$userAccount
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateAccount(Request $request)
    {
        $userSevice = new LoginService();
        $item = $userSevice->getAccount($request['idUser']);
        if (Empty(json_decode($item))){
            return response()->json([
                'status' =>HttpResponse::HTTP_UNAUTHORIZED
            ]);
        }
        $id=$request['idUser'];
        $valid=$this->validate($request, array(
            'fullName'=>'required',
            'studentCode' => "required|unique:login,studentCode,$id,idUser",
            'department'=>'required',
            'email'=>"required|email|unique:login,email,$id,idUser",
            'phone'=>'required|min:10|max:11',
        ),array(
            'required' => ':attribute không được bỏ trống',
            'email.unique' => ":attribute đã được sử dụng đăng kí",
            'email.email'=>'email không hợp lệ',
            'studentCode.unique' => ':attribute đã đăng kí',
            'phone.min'=>":attribute ít nhất 10 số",
            'phone.max'=>":attribute nhiều nhất 11 số"
        ), array(
            'fullName' => 'Họ và Tên',
            'department'=>'Khoa',
            'phone'=>'Số điện thoại',
            'email'=>'Email',
            'studentCode'=>'Mã số sinh viên',
            'password'=>'Mật khẩu'
        ));
        $user=$userSevice->updateAccount($request);
        $userAccount =AccountResource::collection($user);
        return response()->json([
            'userAccount'=>$userAccount,
            'status' =>HttpResponse::HTTP_OK,
            'mess'=>"Cập nhật thành công"
        ]);
    }
    public function updatePassword(Request $request)
    {
        $userSevice = new LoginService();
        $item = $userSevice->getAccount($request['idUser']);
        if (Empty(json_decode($item))){
            return response()->json([
                'status' =>HttpResponse::HTTP_UNAUTHORIZED
            ]);
        }
        $id=$request['idUser'];
        $pass= md5($request['current_password']);
        $confirm_pass= $userSevice->checkPass($pass,$id);
        if (Empty(json_decode($confirm_pass))){
            return response()->json([
                'status' =>'Mật khẩu cũ nhập sai'
            ]);
        }
        $valid=$this->validate($request, array(
            'new_password' => ['required', 'min:8'],
            'confirm_new_password' => ['required', 'same:new_password'],
            'current_password' => ['required']
        ), array(
            'required' => 'Mật khẩu không được bỏ trống',
            'new_password.min'=>'Mật khẩu ít nhất 8 kí tự',
            'confirm_new_password.same'=>'Nhập lại mật khẩu sai'
        ));
        $user=$userSevice->updatePassword($request);
        $userAccount =AccountResource::collection($user);
        return response()->json([
            'userAccount'=>$userAccount,
            'status' =>HttpResponse::HTTP_OK,
            'mess'=>"Cập nhật mật khẩu thành công"
        ]);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}