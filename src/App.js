import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {

  // state = {
  //   counter: 0,
  //   update: true
  // }

  // hook - state
  // DI 
  const [counter, setCounter] = useState(0)
  const [update, setUpdate] = useState(true)

  function changeCount(amount) {
    // this.setState({ 
    //   count: count + amount
    // })
    setCounter(prevCount => prevCount + amount)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => changeCount(1)}> + </button>
        <button onClick={() => changeCount(-1)}> - </button>
        <button onClick={() => setCounter(Math.floor(Math.random() * 100))}> Random </button>
      </header>
    </div>
  );
}

export default App;
