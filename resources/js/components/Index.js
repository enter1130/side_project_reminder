import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Memo from './Memo/Memo';
import Menu from './Menu/Menu';
import Notification from './Notification/Notification';
import Warning from './Warning/Warning';
function Index() {

    return (
        <BrowserRouter>
            <Menu />
            <div className='container'>
                <div className='border m-3 bg-light p-3 rounded-3' style={{minHeight:'100px'}}>
                    <Routes>
                        <Route path='/' index element={<><Warning /><Memo /></>} />
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
