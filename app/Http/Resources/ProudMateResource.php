<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class ProudMateResource extends JsonResource
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
            'teamName'=>$this->teamName,
            'mamber1'=>$this->name1,
            'studentCode1'=>$this->studentCode1,
            'member2'=>$this->name2,
            'studentCode2'=>$this->studentCode2,
            'member3'=>$this->name3,
            'studentCode3'=>$this->studentCode3,
            "choice"=>$this->choice,
            'proof1'=>$this->proof,
            'status'=>$this->status
        ];
    }
}