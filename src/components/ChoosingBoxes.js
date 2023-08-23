import React, { useState, useEffect } from 'react';
import Box from './Box';
import "./ChoosingBoxes.css"

function ChoosingBoxes(props) {
    const colors1 = [];
    const colors2 = [];
    for (let i = 0; i < 3; ++i) {
        colors1.push(props.colors[i])
        colors2.push(props.colors[i + 3])
    }

    return (
        <div>
            <div className='boxes-line-one'>
                {colors1.map((color) => {return <Box color={color} handleClick={handleClick} correct={props.correct} timeOut={props.timeOut} />})}
            </div>
            <div className={props.boxNum == 3 ? 'boxes-line-one-hidden' : 'boxes-line-one'}>
                {colors2.map((color) => {return <Box color={color} handleClick={handleClick} correct={props.correct} timeOut={props.timeOut} />})}
            </div>
        </div>
    )

    function handleClick(color) {
        if (color == props.colors[props.target]) {
            props.handleCorrect()
        }
        else {
            console.log(2);
        }
    }
}

export default ChoosingBoxes;