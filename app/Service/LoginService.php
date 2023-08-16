<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class LoginService
{
    public function getAccount($idUser) {
        $result = DB::table('login')
        ->where('idUser',$idUser)
        ->get();
        return $result;
    }
 
    public function getListAccount() {
        $result = DB::table('login')
        ->select('*')
        ->get();
        return $result;
    }
    
    public function check($pass, $studentCode) {
        $user= DB::table('login')
        ->where('studentCode', $studentCode)
        ->where('password', $pass)
        ->get();
        
        return $user;
    }
    
    public function checkPass($pass, $idUser) {
        $user= DB::table('login')
        ->where('idUser', $idUser)
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
        ->where('idUser',$request['idUser'])
        ->update([
            'fullName'=>$request['fullName'], 
            'department'=>$request['department'],
            'phone'=>$request['phone'],
            'email'=>$request['email'],
            'studentCode'=>$request['studentCode'],
        ]);
        $user= DB::table('login')
        ->where('idUser',$request['idUser'])
        ->get();
        return $user;
    }
    public function updatePassword($request){
        DB::table('login')
        ->where('idUser',$request['idUser'])
        ->update([
            'password'=>md5($request['new_password'])
        ]);
        $user= DB::table('login')
        ->where('idUser',$request['idUser'])
        ->get();
        return $user;
    }
}