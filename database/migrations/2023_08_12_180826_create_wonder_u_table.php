<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wonder_u', function (Blueprint $table) {
            $table->id('idWonderU');
            $table->foreignId('idUser');
            $table->foreign('idUser')->references('id')->on('login');
            $table->string('proof1',500)->nullable();
            $table->string('proof2',500)->nullable();
            $table->boolean('status')->default(false);
            $table->timestamp('created_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wonder_u');
    }
};