import React from 'react';

function MemoUpdate(props) {
    const superagent = require('superagent');
    const link='/api/memo.update';

    function onSubmit(){
        let data=new FormData();
        data.append('id',props.data.id)
        if(props.data.done){
            data.append('done',0)
        }else{
            data.append('done',1)
        }
        superagent.post(link)
        .send(data) // sends a JSON post body
        .set('X-API-Key', 'foobar')
        .set('accept', 'json')
        .end((err, res) => {
            props.result(JSON.parse(res.text).result)
        });
    }

    function doned(data){
        if(props.data.done){
            return <s>{data}</s>
        }
        return data
    }

    return (
        <div className="mb-3 row">
            <div className="col-1">{props.number}</div>
            <div className="col-4">{doned(props.data.title)}</div>
            <div className="col-3">{props.data.date_start}</div>
            <div className="col-3">{props.data.date_end}</div>
            <div className="col-1">
                <input className="form-check-input" id='done' onChange={()=>onSubmit()} checked={props.data.done} type="checkbox" />
            </div>
        </div>
    );
}

export default MemoUpdate;