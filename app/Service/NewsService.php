<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class NewsService
{
    public function insertData($request,$image){
        DB::table('news')
        ->insert([
            'title'=> $request['title'],
            'subTitle'=>$request['subTitle'],
            'thumbnail'=>$image,
            'category'=>$request['category'],
            'linkPost'=>$request['linkPost'],
        ]);
        if ($request['category']=='home'){
            $result=DB::table('news')
            ->where('category','home')
            ->get();
        return $result;
        }
        if ($request['category']=='weekly'){
            $result=DB::table('news')
            ->where('category','weekly')
            ->get();
        return $result;
        }
    }
    
    public function sortTime($request){
        if ($request['createTime']=='increase'){
            $result=DB::table('news')
            ->where('category',$request['category'])
            ->where('title', 'like', '%'.$request['search'].'%')
            ->orderBy('created_at')
            ->select('*')
            ->paginate(25);
            return $result;
        }
        if ($request['createTime']=='decrease'){
            $result=DB::table('news')
            ->where('category',$request['category'])
            ->where('title', 'like', '%'.$request['search'].'%')
            ->orderBy('created_at','desc')
            ->select('*')
            ->paginate(25);
            return $result;
        }
    }
    public function getDataHome() {
        $result= DB::table('news')
        ->where('category', 'home')
        ->take(6)
        ->get();
        return $result;
    }
    public function getDataWeekly() {
        $result= DB::table('news')
        ->where('category', 'weekly')
        ->take(6)
        ->get();
        return $result;
    }
    public function updateData($request,$image){
        if($image!=""){
            DB::table('news')
            ->where('id',$request['id'])
            ->update([
            'thumbnail'=>$image
            ]);   
        }
        if($request['title']!=""){
            DB::table('news')
            ->where('id',$request['id'])
            ->update([
            'title'=> $request['title']
            ]);
        }
        if($request['subTitle']!=""){
            DB::table('news')
            ->where('id',$request['id'])
            ->update([
            'subTitle'=> $request['subTitle']
            ]);
        }
        if($request['link']!=""){
            DB::table('news')
            ->where('id',$request['id'])
            ->update([
            'linkPost'=> $request['link']
            ]);
        }
        $result=DB::table('news')
            ->where('id',$request['id'])
            ->get();
        return $result;
    }
    public function deleteNews($request) {
            $result= DB::table('news')
            ->where('id',$request['id'])
            ->delete();
            return $result;
    }
}