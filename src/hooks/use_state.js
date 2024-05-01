
import React, { useState, useRef, useEffect } from "react";

const UseState = (props) => {

  // state = {
  //   counter: parseInt(props.start),
  //   update: true
  // }

  // hook - state
  // DI 
  const [counter, setCounter] = useState(parseInt(props.start))
  const [counter2, setCounter2] = useState(0)
  const [update, setUpdate] = useState(true)
  const renderCounter = useRef(0)
  const prevCounter = useRef(0)
  const undoBtnRef = useRef(0)
//   let counter1 = 0
//   counter1++
//   console.log(counter1); // will always be 1

  //renderCounter.current += 1

//// ------ use effect will run ONCE like componentDidMount 
// useEffect(() => {
//   renderCounter.current += 1
//   console.log('use effect pattern 1 -- componentDidMount');
// }, [])

//// ------ use effect will run after EACH Render
// useEffect(() => {
//   renderCounter.current += 1
//   console.log('use effect pattern 2 -- each render');
// })

//// ------ use effect will run after EACH change of counter2
    useEffect(() => {
    renderCounter.current += 1
    console.log('use effect pattern 3 -- each change');
    }, [counter2])

  function changeCount(amount) {
    // this.setState({ 
    //   counter: counter + amount
    // })
    setCounter(prevCount => {
        prevCounter.current = prevCount
        return prevCount + amount 
    }
    )
    undoBtnRef.current.innerHTML = "undo"
  }

  return (
    <div>
        <hr />
        <h1>useState: </h1>
        <p>Counter: {counter} Counter2: {counter2}</p>
        <button onClick={() => setCounter2(prev => prev + 1)}> counter2++ </button>
        <button onClick={() => changeCount(1)}> + </button>
        <button onClick={() => changeCount(-1)}> - </button>
        <button onClick={() => {
            prevCounter.current = counter
            setCounter(Math.floor(Math.random() * 100));
            undoBtnRef.current.innerHTML = "undo"
        }
        }> Random </button>
        <button ref={undoBtnRef} onClick={() => {
            const memo = counter
            setCounter(prevCounter.current)
            prevCounter.current = memo
            undoBtnRef.current.innerHTML = undoBtnRef.current.innerHTML == "undo" ? 
                                           undoBtnRef.current.innerHTML = "redo" : "undo"
        }}> undo </button>
        <p>Render Counter: {renderCounter.current}</p>
        <p>Previous Counter: {prevCounter ? prevCounter.current : ''}</p>
        
        <hr />
    </div>
  );
}

export { UseState };
