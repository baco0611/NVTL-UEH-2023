<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\WonderUResource;
use App\Service\WonderUService;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;

class WonderUController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getWonderU($idUser)
    {
        $wonderUService = new WonderUService();
        $itemService=$wonderUService->getWonderU($idUser);
        $wonderUResource=WonderUResource::collection($itemService);
        return response()->json([
            'data'=>$wonderUResource,
            'status'=>HttpResponse::HTTP_OK
        ], HttpResponse::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postWonderU(Request $request)
    {
        $wonderUService = new WonderUService();
        //xử lý hình ảnh 2 minh chứng
        $uniqid1=uniqid();
        $uniqid2=uniqid();
        $img1=$request['proof1'];
        $img2=$request['proof2'];
        $proof1='';
        $proof2='';
        if ($img1!="" && $img2!=""){
            $image_name1=$request['proof1Name'];
            $image_name2=$request['proof2Name'];
            $folderPath = public_path() . '/' . 'wonderU/';
            $image_parts1 = explode(";base64,", $img1);
            $image_parts2 = explode(";base64,", $img2);
            $image_type_aux1 = explode("image/", $image_parts1[0]);
            $image_type_aux2 = explode("image/", $image_parts2[0]);
            $image_type1 = $image_type_aux1[1];
            $image_type2 = $image_type_aux2[1];
            $image1_base64 = base64_decode($image_parts1[1]);
            $image2_base64 = base64_decode($image_parts2[1]);
            $proof1=$image_name1. '_'. $uniqid1.'.'.$image_type1;
            $proof2=$image_name2. '_'. $uniqid2.'.'.$image_type2;
            $file1 = $folderPath . $proof1;
            $file2 = $folderPath . $proof2;
            file_put_contents($file1, $image1_base64);
            file_put_contents($file2, $image2_base64);   
        }
     
        $itemService= $wonderUService->insertData($request,$proof1,$proof2);
        if ($itemService){
            return response()->json([
                'mess'=>$itemService,
                'status'=>HttpResponse::HTTP_OK
            ], HttpResponse::HTTP_OK);
        }
        else{
            return response()->json([
                'mess'=>$itemService,
                'status'=>HttpResponse::HTTP_NOT_IMPLEMENTED
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