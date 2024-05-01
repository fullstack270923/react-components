
import React, { useRef } from "react";

const UseRef = (props) => {

  // state = {
  //   counter: parseInt(props.start),
  //   update: true
  // }

  // hook - state
  // DI 
  const refCounter = useRef(parseInt(props.start))

  function changeCount(amount) {
    // this.setState({ 
    //   counter: counter + amount
    // })
    //setCounter(prevCount => prevCount + amount)
    refCounter.current = refCounter.current + amount
    console.log(refCounter.current);
  }

  return (
    <div>
        <hr />
        <h1>useRef: </h1>
        <p>Counter: {refCounter.current}</p>
        <button onClick={() => changeCount(1)}> + </button>
        <button onClick={() => changeCount(-1)}> - </button>
        <button onClick={() => refCounter.current = Math.floor(Math.random() * 100)}> Random </button>
        <hr />
    </div>
  );
}

export { UseRef };
