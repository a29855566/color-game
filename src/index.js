import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Game from './components/Game';

import './index.css'


function App() {
    const [boxNum, setBoxNum] = useState(3)

    return (
        <>
            <div className='tabbar'>
                <div className='logo'>Color Game</div>
                <div className='normal' onClick={() => {setBoxNum(3)}}>Normal</div>
                <div className='hard' onClick={() => {setBoxNum(6)}}>Hard</div>
            </div>
            {<Game boxNum={boxNum} />}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
