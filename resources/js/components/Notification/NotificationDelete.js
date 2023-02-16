import React from 'react';
import { AiFillDelete } from "react-icons/ai";

function NotificationDelete(props) {
    const superagent = require('superagent');
    const link='/api/notification.delete';

    function onDelete(){
        let data=new FormData();
        data.append('id',props.data.id)
        superagent.post(link)
        .send(data) // sends a JSON post body
        .set('X-API-Key', 'foobar')
        .set('accept', 'json')
        .end((err, res) => {
            props.result(JSON.parse(res.text).result)
        });
    }

    return (
        <div className="mb-3 row align-items-center border m-3 bg-dark text-light p-3 rounded-3">
            <div className="col-sm-5">{props.data.memo.title}</div>
            <div className="col-sm-5">{props.data.date}</div>
            <div className="col-sm-2">
                <button className="btn btn-light rounded-3" onClick={()=>onDelete()}>清除 <AiFillDelete /></button>
            </div>
        </div>
    );
}

export default NotificationDelete;