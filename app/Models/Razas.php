<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Razas extends Model
{
    use HasFactory;
    protected $fillable = ['nombre_raza', 'E_especie_id'];

    public function especie()
    {
        return $this->belongsTo(Especies::class, 'E_especie_id');
    }
}
