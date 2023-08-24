<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CastingStage extends Model
{
    use HasFactory;
    protected $table = 'casting_stage';
    protected $fillable = [
        "fullName",
        "phone",
        "schoolName",
        "className",
        "studentCode",
        "accountLink",
        "email",
        "categoryStage",
        "fileMusic",
        "clipTemplate",
        "prize"
    ];
}