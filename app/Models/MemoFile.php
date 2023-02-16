<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MemoFile extends Model
{
    use HasFactory,SoftDeletes;
    protected $table='memofile';

    public function memo(){
        return $this->hasMany(Memo::class,'File_ID','id');
    }
}
