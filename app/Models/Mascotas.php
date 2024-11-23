<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mascotas extends Model
{
    use HasFactory;
    protected $fillable = ['nombre', 'edad', 'usuario_id', 'E_especie_id'];

    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'usuario_id');
    }

    public function especie()
    {
        return $this->belongsTo(Especie::class, 'E_especie_id');
    }
}
