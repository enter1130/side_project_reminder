import React, { useEffect, useState } from 'react';
import MemoStore from './MemoStore';
import MemoUpdate from './MemoUpdate';
function Memo() {
    var [data,setData]=useState(null);
    const link='/api/memo';
    function getData(){
        fetch(link,{
            method:'GET',
        }).then(response=>{
            return response.json()
        }).then(res=>{
            if(res.result!=false){
                setData(res)
            }
        })
    }
    useEffect(()=>{
        getData()
    },[])

    const returnResult=()=>getData()

    if(!data) return (<></>)
    return (
        <div className='text-center'>
            <div className="mb-3 row">
                <div className="col-1">#</div>
                <div className="col-5">提醒事項</div>
                <div className="col-5">期限</div>
                <div className="col-1">操作</div>
            </div>
            {data.data?(data.data.map((item,i)=>(
                <MemoUpdate key={item.id} number={i+1} data={item} result={returnResult} />
            ))):'暫無提醒'}
            <MemoStore number={data.data.length+1} result={returnResult} />
        </div>
    );
}

export default Memo;