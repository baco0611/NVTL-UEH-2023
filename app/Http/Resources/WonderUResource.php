<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class WonderUResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function checkProof(){
        if(strval($this->proof1)=="" && strval($this->proof2)==""){
            return false;
        }
        return true;
    }
    public function toArray($request)
    {
        $fakeId= Str::random(10)."-".strval($this->id)."-".strval($this->id*4)."-".strval($this->id*5).'-'.Str::random(9);
        return [
            "id"=>$fakeId,
            "isSuccess"=>$this->checkProof()
        ];
    }
}