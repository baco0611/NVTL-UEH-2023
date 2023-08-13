<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class LoginService
{
    public function getListAccount() {
        $result = DB::table('login')
        ->select('*')
        ->get();
        return $result;
    }
    
    public function check($pass, $studentCode) {
        $user= DB::table('login')
        ->where('studentCode', $studentCode)
        ->where('passWord', $pass)
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
            'passWord'=>$request['passWord']
        ]);
    }
}