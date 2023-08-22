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
    
    public function sortTime($key){
        if ($key=='increase'){
            $result=DB::select('
            SELECT  pt.created_at,pt.idPrideTake,us.fullName,us.email,us.studentCode
            FROM ueh_db.pride_take as pt join login as us on pt.idUser=us.id
            order by pt.created_at 
            ');
            return $result;
        }
        if ($key=='decrease'){
            $result=DB::select('
            SELECT  pt.created_at,pt.idPrideTake,us.fullName,us.email,us.studentCode
            FROM ueh_db.pride_take as pt join login as us on pt.idUser=us.id
            order by pt.created_at desc 
            ');
            return $result;
        }
    }
}