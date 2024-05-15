import React, { useState, useEffect, useContext } from "react"
import ColorContext from "../context/ColorContext";

const Display = () => {

    //const [color, setColor] = useState('blue')
    const {color, setColor} = useContext(ColorContext)

    return (
    <div style={{backgroundColor: color, color: 'white', padding: '20px'}}>
        Prime Video
    </div>)

}

export {Display}
