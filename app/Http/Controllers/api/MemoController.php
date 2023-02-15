<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Memo;
use Carbon\Carbon;
use Illuminate\Http\Request;

class MemoController extends Controller
{
    public function warning(){
        $result=false;
        $data=array();
        foreach(Memo::orderBy('date','desc')->where('done',0)->take(4)->get() as $item){
            if($item->date<=Carbon::now()->addDay(3)){
                array_push($data,$item);
            }
        }
        if(count($data)!=0){
            $result=true;
            return response()->json(['result'=>$result,'data'=>$data]);
        }
        return response()->json(['result'=>$result]);
    }

    public function index(){
        $result=false;
        $data=Memo::orderBy('date','desc')->get();
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
        $data->title=$request->title;
        $data->date=$request->date;
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
}
