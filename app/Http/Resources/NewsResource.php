<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NewsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function convertImage()
    {
        $fileName=$this->thumbnail;
        $pathFull = '/imageNews'.$fileName;
        return 'http://localhost:8000' .$pathFull;
    }
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'subTitle'=>$this->subTitle,
            'thumbnail'=>$this->convertImage(),
            'link'=>$this->linkPost,
            'category'=>$this->category
        ];
    }
}