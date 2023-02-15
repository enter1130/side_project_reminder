import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Memo from './Memo/Memo';
import Menu from './Menu/Menu';
import Warning from './Warning/Warning';
function Index() {

    return (
        <>
        <Warning />
        <BrowserRouter>
            <Menu />
            <div className='container'>
                <div className='border m-3 bg-light p-3 rounded-3' style={{minHeight:'100px'}}>
                    <Routes>
                        <Route path='/' element={<>home</>} />
                        <Route path='/memo' element={<><Memo /></>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
        </>
    );
}

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
