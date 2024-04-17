import React from 'react';
import './App.css';

class App extends React.Component {

    // data
    state = {
      name: 'Danny',
      age: 30
    }

    // redner
    render() {
      //let x 
      //this.x // error
      return (
        <div className="App">
          <header className="App-header">
            <h1>Hello {this.state.name}</h1>
            <h1>AGE = {this.state.age}</h1>

          </header>
        </div>
      );
    }
}

export default App;
