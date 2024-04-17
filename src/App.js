import React, { Component } from 'react'
import './App.css';
import Garage from './components/Garage'

class App extends Component {
  state = {
    cars: [
      { brand: "Honda", model: "Civic", color: "green", year: 2020, hybrid: true, id: 1 },
      { brand: "Ferrari", model: "Testa Rossa", color: "red", year: 2023, id: 2 },
      { brand: "Chevrolet", model: "Cicalvaliervic", color: "orange", year: 2024, id: 3 }
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Garage</h1>
          <Garage cars={this.state.cars} />
        </header>
      </div>
    );
  }
}

export default App;
