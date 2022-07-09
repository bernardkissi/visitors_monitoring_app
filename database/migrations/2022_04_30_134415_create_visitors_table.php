<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('visitors', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->nullable()->index()->unsigned()->constrained('users');

            $table->string('fullname');
            $table->string('email');
            $table->string('phone');
            $table->string('address');
            $table->string('occupation');
            $table->string('age_range');

            $table->string('state');

            $table->string('service_attendance');
            $table->text('service_attendance_detail')->nullable();

            $table->string('get_here_option');
            $table->text('get_here_detail')->nullable();

            $table->string('membership');
            $table->string('membership_detail')->nullable();

            $table->string('help_information');
            $table->text('help_information_detail')->nullable();

            // $table->string('created_by')->nullable;

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('visitors');
    }
};
