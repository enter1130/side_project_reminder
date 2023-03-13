import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import File from './File/File';
import Memo from './Memo/Memo';
import Menu from './Menu/Menu';
import Notification from './Notification/Notification';
function Index() {

    return (
        <BrowserRouter>
            <Menu />
            <div className='container'>
                <div className='border m-3 bg-light p-3 rounded-3' style={{minHeight:'100px'}}>
                    <Routes>
                        <Route path='/' index element={<><File /></>} />
                        <Route path='/file' index element={<><Memo /></>} />
                        <Route path='/notification' index element={<><Notification /></>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
