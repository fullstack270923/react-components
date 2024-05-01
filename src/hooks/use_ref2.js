
import React, { useRef } from "react";

const UseRef2 = (props) => {


  const inputNameRef = useRef()

  return (
    <div>
        <hr />
        <h1>useRef2: </h1>
        <p>name: <input id="name_txt" ref={inputNameRef} type="text" placeholder="your name"/></p>
        <p>name = {inputNameRef.current ? inputNameRef.current.value : ''}</p>
        <button onClick={() => { console.log(inputNameRef.current.value); }} >Console log value</button>

        <button onClick={() => { 
            //document.getElementById("name_txt").value='' 
            // instead:
            //inputNameRef.current.value = ''

            //document.getElementById("name_txt").focus()
            // instead:
            inputNameRef.current.focus()
        }} >Focus name</button>
        <hr />
    </div>
  );
}

export { UseRef2 };
