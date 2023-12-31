<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class LoginService
{
    public function getAccount($idUser) {
        $result = DB::table('login')
        ->where('id',$idUser)
        ->get();
        return $result;
    }
 
    public function getListAccount() {
        $result = DB::table('login')
        ->select('*')
        ->get();
        return $result;
    }
    
    public function checkNameAccount($accountName) {
        $name=DB::table('login')
        ->orwhere('studentCode', $accountName)
        ->orWhere('email',$accountName)
        ->get();
        return $name;
    }

    public function checkPassAccount($accountName,$pass) {
        $name=DB::table('login')
        ->orwhere('studentCode', $accountName)
        ->where('password', $pass)
        ->orWhere('email',$accountName)
        ->where('password', $pass)
        ->get();
        return $name;
    }
    public function checkPass($pass, $idUser) {
        $user= DB::table('login')
        ->where('id', $idUser)
        ->where('password', $pass)
        ->get();
        
        return $user;
    }
    public function checkAccount($studentCode) {
        $user= DB::table('login')
        ->where('studentCode', $studentCode)
        ->get();
        return $user;
    }
    public function insertData($request){
        DB::table('login')
        ->insert([
            'fullName'=>$request['fullName'], 
            'department'=>$request['department'],
            'phone'=>$request['phone'],
            'email'=>$request['email'],
            'studentCode'=>$request['studentCode'],
            'password'=>$request['password']
        ]);
        $user= DB::table('login')
        ->where('studentCode',$request['studentCode'])
        ->get();
        return $user;
    }
     public function updateAccount($request){
       $result= DB::table('login')
        ->where('id',$request['idUser'])
        ->update([
            'fullName'=>$request['fullName'], 
            'department'=>$request['department'],
            'phone'=>$request['phone'],
            'email'=>$request['email'],
            'studentCode'=>$request['studentCode'],
        ]);
        $user= DB::table('login')
        ->where('id',$request['idUser'])
        ->get();
        return $user;
    }
    public function updatePassword($request){
        DB::table('login')
        ->where('id',$request['idUser'])
        ->update([
            'password'=>md5($request['new_password'])
        ]);
        $user= DB::table('login')
        ->where('id',$request['idUser'])
        ->get();
        return $user;
    }
    public function resetPassword($user,$request){
        $result=DB::table('login')
        ->where('id',$user['id'])
        ->update([
            'password'=>md5($request['new_password'])
        ]);
        return $result ;
    }
    public function checkEmail($email) {
        $user= DB::table('login')
        ->where('email', $email)
        ->get();
        return $user;
    }
}