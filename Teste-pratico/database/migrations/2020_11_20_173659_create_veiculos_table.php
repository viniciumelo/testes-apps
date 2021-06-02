<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVeiculosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('veiculos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('placa');
            $table->string('renavan');
            $table->string('modelo');
            $table->string('marca');
            $table->string('ano');
            $table->string('proprietario');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations. 'placa', 'renavan', 'modelo', 'marca', 'ano', 'proprietario'
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('veiculos');
    }
}
