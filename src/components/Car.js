import React, { Component } from 'react';

class Car extends Component {

    state =  {

    }

    constructor(props) {
        console.log('============= ctor Car');
        super(props)
    }

    componentDidMount() {
        // clean timer
        console.log('========== finished mounting car component');
    }

    componentWillUnmount  () {
        // clean timer
        console.log('========== removing car component ' + this.props.brand);
    }    

    render() {

        console.log(this.props);
        
        // const brand = this.props.brand
        //const { brand } = this.props

        const { id, brand, model, color, year, delete_car } = this.props
        console.log('==' + id);
        //console.log(this.props);
        //const color = this.props.color
        //const { id, color, brand, model, year, update, delete_car } = this.props
        return (<div key={id} style = {{ color }}>
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Color: {color}</p>
                <p>Year: {year}</p>
                <button style={{ color: 'red' }} onClick={() => { delete_car(id) }}>X</button>
                <hr />
            </div>)

    }


}

export default Car;