<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ListProudMate extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'mamber1'=>$this->name1,
            'studentCode1'=>$this->studentCode1,
            'member2'=>$this->name2,
            'studentCode2'=>$this->studentCode2,
            'member3'=>$this->name3,
            'studentCode3'=>$this->studentCode3
        ];
    }
}