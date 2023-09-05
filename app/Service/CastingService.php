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
     public function sortTimeMC($request){
        $keyTime=$request['createTime'];
        $keyPass=$request['pass'];
        $keySearch=$request['searchKey'];
        if ($keyTime=='increase'){
            $keyTime='asc';
        }
        if ($keyTime=='decrease'){
            $keyTime='desc';
        }
        if ($keyPass=='checked'){
            $result=DB::table('casting_mc')
            ->where('status',1)
            ->where('fullName', 'like', '%'.$keySearch.'%')
            ->orwhere('studentCode','like', '%'.$keySearch.'%')
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
        if ($keyPass=='unchecked'){
            $result=DB::table('casting_mc')
            ->where('status','=',0)
            ->Where('studentCode','like', '%'.$keySearch.'%')
            ->orWhere('fullName', 'like', '%'.$keySearch.'%')
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
        if ($keyPass=='all'){
            $result=DB::table('casting_mc')
            ->where('studentCode','like', '%'.$keySearch.'%')
            ->orwhere('fullName', 'like', '%'.$keySearch.'%')
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
     }
     public function sortTimeStage($request){
        $keyTime=$request['createTime'];
        $keyPass=$request['pass'];
        $keySearch=$request['searchKey'];
        if ($keyTime=='increase'){
            $keyTime='asc';
        }
        if ($keyTime=='decrease'){
            $keyTime='desc';
        }
        if ($keyPass=='checked'){
            $result=DB::table('casting_stage')
            ->where('status',1)
            ->where('studentCode','like', '%'.$keySearch.'%')
            ->orwhere('fullName', 'like', '%'.$keySearch.'%')
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
        if ($keyPass=='unchecked'){
            $result=DB::table('casting_stage')
            ->where('status',0)
            ->where('studentCode','like', '%'.$keySearch.'%')
            ->orwhere('fullName', 'like', '%'.$keySearch.'%')
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
        if ($keyPass=='all'){
            $result=DB::table('casting_stage')
            ->where('studentCode','like', '%'.$keySearch.'%')
            ->orwhere('fullName', 'like', '%'.$keySearch.'%')
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
     }
     public function updateCasting($request){
        if($request['key']=='MC'){
         $result= DB::table('casting_mc')
        ->where('idCasting',$request['id'])
        ->update([
            'status'=>boolval($request['pass']), 
            'note'=>$request['note']
        ]);
        $item= DB::table('casting_mc')
        ->where('idCasting',$request['id'])
        ->get();
        return $item;
        }
        if($request['key']=='Stage'){
        $result= DB::table('casting_stage')
        ->where('idCasting',$request['id'])
        ->update([
            'status'=>boolval($request['pass']), 
            'note'=>$request['note']
        ]);
        $item= DB::table('casting_mc')
        ->where('idCasting',$request['id'])
        ->get();
        return $item;
        }
     }
}