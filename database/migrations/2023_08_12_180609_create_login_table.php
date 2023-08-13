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
        Schema::create('login', function (Blueprint $table) {
            $table->id('idUser');
            $table->string('fullName', 500);
            $table->string('department', 500);
            $table->string('phone', 50);
            $table->string('email', 500);
            $table->string('studentCode', 500);
            $table->string('passWord', 500);
            $table->boolean('permission')->default(false);
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
        Schema::dropIfExists('login');
    }
};