<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\GetProudMateResource;
use App\Http\Resources\ProudMateResource;
use App\Http\Resources\SearchProudMateResource;
use App\Service\ProudMateService;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Arr;

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
        $proudMateService = new ProudMateService();
        $listItem = $proudMateService->checkProudMate($id);
        if (Empty($listItem)) {
            return response()->json([
                "condition"=> false,
                'status'=>HttpResponse::HTTP_OK
            ]);
        }
        $listResource= GetProudMateResource::collection($listItem);
        return response()->json([
            'data'=>$listResource,
            "condition"=> true,
            'status'=>HttpResponse::HTTP_OK
        ], HttpResponse::HTTP_OK);
 
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
        $tmp=array();
        foreach($listSearch as $val) {
            $item= $proudMateService->checkProudMate($val->id);  
            if (Empty($item)) {
                array_push($tmp, $val);
            }
        }
        $listResource= SearchProudMateResource::collection($tmp);
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