import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineCheckCircle } from "react-icons/ai";
import tinycolor from 'tinycolor2';

function FileStore(props) {
    const superagent = require('superagent');
    const link='/api/file.store';
    const {handleSubmit}=useForm();

    function onSubmit(){
        let data=new FormData();
        data.append('title',document.getElementById('title').value)
        data.append('color',tinycolor(document.getElementById('color').value).setAlpha(.5).toRgbString())
        data.append('text',tinycolor(document.getElementById('color').value).isDark())
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
                <div className="col-4">
                    <label>文件夾名稱</label>
                </div>
                <div className="col-3">
                    <input type="text" className='form-control' id='title' name="title" required />
                </div>
                <div className="col-3">
                    <input type="color" style={{minHeight:'37.02px'}} className='form-control' id='color' name="color" required />
                </div>
                <div className="col-1">
                    <button type="submit" className='btn' ><AiOutlineCheckCircle /></button>
                </div>
            </div>
        </form>
    );
}

export default FileStore;