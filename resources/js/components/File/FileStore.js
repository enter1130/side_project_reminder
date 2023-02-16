import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCheckCircle } from "react-icons/ai";

function FileStore(props) {
    const superagent = require('superagent');
    const link='/api/file.store';
    const {handleSubmit}=useForm();

    function onSubmit(){
        let data=new FormData();
        data.append('title',document.getElementById('title').value)
        superagent.post(link)
        .send(data) // sends a JSON post body
        .set('X-API-Key', 'foobar')
        .set('accept', 'json')
        .end((err, res) => {
            props.result(JSON.parse(res.text).result)
            document.getElementById('title').value=''
        });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3 row align-items-center">
                <div className="col-5">
                    <label>文件夾名稱</label>
                </div>
                <div className="col-6">
                    <input type="text" className='form-control' id='title' name="title" required />
                </div>
                <div className="col-1">
                    <button type="submit" className='btn' ><AiOutlineCheckCircle /></button>
                </div>
            </div>
        </form>
    );
}

export default FileStore;