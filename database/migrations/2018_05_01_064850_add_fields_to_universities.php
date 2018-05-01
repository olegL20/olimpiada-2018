<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFieldsToUniversities extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('universities', function (Blueprint $table) {
            $table->string('address');
            $table->string('zip_code');
            $table->string('email');
            $table->string('phone');
            $table->string('site');
            $table->integer('parent_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('universities', function (Blueprint $table) {
            $table->dropColumn('address');
            $table->dropColumn('zip_code');
            $table->dropColumn('email');
            $table->dropColumn('phone');
            $table->dropColumn('site');
            $table->dropColumn('parent_id')->nullable();
        });
    }
}
