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
        Schema::create('casting_mc', function (Blueprint $table) {
            $table->id('idCasting');
            $table->timestamp('created_at')->useCurrent();
            $table->string('fullName',500);
            $table->string('phone',50);
            $table->string('schoolName',500);
            $table->string('className',500)->nullable();
            $table->string('studentCode',500)->nullable();
            $table->string('accountLink',500);
            $table->string('email',500);
            $table->string('portrait',500);
            $table->string('clipIntroduce',500);
            $table->string('prize',500)->nullable();
            $table->string('note',500)->nullable();
            $table->boolean('status')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('casting_mc');
    }
};