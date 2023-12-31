<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PrideTakeResource;
use App\Service\LoginService;
use App\Service\PrideTakeService;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;


class PrideTakeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPrideTake()
    {
        $prideTakeService = new PrideTakeService();
        $listPrideTake = $prideTakeService->getListPrideTake();
        return response()->json([
            'data'=>PrideTakeResource::collection($listPrideTake),
            'status'=>HttpResponse::HTTP_OK
        ], HttpResponse::HTTP_OK);
    }
    public function insertPrideTake(Request $request){
        $id=$request['id'];
        $userService = new LoginService();
        $user=$userService->getAccount($id);
        if (Empty(json_decode($user))) {
            return response()->json([
                'mess'=>'Không tồn tại người dùng',
                'status' =>HttpResponse::HTTP_UNAUTHORIZED
            ]);
        }
        $prideTakeService= new PrideTakeService();
        $item=$prideTakeService->insertData($id);
        return response()->json([
            'mess'=>boolval($item),
            'status'=>HttpResponse::HTTP_OK
        ], HttpResponse::HTTP_OK);
    }
    public function sortByTime(Request $request){
        $key=$request['createTime'];
        $prideTakeService= new PrideTakeService();
        $listItem=$prideTakeService->sortTime($key);
        return response()->json([
            'data'=>PrideTakeResource::collection($listItem),
            'status'=>HttpResponse::HTTP_OK
        ], HttpResponse::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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