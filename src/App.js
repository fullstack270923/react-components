import logo from './logo.svg';
import React, { useState } from "react";
import { UseState } from './hooks/use_state';
import { UseRef } from './hooks/use_ref';
import { UseRef2 } from './hooks/use_ref2';
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
    //   counter: counter + amount
    // })
    setCounter(prevCount => prevCount + amount)
  }

  return (
    <div className="App">
      <header className="App-header">
        <UseState start="100"/>
        <UseRef start="200"/>
        <UseRef2 start="200"/>
      </header>
    </div>
  );
}

export default App;
