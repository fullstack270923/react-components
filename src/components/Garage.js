import React, { Component } from 'react';
import Car from './Car'

class Garage extends Component {
    
    render() {

        console.log(this.props);
        // this.props.cars: 
        //   [
        //     { brand: "Honda", model: "Civic", color: "green", year: 2020, hybrid: true, id: 1 },
        //     { brand: "Ferrari", model: "Testa Rossa", color: "red", year: 2023, id: 2 },
        //     { brand: "Chevrolet", model: "Cicalvaliervic", color: "orange", year: 2024, id: 3 }
        //   ]
        
        const cars_list = this.props.cars.filter(car => car.year >= this.props.filter_by_year)
            .map(car => 
            <Car brand={car.brand} model={car.model} id={car.id}
                 color={car.color} year={car.year} key={car.id} 
                 update={car.update}
                 startUpdate = {this.props.startUpdate}
                 finishUpdate = {this.props.finishUpdate}
                 delete_car={this.props.delete_car} />)

        // map loop output:
        //         [
        //           <Car brand="Honda" model="Civic" color="green" year="2020" />
        //           <Car brand="Ferrari" model="Testa Rossa" color="pink" year="2024" />
        //           <Car brand="Chevrolet" model="Cicalvaliervic" color="orange" year="2024" />
        //         ]

        return (
            <>
                {cars_list}
            </>
        )
    }
}

export default Garage;