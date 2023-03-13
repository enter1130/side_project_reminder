import React, { useEffect, useState } from 'react';
import Warning from '../Warning/Warning';
import MemoStore from './MemoStore';
import MemoUpdate from './MemoUpdate';

function Memo() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    var [data,setData]=useState(null);
    const link=`/api/file.memo?id=${urlParams.get('id')}`;
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
        <div className='text-center row'>
            <div className='col-8'>
                <div className='border rounded p-3' style={{minHeight:'300px'}}>
                <h1>{data.data.title}</h1>
                <div className="mb-3 row">
                    <div className="col-1">#</div>
                    <div className="col-4">提醒事項</div>
                    <div className="col-6">期限</div>
                    <div className="col-1">操作</div>
                </div>
                {data.data?(data.data.memo.map((item,i)=>(
                    <MemoUpdate key={item.id} number={i+1} data={item} result={returnResult} />
                ))):'暫無提醒'}
                <MemoStore number={data.data.memo.length+1} file={data.data} result={returnResult} />
                </div>
            </div>
            <div className='col-4'>
                <div className='border rounded p-3' style={{minHeight:'300px'}}>
                    <Warning />
                </div>
            </div>
        </div>
    );
}

export default Memo;