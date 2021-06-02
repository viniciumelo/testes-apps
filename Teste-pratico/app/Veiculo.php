<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Veiculo extends Model
{
    protected $fillable = [      
        'placa', 'renavan', 'modelo', 'marca', 'ano', 'proprietario'
    ];

    protected $table = 'veiculos';
}
