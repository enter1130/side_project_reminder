<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Notification extends Model
{
    use HasFactory,SoftDeletes;
    protected $table='notification';

    public function memo(){
        return $this->belongsTo(Memo::class,'Memo_ID','id');
    }
}
