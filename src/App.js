import React, { Component } from 'react'
import './App.css';
import Garage from './components/Garage'
import CarFilter from './components/CarFilter'
import NewCarDetials from './components/NewCarDetails';

class App extends Component {

  static my_cars_seq_next = 4

  state = {
    cars: [
      { brand: "Honda", model: "Civic", color: "green", year: 2020, id: 1 },
      { brand: "Ferrari", model: "Testa Rossa", color: "red", year: 2023, id: 2 },
      { brand: "Chevrolet", model: "Cicalvaliervic", color: "orange", year: 2024, id: 3 }
    ],
    filter_by_year: 0
  }
  
  addCar = (_car) => {
    // ok 
    // _car.id = App.my_cars_seq_next++
    // const new_cars = [ _car, ...this.state.cars] 
    // cooler
    const new_cars = [ { ..._car, id: App.my_cars_seq_next++ }, ...this.state.cars]     
    //{ brand: "Honda", model: "Civic", color: "green", year: 2020, hybrid: true, id:App.my_cars_seq_next++ }

    this.setState({
      // cars: this.state.cars // mistake
      cars: new_cars
    })
  }
  deleteCar = (_id) => {
    console.log(_id);
    //const filtered_cars = this.state.filter(car => car.id == _id ? false : true)
    const filtered_cars = this.state.cars.filter(car => car.id !== _id)
    this.setState({
      cars: filtered_cars
    })
  }

  setFilter = (filter_by_year) => {
    this.setState({
      filter_by_year
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    //Only update if count has changed
    // if (this.state.count !== nextState.count) {
    //      return true;
    // }
    // return false;

    return true;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Garage</h1>
          <NewCarDetials add_car={this.addCar} />          
          <hr />          
          <CarFilter set_filter={this.setFilter}/>
          <hr />
          <Garage cars={this.state.cars} delete_car={this.deleteCar} 
            filter_by_year={this.state.filter_by_year} />
        </header>
      </div>
    );
  }
}

export default App;
