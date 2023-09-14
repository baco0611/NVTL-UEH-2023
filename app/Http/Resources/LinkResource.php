<?php

namespace App\Http\Resources;


class LinkResource 
{

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function Link()
    {
        return 'http://localhost:8000';
    }
}