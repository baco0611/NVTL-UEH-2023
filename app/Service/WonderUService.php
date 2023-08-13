<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class WonderUService
{
    public function getListWonderU() {
        $result = DB::table('wonder_u')
        ->join('login','wonder_u.idUser','=', 'login.idUser')
        ->select('*')
        ->get();
        return $result;
    }
}