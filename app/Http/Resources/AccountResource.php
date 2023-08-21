<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class AccountResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $fakeId= Str::random(10)."-".strval($this->id)."-".strval($this->id*4)."-".strval($this->id*5).Str::random(9);
        return  [
            'id'=>$fakeId,
            'fullName'=>$this->fullName,
            'studentCode'=>$this->studentCode,
            'department'=>$this->department,
            'email'=>$this->email,
            'phone'=>$this->phone,
            'permission' => $this->permission
        ];
    }
}