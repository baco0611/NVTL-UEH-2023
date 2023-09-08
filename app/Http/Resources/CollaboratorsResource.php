<?php

namespace App\Http\Resources;

use App\Service\CollaboratorsService;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;
use Carbon\Carbon;

class CollaboratorsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function informationFile(){
        $ctvService= new CollaboratorsService();
        $listFile= $ctvService->getArrayFile($this->idCollaborator,'information');
        return $listFile;
    }
    public function aspiration1File(){
        $ctvService= new CollaboratorsService();
        $listFile= $ctvService->getArrayFile($this->idCollaborator,'aspiration1');
        return $listFile;
    }
    public function aspiration2File(){
        $ctvService= new CollaboratorsService();
        $listFile= $ctvService->getArrayFile($this->idCollaborator,'aspiration2');
        return $listFile;
    }
    public function toArray($request)
    {
        $fakeId= Str::random(10)."-".strval($this->idCollaborator)."-".strval($this->idCollaborator*2)."-".strval($this->idCollaborator*5);
        return [
            "id"=>$fakeId,
            "createTime"=>Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->format('d/m/Y H:i:s'),
            "fullName"=>$this->fullName,
            "grade"=>$this->grade,
            "studentCode"=>$this->studentCode,
            "phone"=>$this->phone,
            "accountLink"=>$this->accountLink,
            "email"=>$this->email,
            "infomationFile"=>FileCollaboratorsResource::collection($this->informationFile()),
            "aspiration1"=>$this->aspiration1,
            "aspiration1File"=>FileCollaboratorsResource::collection($this->aspiration1File()),
            "aspiration2"=>strval($this->aspiration2),
            "aspiration2File"=>FileCollaboratorsResource::collection($this->aspiration2File()),
            "note"=>strval($this->note),
            "pass"=>$this->status
        ];
    }
}