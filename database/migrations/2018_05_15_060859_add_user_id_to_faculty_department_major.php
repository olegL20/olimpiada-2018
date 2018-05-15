<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUserIdToFacultyDepartmentMajor extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('faculties', function (Blueprint $table) {
            $table->integer('user_id');
        });
        Schema::table('departments', function (Blueprint $table) {
            $table->integer('user_id');
        });
        Schema::table('majors', function (Blueprint $table) {
            $table->integer('user_id');
        });
        Schema::table('subject_coefficients', function (Blueprint $table) {
            $table->integer('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('faculties', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
        Schema::table('departments', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
        Schema::table('majors', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
        Schema::table('subject_coefficients', function (Blueprint $table) {
            $table->dropColumn('user_id');
        });
    }
}
