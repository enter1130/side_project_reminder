import React from 'react';
import { AiFillDelete } from "react-icons/ai";

function NotificationDeleteAll(props) {
    const superagent = require('superagent');
    const link='/api/notification.delete.all';

    function onDelete(){
        superagent.delete(link)
        .set('X-API-Key', 'foobar')
        .set('accept', 'json')
        .end((err, res) => {
            JSON.parse(res.text).result
        });
    }

    return (
        <div className="mb-3 text-end">
            <button className="btn btn-light rounded-3" onClick={()=>onDelete()}>清除全部 <AiFillDelete /></button>
        </div>
    );
}

export default NotificationDeleteAll;