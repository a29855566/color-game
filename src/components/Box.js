import React, { useEffect, useState } from "react";
import "./Box.css"

function Box(props) {
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        setClicked(false)
    }, [props.color])

    return (
        <div className={clicked || props.correct || props.timeOut ? "box-hidden" : "box"} onClick={() => {
            props.handleClick(props.color);
            setClicked(true);
        }} style={{backgroundColor: `rgb(${props.color.R}, ${props.color.G}, ${props.color.B})`}} />
    )
}

export default Box;