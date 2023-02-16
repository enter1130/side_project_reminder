<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Memo extends Model
{
    use HasFactory,SoftDeletes;
    protected $table='memo';

    public function notification(){
        return $this->hasOne(Notification::class,'Memo_ID','id');
    }

    public function file(){
        return $this->belongsTo(MemoFile::class,'File_ID','id');
    }
}
