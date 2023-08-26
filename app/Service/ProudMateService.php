<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class ProudMateService
{
    public function getListProudMate() {
        $result = DB::select('
        SELECT p.created_at,p.teamName,(select l.fullName from login as l where l.id=p.member1) as name1,
        (select l.studentCode from login as l where l.id=p.member1) as studentCode1,
        (select l.fullName from login as l where l.id=p.member2) as name2,
        (select l.studentCode from login as l where l.id=p.member2) as studentCode2,
        (select l.fullName from login as l where l.id=p.member3) as name3,
        (select l.studentCode from login as l where l.id=p.member3) as studentCode3,
        p.proof,p.status
        From proud_mate as p');
        return $result;
    }
    public function checkProudMate($id){
        $result = DB::select('
        SELECT p.idProudMate,p.teamName,(select l.fullName from login as l where l.id=p.member1) as name1,
        (select l.studentCode from login as l where l.id=p.member1) as studentCode1,
        (select l.fullName from login as l where l.id=p.member2) as name2,
        (select l.studentCode from login as l where l.id=p.member2) as studentCode2,
        (select l.fullName from login as l where l.id=p.member3) as name3,
        (select l.studentCode from login as l where l.id=p.member3) as studentCode3,
        p.proof,p.status
        From proud_mate as p
        where p.member1='.$id.' or p.member2='.$id.' or p.member3='.$id);
        return $result;
    }
    public function searchMember($key){
        $result=DB::table('login')
            ->orWhere('studentCode' ,'like', '%'.$key.'%')
            ->orwhere('fullName', 'like', '%'.$key.'%')
            ->take(10)
            ->get();
        return $result;
        

    }
    
}