import React, { useEffect, useState } from 'react';
import { AiFillFolderOpen } from "react-icons/ai";
import FileStore from './FileStore';

function File() {
    var [data,setData]=useState(null);
    const link='/api/file';
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
            <FileStore result={returnResult} />
            <div className="mb-3 row">
                {data.data.map((item)=>(
                    <div key={item.id} className="col-6">
                        <div onClick={()=>window.location.href=`/file?id=${item.id}`} className='border rounded-3 d-flex flex-column align-items-center justify-content-center' style={{minHeight:'200px',minWidth:'200px'}}>
                            <h1><AiFillFolderOpen /></h1>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default File;