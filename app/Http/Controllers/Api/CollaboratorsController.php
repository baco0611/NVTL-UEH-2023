<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBlogCTV;
use App\Service\CollaboratorsService;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;

class CollaboratorsController extends Controller
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
    public function postCollaborators(StoreBlogCTV $request)
    {
        $collaboratorsService= new CollaboratorsService();
        $idCollaborator = $collaboratorsService->insertCollaborators($request);
        $arrFile=$request['files'];
        foreach($arrFile as $val) {
            $uniqid= uniqid();
            $fileJson= $val['file'];//xâu file base64
            $fileNameJson=$val['fileName'];//tên file request gửi về
            $key=explode(':',explode('/',$fileJson)[0])[1];//lấy ra file đó là image hay video hay text từ base64 
            $file_extension=explode('/',explode(';',$fileJson)[0])[1];//lấy ra đuôi file trong base64
            $typeDB=$val['type'];//có 3 type: information, aspiration1 và aspiration2
            $fileNameDB =$fileNameJson.'_'. $uniqid. '.'.$file_extension;
            if ($key=='image'){
                $folderPath = public_path() . '/media/' . 'CTV/image/';
            }
            if ($key=='video'){
                $folderPath = public_path() . '/media/' . 'CTV/video/';
            }
            if ($key=='application'){
                $folderPath = public_path() . '/media/' . 'CTV/text/';
            }
            $file_parts = explode(";base64,", $fileJson);
            $file_base64 = base64_decode($file_parts[1]);
            $file = $folderPath . $fileNameDB;
            file_put_contents($file, $file_base64);//ghi file vào 
            $result = $collaboratorsService->insert_file_Collaborators($typeDB,$fileNameDB,$idCollaborator);
        }
        return response()->json([
            'mess'=>$result,
            'status'=>HttpResponse::HTTP_OK
        ], HttpResponse::HTTP_OK);
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