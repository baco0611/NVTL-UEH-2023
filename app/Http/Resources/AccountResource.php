<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
        return  [
            'fullName'=>$this->fullName,
            'studentCode'=>$this->studentCode,
            'department'=>$this->department,
            'email'=>$this->email,
            'phone'=>$this->phone,
            'permission' => $this->permission
        ];
    }
}