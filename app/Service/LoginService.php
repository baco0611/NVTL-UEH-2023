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
}