<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File_Collaborators extends Model
{
    use HasFactory;
    protected $table = 'file_collaborators';
    protected $fillable = [
        "type",
        "fileName",
        "idCollaborator"
    ];
}