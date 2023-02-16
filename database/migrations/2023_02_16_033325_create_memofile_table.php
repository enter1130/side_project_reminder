<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMemofileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memofile', function (Blueprint $table) {
            $table->id();
            $table->string('text')->comment('文件夾文字顏色')->default('rgba(0,0,0,1)');
            $table->string('color')->comment('文件夾顏色')->default('rgba(13,180,185,0.5)');
            $table->string('title')->comment('提醒事項文件夾標題');
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
        Schema::dropIfExists('memofile');
    }
}
