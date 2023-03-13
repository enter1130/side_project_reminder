import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCheckCircle } from "react-icons/ai";

function MemoStore(props) {
    const superagent = require('superagent');
    const link='/api/memo.store';
    const {handleSubmit}=useForm();

    function onSubmit(){
        let data=new FormData();
        data.append('File_ID',props.file.id)
        data.append('title',document.getElementById('title').value)
        data.append('date_start',document.getElementById('date_start').value)
        data.append('date_end',document.getElementById('date_end').value)
        superagent.post(link)
        .send(data) // sends a JSON post body
        .set('X-API-Key', 'foobar')
        .set('accept', 'json')
        .end((err, res) => {
            props.result(JSON.parse(res.text).result)
            document.getElementById('title').value=''
            document.getElementById('date_start').value=''
            document.getElementById('date_end').value=''
        });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 row">
                <div className="col-1">{props.number}</div>
                <div className="col-4"><input type="text" className='form-control' id='title' name="title" required /></div>
                <div className="col-3"><input type="datetime-local" className='form-control' id='date_start' name="date_start" required /></div>
                <div className="col-3"><input type="datetime-local" className='form-control' id='date_end' name="date_end" required /></div>
                <div className="col-1"><button type="submit" className='btn btn-light' ><AiOutlineCheckCircle /></button></div>
            </div>
        </form>
    );
}

export default MemoStore;