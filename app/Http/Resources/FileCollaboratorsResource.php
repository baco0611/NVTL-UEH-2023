<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FileCollaboratorsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function convertFile()
    {
        $linkResource= new LinkResource();
        $link=$linkResource->Link();
        $file_extension=explode('.',$this->fileName)[1];
        $fileName=$this->fileName;
        if($file_extension=="pdf"){
            $pathFull = '/media/CTV/text/'.$fileName;
        }
        else{
            $pathFull = '/media/CTV/image/'.$fileName;
        }
        return $link .$pathFull;
    }
    public function toArray($request)
    {
        return [
            "file"=>$this->convertFile(),
            "fileName"=>$this->fileName,
        ];
    }
}