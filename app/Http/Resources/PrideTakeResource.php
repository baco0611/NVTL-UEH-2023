<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PrideTakeResource extends JsonResource
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
            'createTime'=>Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->format('d/m/Y H:i:s'),
            'fullName'=>$this->fullName,
            'studentCode'=>$this->studentCode,
            'email'=>$this->email,
        ];
    }
}