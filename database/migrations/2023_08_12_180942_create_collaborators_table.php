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
        Schema::create('collaborators', function (Blueprint $table) {
            $table->id('idCollaborator');
            $table->timestamp('created_at')->useCurrent();
            $table->string('fullName',500);
            $table->string('grade',50);
            $table->string('studentCode',500);
            $table->string('phone',50);
            $table->string('acountLink',500);
            $table->string('email',500);
            $table->string('aspiration1',500);
            $table->string('aspiration2',500);
            $table->string('note')->nullable();
            $table->boolean('status',500)->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('collaborators');
    }
};