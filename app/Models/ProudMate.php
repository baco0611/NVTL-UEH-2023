<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProudMate extends Model
{
    use HasFactory;
    protected $table = 'proud_mate';
    protected $fillable = [
        'member1', 'member2','member3','teamName'
    ];
}