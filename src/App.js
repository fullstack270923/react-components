import logo from './logo.svg';
import React, { useState } from "react";
import { UseState } from './hooks/use_state_effect';
import { UseRef } from './hooks/use_ref';
import { UseRef2 } from './hooks/use_ref2';
import { UseEffectDemo } from './hooks/use_effect';
import {useLocalStorage} from './hooks/use_localstorage';

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
  const [name, setName] = useLocalStorage('name', '')

  function changeCount(amount) {
    // this.setState({ 
    //   counter: counter + amount
    // })
    setCounter(prevCount => prevCount + amount)
  }

  return (
    <div className="App">
      <header className="App-header">
        <UseEffectDemo />
        <div>
        <hr />
          <h4>Customer hook - useLocalStorage</h4>
          <input type="text" value={name} 
                onChange={e => setName(e.target.value)} />
        </div>
        <UseState start="100"/>
        <UseRef start="200"/>
        <UseRef2 start="200"/>
      </header>
    </div>
  );
}

export default App;
