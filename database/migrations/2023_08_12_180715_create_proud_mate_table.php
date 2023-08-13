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
        Schema::create('proud_mate', function (Blueprint $table) {
            $table->id('idProudMate');
            $table->string('teamName', 500);
            $table->foreignId('member1');
            $table->foreign('member1')->references('idUser')->on('login');
            $table->foreignId('member2');
            $table->foreign('member2')->references('idUser')->on('login');
            $table->foreignId('member3');
            $table->foreign('member3')->references('idUser')->on('login');
            $table->string('proof1', 500);
            $table->string('proof2', 500);
            $table->string('proof3', 500);
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
        Schema::dropIfExists('proud_mate');
    }
};