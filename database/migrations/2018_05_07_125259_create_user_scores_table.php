<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_scores', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->float('average_score_zno');
            $table->float('additional_courses')->default(0);
            $table->text('subjects_score');
            $table->float('summary')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_scores');
    }
}
