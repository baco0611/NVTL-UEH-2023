<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class StatusPageService
{
    public function getListPage() {
        $result = DB::table('status_page')
        ->select('pageName', 'status')
        ->get();
        return $result;
    }
}