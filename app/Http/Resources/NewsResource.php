<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

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
        $pathFull = '/media/imageNews/'.$fileName;
        return 'http://localhost:8000' .$pathFull;
    }
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'subTitle'=>$this->subTitle,
            'thumbnail'=>$this->convertImage(),
            'linkPost'=>$this->linkPost,
            'createTime'=>Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->format('d/m/Y H:i:s')
        ];
    }
}