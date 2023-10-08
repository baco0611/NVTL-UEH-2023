<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;
class ListPrideTake extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $fakeId= Str::random(10)."-".strval($this->idPrideTake)."-".strval($this->idPrideTake*2)."-".strval($this->idPrideTake*5);
        return [
            'id'=>$fakeId,
            'fullName'=>$this->fullName,
            'studentCode'=>$this->studentCode
        ];
    }
}