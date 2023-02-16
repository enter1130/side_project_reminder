<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memo', function (Blueprint $table) {
            $table->id();
            $table->integer('File_ID')->comment('提醒事項文件夾ID');
            $table->string('title')->comment('提醒事項標題');
            $table->string('detail')->comment('提醒事項內容')->nullable();
            $table->boolean('done')->comment('是否完成')->default(false);
            $table->string('date')->comment('完成期限')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memo');
    }
}
