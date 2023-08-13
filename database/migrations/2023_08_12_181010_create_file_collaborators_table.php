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
        Schema::create('file_collaborators', function (Blueprint $table) {
            $table->id('idFile');
            $table->string('type',50);
            $table->string('fileName',500);
            $table->foreignId('idCollaborator');
            $table->foreign('idCollaborator')->references('idCollaborator')->on('collaborators');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('file_collaborators');
    }
};