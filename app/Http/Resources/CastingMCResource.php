<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;
use Carbon\Carbon;

class CastingMCResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function convertImage()
    {
        $fileName=$this->portrait;
        $pathFull = '/media/casting/image/'.$fileName;
        return 'http://localhost:8000' .$pathFull;
    }
    public function convertVideo()
    {
        $fileName=$this->clipIntroduce;
        $pathFull = '/media/casting/video/'.$fileName;
        return 'http://localhost:8000' .$pathFull;
    }
    public function toArray($request)
    {
        $fakeId= Str::random(10)."-".strval($this->idCasting)."-".strval($this->idCasting*2)."-".strval($this->idCasting*5);
        return [
            'id'=>$fakeId,
            "createTime"=> Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->format('d/m/Y H:i:s'),
            "fullName"=>$this->fullName,
            "phone"=>$this->phone,
            "schoolName"=>$this->schoolName,
            "className"=>$this->className,
            "studentCode"=>$this->studentCode,
            "accountLink"=>$this->accountLink,
            "email"=>$this->email,
            "portrait"=>$this->convertImage(),
            "portraitName"=>$this->portrait,
            "clipIntroduce"=>$this->convertVideo(),
            "clipIntroduceName"=>$this->clipIntroduce,
            "prize"=>strval($this->prize),
            "note"=>strval($this->note),
            "pass"=>boolval($this->status)
        ];
    }
}