<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class usuarios extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'email', 'password', 'phone', 'fecha_registro'];

    protected $hidden = ['password'];
}
