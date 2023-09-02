<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WonderU extends Model
{
    use HasFactory;
    protected $table = 'wonder_u';
    protected $fillable = [
        'idUser','proof1','proof2'
    ];

}