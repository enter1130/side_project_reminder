import React, { useEffect, useState } from 'react';

import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';
import NotificationDelete from './NotificationDelete';
import NotificationDeleteAll from './NotificationDeleteAll';

function Notification() {
    var [data,setData]=useState(null);
    const link='/api/notification';
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
            <NotificationDeleteAll result={returnResult} />
            <div className="list-group">
            {data.data?(data.data.map((item,i)=>(
                <NotificationDelete key={item.id} data={item} result={returnResult} />
            ))):'暫無提醒'}
            </div>
        </div>
    );
}

export default Notification;