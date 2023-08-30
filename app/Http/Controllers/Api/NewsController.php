<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\NewsResource;
use App\Models\News;
use App\Service\NewsService;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;

class NewsController extends Controller
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
    public function storeNews(Request $request)
    {
        $img=$request['thumbnail'];
        $image_name=$request['thumbnailName'];
        $folderPath = public_path() . '/media/' . 'imageNews/';
        $image_parts = explode(";base64,", $img);
        $uniqid= uniqid();
        // $image_type_aux = explode("application/", $image_parts[0]);
        // $image_type_aux = explode("video/", $image_parts[0]);
        $image_type_aux = explode("image/", $image_parts[0]);
        $image_type = $image_type_aux[1];
        $image_base64 = base64_decode($image_parts[1]);
        $file = $folderPath . $image_name . '_'.$uniqid.'.' . $image_type;
        file_put_contents($file, $image_base64);
        $imageFile=$image_name. '_'.$uniqid.'.'.$image_type;
        $newsService= new NewsService();
        $item= $newsService->insertData($request,$imageFile);
        $newsResource= NewsResource::collection($item);
        return response()->json([
            'data'=>$newsResource,
            'status'=>HttpResponse::HTTP_OK
        ], HttpResponse::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function sortByTime(Request $request)
    {
        $newsService= new NewsService();
        $listItem= $newsService->sortTime($request);
        $newsResource= NewsResource::collection($listItem);
        return response()->json([
            'category'=>$request['category'],
            'data'=>$newsResource,
            'status'=>HttpResponse::HTTP_OK
        ], HttpResponse::HTTP_OK);
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