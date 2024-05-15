import React, { useState, useEffect, useContext } from "react"
import ColorContext from "../context/ColorContext";

const ColorPicker = () => {

    //const [color, setColor] = useState('blue')
    const {color, setColor} = useContext(ColorContext)

    return (
        <>
            <select onChange={(e) => setColor(e.target.value)} defaultValue="blue">
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
            </select>
            &nbsp;&nbsp;<span>{color}</span>
        </>
    );
}

export {ColorPicker}