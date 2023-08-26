<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;


class GetProudMateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function checkProof()
    {
        if (strval($this->proof)==""){
            return false;
        }
        else{
            return true;
        }
    }
    public function toArray($request)
    {
        $fakeId= Str::random(10)."-".
        strval($this->idProudMate)."-".strval($this->idProudMate*4)."-".strval($this->idProudMate*5).'-'.Str::random(9);
        
        return [
            'idProudMate'=>$fakeId,
            'teamName'=>$this->teamName,
            "memberName1"=>$this->name1,
            "memberStudentCode1"=>$this->studentCode1,
            "memberName2"=>$this->name2,
            "memberStudentCode2"=>$this->studentCode2,
            "memberName3"=>$this->name3,
            "memberStudentCode3"=>$this->studentCode3,
            "proof"=> $this->checkProof(),
        ];
    }
}