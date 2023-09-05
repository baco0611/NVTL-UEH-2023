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


    
}