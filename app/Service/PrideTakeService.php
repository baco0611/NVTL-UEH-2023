<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class PrideTakeService
{
    public function getListPrideTake() {
        $result = DB::table('pride_take')
        ->join('login','pride_take.idUser','=', 'login.idUser')
        ->select('*')
        ->get();
        return $result;
    }
    public function insertData($id){
        $result=DB::table('pride_take')
        ->insert([
            'idUser'=>$id, 
        ]);
        return $result;
    }
}