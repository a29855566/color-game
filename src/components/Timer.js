import React, { useEffect, useState } from 'react';
import './Timer.css'

function Timer(props) {
    const [leftTime, setLeftTime] = useState(5);

    useEffect(() => {
        setLeftTime(5)
    }, [props.boxNum])

    useEffect(() => {
        if (leftTime > 0 && !props.correct) {
            let id = setInterval(() => {setLeftTime(leftTime - 1)}, 1000);

            return function () {
                clearInterval(id);
            };
        }
        else {
            props.handleTimeOut()
        }
    }, [leftTime]);
    
    return (
        <>
            <h1 className='leftTime'>{props.correct ? 'Correct' : (leftTime ? leftTime : 'Timeout!')}</h1>
            <div className='restart' onClick={() => {
                props.handleRestartClicked();
                setLeftTime(5);
            }} ><p>Restart</p></div>
        </>
    )
}

export default Timer;