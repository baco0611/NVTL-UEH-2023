<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class WonderUService
{
    public function getListWonderU() {
        $result = DB::table('wonder_u')
        ->join('login','wonder_u.idUser','=', 'login.id')
        ->select('*')
        ->get();
        return $result;
    }
    public function insertData($request,$proof1,$proof2){
        $result=DB::table('wonder_u')
        ->insert([
            'idUser'=>$request['idUser'], 
            'proof1'=>$proof1,
            'proof2'=>$proof2
        ]);
        return $result;
    }
    public function getWonderU($idUser) {
        $result = DB::select('
        SELECT l.id,w.proof1,w.proof2
        from login as l 
        left join wonder_u as w on w.idUser=l.id 
        where l.id='.$idUser);
        return $result;
    }
}