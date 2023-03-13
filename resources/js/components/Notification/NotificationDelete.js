import React from 'react';
import SwipeToDelete from 'react-swipe-to-delete-component';
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';
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
        <>
        <SwipeToDelete classNameTag='rounded mb-3' onDelete={()=>onDelete()}>
        <a className="list-group-item pt-3">
            <h4 className="list-group-item-heading">{props.data.memo.title}</h4>
            <p className="list-group-item-text">{props.data.date}</p>
        </a>
        </SwipeToDelete>
        </>
    );
}

export default NotificationDelete;