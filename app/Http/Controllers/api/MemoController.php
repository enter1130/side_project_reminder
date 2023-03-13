<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Memo;
use Carbon\Carbon;
use Illuminate\Http\Request;

class MemoController extends Controller
{
    public function index(){
        $result=false;
        $data=Memo::with('file')->orderBy('date','desc')->get();
        if($data){
            $result=true;
            return response()->json(['result'=>$result,'data'=>$data]);
        }
        return response()->json(['result'=>$result]);
    }

    public function store(Request $request){
        $result=false;
        $comment='失敗';
        $data=new Memo();
        $data->File_ID=$request->File_ID;
        $data->title=$request->title;
        $data->date_start=$request->date_start;
        $data->date_end=$request->date_end;
        $query=$data->save();
        if($query){
            $comment='成功';
            $result=$query;
        }
        return response()->json(['result'=>$result,'comment'=>$comment]);
    }

    public function update(Request $request){
        $result=false;
        $comment='失敗';
        $data=Memo::find($request->id);
        $data->done=(boolean)$request->done;
        $query=$data->save();
        if($query){
            $comment='成功';
            $result=$query;
        }
        return response()->json(['result'=>$result,'comment'=>$comment]);
    }

    // 檢查事項是否到期
    public function warning(){
        $data=array();
        foreach(Memo::orderBy('date_end','desc')->where('done',0)->take(4)->with('notification')->get() as $item){
            if($item->date<=Carbon::now()->addDay(3) && !$item->notification){
                array_push($data,$item);
            }
        }
        if(count($data)!=0){
            return $data;
        }
        return $data;
    }
}
