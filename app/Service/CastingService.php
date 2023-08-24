<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class CastingService
{
    public function insertCastingMC($request,$clipIntroduce,$portrait){
       $result= DB::table('casting_mc')
        ->insert([
            "fullName"=>$request['fullName'],
            "phone"=>$request['phone'],
            "schoolName"=>$request['schoolName'],
            "className"=>$request['className'],
            "studentCode"=>$request['studentCode'],
            "accountLink"=>$request['accountLink'],
            "email"=>$request['email'],
            "portrait"=>$portrait,
            "clipIntroduce"=>$clipIntroduce,
            "prize"=>$request['prize']
        ]);
        return $result;
    }
    public function insertCastingStage($request,$clipTemplate,$fileMusic){
        $result= DB::table('casting_stage')
         ->insert([
             "fullName"=>$request['fullName'],
             "phone"=>$request['phone'],
             "schoolName"=>$request['schoolName'],
             "className"=>$request['className'],
             "studentCode"=>$request['studentCode'],
             "accountLink"=>$request['accountLink'],
             "email"=>$request['email'],
             "categoryStage"=>$request['categoryStage'],
             "fileMusic"=>$fileMusic,
             "clipTemplate"=>$clipTemplate,
             "prize"=>$request['prize']
         ]);
         return $result;
     }
    
}