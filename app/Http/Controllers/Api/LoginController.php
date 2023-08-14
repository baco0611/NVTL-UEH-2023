<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AccountResource;
use App\Http\Resources\LoginResource;
use App\Models\Login;
use App\Service\LoginService;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;

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
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function registerAccount(Request $request)
    {
        $request['password']= md5($request['password']);
        $userSevice = new LoginService();
        $item =$userSevice->checkAccount($request['studentCode']);
        if (Empty(json_decode($item))) {
            $user= $userSevice->insertData($request);
            return response()->json([
                'status' =>HttpResponse::HTTP_OK
            ]);
        }
        return response()->json([
            'status' =>HttpResponse::HTTP_UNAUTHORIZED
        ]);
    }
    public function checkAccount(Request $request)
    {
        $pass= md5($request['password']);
        $studentCode=$request['studentCode'];
        $userSevice = new LoginService();
        $user= $userSevice->check($pass, $studentCode);
        if (Empty(json_decode($user))) {
            return response()->json([
                'status' =>HttpResponse::HTTP_UNAUTHORIZED
            ]);
        }
        $userAccount =AccountResource::collection($user);
        return response()->json([
            'userAccount'=>$userAccount,
            'status' =>HttpResponse::HTTP_OK
        ]);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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