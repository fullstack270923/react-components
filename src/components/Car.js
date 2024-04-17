import React, { Component } from 'react';

class Car extends Component {

    state =  {

    }

    render() {
        console.log(this.props);
        
        // const brand = this.props.brand
        //const { brand } = this.props

        const { brand, model, color, year } = this.props

        //console.log(this.props);
        //const color = this.props.color
        //const { id, color, brand, model, year, update, delete_car } = this.props
        return (<div style = {{ color }}>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Color: {color}</p>
                <p>Year: {year}</p>
                <hr />
            </div>)

    }
}

export default Car;