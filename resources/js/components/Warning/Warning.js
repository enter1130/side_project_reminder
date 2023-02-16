import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import useSWR from 'swr';
function Warning() {
    const superagent = require('superagent');
    const fetcher = url => fetch(url).then(res => res.json());
    const link='/api/notification.warning';
    const {data} = useSWR(link, fetcher,{refreshInterval: 500});
    
    function onDimiss(id){
        const link='/api/notification.dismiss';
        let data=new FormData();
        data.append('id',id)
        superagent.post(link)
        .send(data) // sends a JSON post body
        .set('X-API-Key', 'foobar')
        .set('accept', 'json')
        .end((err, res) => {
            JSON.parse(res.text).result
        });
    }

    if(!data) return (<></>)
    if(!data.result) return (<></>)
    return (
        <ToastContainer position='top-end'>
            {data.data.map((item)=>(
                <Toast key={item.id} onClose={()=>onDimiss(item.id)}>
                    <Toast.Header><strong className="me-auto">即將到期</strong></Toast.Header>
                    <Toast.Body>{item.memo.title}</Toast.Body>
                </Toast>
            ))}
        </ToastContainer>
    );
}

export default Warning;