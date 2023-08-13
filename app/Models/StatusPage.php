<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatusPage extends Model
{
    use HasFactory;
    protected $table = 'status_page';
    protected $fillable = [
        'pageName', 'status'
    ];
}