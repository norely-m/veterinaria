<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empleados extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'telefono', 'correo', 'contrasena', 'fecha_contratacion', 'R_idRol'];

    public function rol()
    {
        return $this->belongsTo(Roles::class, 'R_idRol');
    }
}
