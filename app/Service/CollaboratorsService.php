<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class CollaboratorsService
{
    public function getCollaborator($email){
        $result=DB::table('collaborators')
        ->where('email',$email)
        ->get();
        return $result;
    }
    public function insertCollaborators($request){
         DB::table('collaborators')
         ->insert([
            "fullName"=>$request['fullName'],
            "grade"=>$request['grade'],
            "studentCode"=>$request['studentCode'],
            "email"=>$request['email'],
            "phone"=>$request['phone'],
            "accountLink"=>$request['accountLink'],
            "aspiration1"=>$request['aspiration1'],
            "aspiration2"=>$request['aspiration2']
         ]);
         $collaboratorsService= new CollaboratorsService();
         $id=$collaboratorsService->getCollaborator($request['email'])[0]->idCollaborator;
         return $id;
    }
    public function insert_file_Collaborators($type,$fileName,$id){
        $result=DB::table('file_collaborators')
        ->insert([
            "type"=>$type,
            "fileName"=>$fileName,
            "idCollaborator"=>$id
        ]);
        return $result;
    }
    public function deleteCollaborators($id){
        DB::table('file_collaborators')
        ->where('idCollaborator',$id)
        ->delete();
        DB::table('collaborators')
        ->where('idCollaborator',$id)
        ->delete();
    }
    public function getArrayFile ($id,$type){
        $result=DB::table('file_collaborators')
        ->where('idCollaborator',$id)
        ->where('type',$type)
        ->get('fileName');
        return $result;
    }
    public function sortTimeCollaborators($request){
        $keyTime=$request['createTime'];
        $keyPass=$request['pass'];
        $keySearch=$request['searchKey'];
        $keyAspri1= strval($request['aspiration1']);
        $keyAspri2= strval($request['aspiration2']);
        if ($keyTime=='increase'){
            $keyTime='asc';
        }
        if ($keyTime=='decrease'){
            $keyTime='desc';
        }
        if ($keyPass=='checked'){
            if($keyAspri1=="" and $keyAspri2=="")
            {
                $result=DB::table('collaborators')
                ->where('studentCode','like', '%'.$keySearch.'%')
                ->where('status',1)
                ->where('fullName', 'like', '%'.$keySearch.'%','or')
                ->where('status',1)
                ->orderBy('created_at',$keyTime)
                ->select('*')
                ->paginate(25);
                return $result;
            }
            if($keyAspri2=="")
            {
                $result=DB::table('collaborators')
                ->where('studentCode','like', '%'.$keySearch.'%')
                ->where('status',1)
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->where('fullName', 'like', '%'.$keySearch.'%','or')
                ->where('status',1)
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->orderBy('created_at',$keyTime)
                ->select('*')
                ->paginate(25);
                return $result;
            }
            if($keyAspri2!="")
            {
                $result=DB::table('collaborators')
                ->where('studentCode','like', '%'.$keySearch.'%')
                ->where('status',1)
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->where('aspiration2','like','%'.$keyAspri2.'%')
                ->where('fullName', 'like', '%'.$keySearch.'%','or')
                ->where('status',1)
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->where('aspiration2','like','%'.$keyAspri2.'%')
                ->orderBy('created_at',$keyTime)
                ->select('*')
                ->paginate(25);
                return $result;
            }
        }
        if ($keyPass=='unchecked'){
            if($keyAspri1=="" and $keyAspri2=="")
            {
                $result=DB::table('collaborators')
                ->where('studentCode','like', '%'.$keySearch.'%')
                ->where('status',0)
                ->where('fullName', 'like', '%'.$keySearch.'%','or')
                ->where('status',0)
                ->orderBy('created_at',$keyTime)
                ->select('*')
                ->paginate(25);
                return $result;
            }
            if($keyAspri2=="")
            {
                $result=DB::table('collaborators')
                ->where('studentCode','like', '%'.$keySearch.'%')
                ->where('status',0)
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->where('fullName', 'like', '%'.$keySearch.'%','or')
                ->where('status',0)
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->orderBy('created_at',$keyTime)
                ->select('*')
                ->paginate(25);
                return $result;
            }
            if($keyAspri2!="")
            {
                $result=DB::table('collaborators')
                ->where('studentCode','like', '%'.$keySearch.'%')
                ->where('status',0)
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->where('aspiration2','like','%'.$keyAspri2.'%')
                ->where('fullName', 'like', '%'.$keySearch.'%','or')
                ->where('status',0)
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->where('aspiration2','like','%'.$keyAspri2.'%')
                ->orderBy('created_at',$keyTime)
                ->select('*')
                ->paginate(25);
                return $result;
            }
        }
        if ($keyPass=='all'){
            if($keyAspri1=="" and $keyAspri2=="")
            {
                $result=DB::table('collaborators')
                ->where('studentCode','like', '%'.$keySearch.'%')
                ->where('fullName', 'like', '%'.$keySearch.'%','or')
                ->orderBy('created_at',$keyTime)
                ->select('*')
                ->paginate(25);
                return $result;
            }
            if($keyAspri2=="")
            {
                $result=DB::table('collaborators')
                ->where('studentCode','like', '%'.$keySearch.'%')
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->where('fullName', 'like', '%'.$keySearch.'%','or')
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->orderBy('created_at',$keyTime)
                ->select('*')
                ->paginate(25);
                return $result;
            }
            if($keyAspri2!="")
            {
                $result=DB::table('collaborators')
                ->where('studentCode','like', '%'.$keySearch.'%')
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->where('aspiration2','like','%'.$keyAspri2.'%')
                ->where('fullName', 'like', '%'.$keySearch.'%','or')
                ->where('aspiration1','like','%'.$keyAspri1.'%')
                ->where('aspiration2','like','%'.$keyAspri2.'%')
                ->orderBy('created_at',$keyTime)
                ->select('*')
                ->paginate(25);
                return $result;
            }
        }
    }
    public function updateCollaboratorNote($request){
        $result= DB::table('collaborators')
        ->where('idCollaborator',$request['id'])
        ->update([
            'note'=>$request['note']
        ]);
        $item= DB::table('collaborators')
        ->where('idCollaborator',$request['id'])
        ->get();
        return $item;
     }
     public function updateCollaboratorPass($request){
        $result= DB::table('collaborators')
        ->where('idCollaborator',$request['id'])
        ->update([
            'status'=>boolval($request['pass'])
        ]);
        $item= DB::table('collaborators')
        ->where('idCollaborator',$request['id'])
        ->get();
        return $item;
     }


    
}