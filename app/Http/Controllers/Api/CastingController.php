<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Service\CastingService;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;

class CastingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function insertCastingStage(Request $request)
    {
        $valid=$this->validate($request, array(
            "fullName"=> 'required',
            "phone"=> 'required',
            "schoolName"=> 'required',
            "accountLink"=> 'required',
            "email"=> 'required|email',
            "categoryStage"=> 'required',
            "fileMusic"=> 'required',
            "fileMusicName"=> 'required',
            "clipTemplate"=> 'required',
            "clipTemplateName"=> 'required',
        ),array(
            'required' => ':attribute không được bỏ trống',
        ), array(
            'fullName' => 'Họ và Tên',
            'phone'=>'Số điện thoại',
            'email'=>'Email',
            'schoolName'=>'Tên trường',
            'accountLink'=>'Link Facebook',
            'categoryStage'=>'Thể loại văn nghệ',
            'fileMusic'=>'File nhạc',
            'fileMusicName'=>'Tên file nhạc',
            'clipTemplate'=>'Clip mẫu',
            'clipTemplateName'=>'Tên clip mẫu',
        ));
        $music=$request['fileMusic'];
        $music_name=$request['fileMusicName'];
        $folderPath = public_path() . '/media/' . 'casting/music/';
        $music_parts = explode(";base64,", $music);
        $music_type_aux = explode("audio/", $music_parts[0]);
        $music_type = $music_type_aux[1];
        $music_base64 = base64_decode($music_parts[1]);
        $file = $folderPath . $music_name.'_'. uniqid(). '.' . $music_type;
        file_put_contents($file, $music_base64);
        $fileMusic=$music_name.'.'.$music_type;

        $clip=$request['clipTemplate'];
        $clip_name=$request['clipTemplateName'];
        $folderPath = public_path() . '/media/' . 'casting/video/';
        $clip_parts = explode(";base64,", $clip);
        $clip_type_aux = explode("video/", $clip_parts[0]);
        $clip_type = $clip_type_aux[1];
        $clip_base64 = base64_decode($clip_parts[1]);
        $file = $folderPath . $clip_name .'_'. uniqid(). '.' . $clip_type;
        file_put_contents($file, $clip_base64);
        $clipTemplate=$clip_name.'.'.$clip_type;
        $stageService= new CastingService();
        $item = $stageService->insertCastingStage($request,$clipTemplate,$fileMusic);
        if($item){
            return response()->json([
                'mess'=>$item,
                'status'=>HttpResponse::HTTP_OK
            ], HttpResponse::HTTP_OK);
        }
        else{
            return response()->json([
                'mess'=>$item,
                'status'=>HttpResponse::HTTP_UNPROCESSABLE_ENTITY
            ], HttpResponse::HTTP_OK);
        }
    }
    public function insertCastingMC(Request $request)
    {
        $valid=$this->validate($request, array(
            "fullName"=> 'required',
            "phone"=> 'required',
            "schoolName"=> 'required',
            "accountLink"=> 'required',
            "email"=> 'required|email',
            "portrait"=> 'required',
            "portraitName"=> 'required',
            "clipIntroduce"=> 'required',
            "clipIntroduceName"=> 'required'
        ),array(
            'required' => ':attribute không được bỏ trống',
        ), array(
            'fullName' => 'Họ và Tên',
            'phone'=>'Số điện thoại',
            'email'=>'Email',
            'schoolName'=>'Tên trường',
            'accountLink'=>'Link Facebook',
            'portrait'=>'Ảnh chân dung',
            'portraitName'=>'Tên ảnh chân dung',
            'clipIntroduce'=>'Clip giới thiêu',
            'clipIntroduceName'=>'Tên clip giới thiệu',
        ));
        $img=$request['portrait'];
        $image_name=$request['portraitName'];
        $folderPath = public_path() . '/media/' . 'casting/image/';
        $image_parts = explode(";base64,", $img);
        $image_type_aux = explode("image/", $image_parts[0]);
        $image_type = $image_type_aux[1];
        $image_base64 = base64_decode($image_parts[1]);
        $file = $folderPath . $image_name. '_'. uniqid(). '.' . $image_type;
        file_put_contents($file, $image_base64);
        $imageFile=$image_name.'.'.$image_type;

        $clip=$request['clipIntroduce'];
        $clip_name=$request['clipIntroduceName'];
        $folderPath = public_path() . '/media/' . 'casting/video/';
        $clip_parts = explode(";base64,", $clip);
        $clip_type_aux = explode("video/", $clip_parts[0]);
        $clip_type = $clip_type_aux[1];
        $clip_base64 = base64_decode($clip_parts[1]);
        $file = $folderPath . $clip_name . '_'. uniqid().'.' . $clip_type;
        file_put_contents($file, $clip_base64);
        $clipIntroduce=$clip_name.'.'.$clip_type;
        $stageService= new CastingService();
        $item = $stageService->insertCastingMC($request,$clipIntroduce,$imageFile);
        if($item){
            return response()->json([
                'mess'=>$item,
                'status'=>HttpResponse::HTTP_OK
            ], HttpResponse::HTTP_OK);
        }
        else{
            return response()->json([
                'mess'=>$item,
                'status'=>HttpResponse::HTTP_UNPROCESSABLE_ENTITY
            ]);
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}