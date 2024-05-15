import React, { useState, createContext } from "react";

import ColorContext from "./ColorContext";

// this is optional
// you can set the ColorContext.Provider in App.js 
// but then you need to define the useState for color in App.js

const ColorProvider = ({ children }) => {

    // 3. which fields to hold/share ?
    const [color, setColor] = useState('blue')

    // 4. template
    return (
      <ColorContext.Provider value={{ color, setColor }}>
        {children}
      </ColorContext.Provider>      
    )
  }

export default ColorProvider;