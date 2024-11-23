<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Citas extends Model
{
    use HasFactory;
    protected $fillable = ['fecha', 'hora', 'motivo', 'estatus_id', 'mascota_id', 'E_empleado_id'];

    public function estatus()
    {
        return $this->belongsTo(Estatus::class, 'estatus_id');
    }

    public function mascota()
    {
        return $this->belongsTo(Mascota::class, 'mascota_id');
    }

    public function empleado()
    {
        return $this->belongsTo(Empleado::class, 'E_empleado_id');
    }
}
