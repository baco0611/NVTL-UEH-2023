<?php

namespace App\Service;

use Illuminate\Support\Facades\DB;


class NewsService
{
    public function insertData($request,$image){
        $result=DB::table('news')
        ->insert([
            'title'=> $request['title'],
            'subTitle'=>$request['subTitle'],
            'thumbnail'=>$image,
            'category'=>$request['category'],
            'linkPost'=>$request['linkPost'],
        ]);
        return $result;
    }
       
}