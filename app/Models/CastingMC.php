<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CastingMC extends Model
{
    use HasFactory;
    protected $table = 'casting_mc';
    protected $fillable = [
        "fullName",
        "phone",
        "schoolName",
        "className",
        "studentCode",
        "accountLink",
        "email",
        "portrait",
        "clipIntroduce",
        "prize"
    ];
}