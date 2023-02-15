import React from 'react';
import useSWR from 'swr';
function Warning() {
    const fetcher = url => fetch(url).then(res => res.json());
    const link='/api/memo.warning';
    const {data} = useSWR(link, fetcher,{refreshInterval: 1000});
    
    if(!data) return (<></>)
    if(!data.result) return (<></>)
    return (
        <div style={{position:"absolute",top:'0',right:'0'}}>
            {data.data.map((item)=>(
                 <div className="toast" key={item.id}>
                    <div className="toast-header"><strong className="mr-auto">即將到期</strong></div>
                    <div className="toast-body">{item.title}</div>
                 </div>
            ))}
        </div>
    );
}

export default Warning;