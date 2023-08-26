<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProudMateResource;
use App\Http\Resources\SearchProudMateResource;
use App\Service\ProudMateService;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;

class ProudMateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getProudMate()
    {
        $proudMateService = new ProudMateService();
        $listProudMate = $proudMateService->getListProudMate();
        return response()->json([
            'data'=>ProudMateResource::collection($listProudMate),
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
    public function checkProudMate($id)
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
    public function searchMember(Request $request)
    {
        $key = $request['searchKey'];
        $proudMateService = new ProudMateService();
        $listSearch = $proudMateService->searchMember($key);
        $listResource= SearchProudMateResource::collection($listSearch);
        return response()->json([
            'data'=>$listResource,
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