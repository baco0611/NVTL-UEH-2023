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
            ->where('fullName', 'like', '%'.$keySearch.'%')
            ->where('status','=',1)
            ->where('studentCode','like', '%'.$keySearch.'%','or')
            ->where('status','=',1)
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
        if ($keyPass=='unchecked'){
            $result=DB::table('casting_mc')
            ->Where('studentCode','like', '%'.$keySearch.'%')
            ->where('status','=',0)
            ->Where('fullName', 'like', '%'.$keySearch.'%','or')
            ->where('status','=',0)
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
        if ($keyPass=='all'){
            $result=DB::table('casting_mc')
            ->where('studentCode','like', '%'.$keySearch.'%')
            ->where('fullName', 'like', '%'.$keySearch.'%','or')
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
            ->where('studentCode','like', '%'.$keySearch.'%')
            ->where('status',1)
            ->where('fullName', 'like', '%'.$keySearch.'%','or')
            ->where('status',1)
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
        if ($keyPass=='unchecked'){
            $result=DB::table('casting_stage')
            ->where('studentCode','like', '%'.$keySearch.'%')
            ->where('status',0)
            ->where('fullName', 'like', '%'.$keySearch.'%','or')
            ->where('status',0)
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
        if ($keyPass=='all'){
            $result=DB::table('casting_stage')
            ->where('studentCode','like', '%'.$keySearch.'%')
            ->where('fullName', 'like', '%'.$keySearch.'%','or')
            ->orderBy('created_at',$keyTime)
            ->select('*')
            ->paginate(25);
            return $result;
        }
    }
     public function updateCastingNote($request){
        if($request['key']=='MC'){
         $result= DB::table('casting_mc')
        ->where('idCasting',$request['id'])
        ->update([
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
            'note'=>$request['note']
        ]);
        $item= DB::table('casting_Stage')
        ->where('idCasting',$request['id'])
        ->get();
        return $item;
        }
     }
     public function updateCastingPass($request){
        if($request['key']=='MC'){
         $result= DB::table('casting_mc')
        ->where('idCasting',$request['id'])
        ->update([
             'status'=>boolval($request['pass'])
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
            'status'=>boolval($request['pass'])
        ]);
        $item= DB::table('casting_Stage')
        ->where('idCasting',$request['id'])
        ->get();
        return $item;
        }
     }
}