<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Carbon\Carbon;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    public function index(){
        $result=false;
        $data=Notification::with('memo')->get();
        if($data){
            $result=true;
            return response()->json(['result'=>$result,'data'=>$data]);
        }
        return response()->json(['result'=>$result]);
    }

    public function store($Memo_ID,$date){
        $data=Notification::where('Memo_ID',$Memo_ID)->where('date','>=',Carbon::now()->subDay(3))->withTrashed()->first();
        if(!$data){
            $data=new Notification();
            $data->Memo_ID=$Memo_ID;
            $data->date=$date;
            $query=$data->save();
            if($query){
                return $query;
            }
        }
        return false;
    }

    public function delete(Request $request){
        $result=false;
        $comment='失敗';
        $data=Notification::find($request->id);
        if($data){
            $query=$data->delete();
            if($query){
                $comment='成功';
                $result=$query;
            }
        }

        return response()->json(['result'=>$result,'comment'=>$comment]);
    }

    public function deleteAll(){
        $result=false;
        $comment='失敗';
        $query=Notification::query()->delete();
        if($query){
            $comment='成功';
            $result=$query;
        }
        return response()->json(['result'=>$result,'comment'=>$comment]);
    }

    public function warning(){
        $result=false;
        $warning=app(MemoController::class)->warning();
        if(count($warning)!=0){
            foreach($warning as $item){
                $this->store($item->id,Carbon::now());
            }
        }
        $data=Notification::where('dismiss',0)->with('memo')->get();
        if($data){
            $result=true;
            return response()->json(['result'=>$result,'data'=>$data]);
        }
        return response()->json(['result'=>$result]);
    }

    public function dismiss(Request $request){
        $comment='失敗';
        $data=Notification::find($request->id);
        if($data){
            $data->dismiss=1;
            $query=$data->save();
            if($query){
                $comment='成功';
                $result=$query;
            }
        }

        return response()->json(['result'=>$result,'comment'=>$comment]);
    }
}
