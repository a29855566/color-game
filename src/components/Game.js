import React, { useEffect, useState } from 'react';
import {useRef} from 'react';
import ChoosingBoxes from './ChoosingBoxes';
import Timer from './Timer';
import './Game.css'


function b(num) {
    let colors = []
    for (let i = 0; i < num; ++i) {
        colors.push({
            R: Math.floor(Math.random() * 255),
            G: Math.floor(Math.random() * 255),
            B: Math.floor(Math.random() * 255),
        })
    }
    return colors;
}

function Game(props) {
    const [backColor, setBackColor] = useState({R: 255, G: 255, B: 255})
    const [colors, setColors] = useState(b(6))
    const [target, setTarget] = useState(Math.floor(Math.random()*3))
    const [correct, setCorrect] = useState(false)
    const [timeOut, setTimeOut] = useState(false)

    useEffect(() => {
        handleRestartClicked()
    }, [props.boxNum])

    function handleCorrect() {
        setCorrect(true);
        setBackColor(colors[target]);
    }

    function handleTimeOut() {
        setBackColor(colors[target]);
        setTimeOut(true)
    }

    function handleRestartClicked() {
        setColors(b(6));
        setTarget(Math.floor(Math.random()*props.boxNum));
        setCorrect(false);
        setBackColor({R: 255, G: 255, B: 255});
        setTimeOut(false)
    }
    const width = useRef(window.innerWidth);
    const height = useRef(window.innerHeight);

    return (
        <div>
            <div className='background' style={{width: `${width.current}px`, height: `${height.current}px`, 
                backgroundColor: `rgb(${backColor.R}, ${backColor.G}, ${backColor.B})`}} />
            <h1 className='RGB'>{`RGB ( ${colors[target].R}, ${colors[target].G}, ${colors[target].B} )`}</h1>
            <Timer correct={correct} handleTimeOut={handleTimeOut} handleRestartClicked={handleRestartClicked} boxNum={props.boxNum} />
            <ChoosingBoxes colors={colors} target={target} handleCorrect={handleCorrect} correct={correct} timeOut={timeOut} boxNum={props.boxNum} />
        </div>
    )

}

export default Game;
