<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\MemoFile;
use Illuminate\Http\Request;

class MemoFileController extends Controller
{
    public function index(){
        $result=false;
        $data=MemoFile::with('memo')->get();
        if($data){
            $result=true;
            return response()->json(['result'=>$result,'data'=>$data]);
        }
        return response()->json(['result'=>$result]);
    }

    public function show(Request $request){
        $result=false;
        $data=MemoFile::where('id',$request->id)->with('memo')->first();
        if($data){
            $result=true;
            return response()->json(['result'=>$result,'data'=>$data]);
        }
        return response()->json(['result'=>$result]);
    }

    public function store(Request $request){
        $result=false;
        $comment='失敗';
        $data=new MemoFile();
        $data->title=$request->title;
        $data->color=$request->color;
        if($request->text=='true'){
            $data->text='rgba(255,255,255,1)';
        }
        $query=$data->save();
        if($query){
            $comment='成功';
            $result=$query;
        }
        return response()->json(['result'=>$result,'comment'=>$comment]);
    }
}
