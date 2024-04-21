import React, { Component } from 'react';

class NewCarDetials extends Component {

    state = {
        car_from_input: {
            brand: "",
            model: "",
            year: "",
            color: "green"
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('adding car: ' + this.state.car_from_input);
        this.props.add_car(this.state.car_from_input)
    }

    handleChange = (e) => {
        //console.log(e.target.name);
        this.setState({
            car_from_input: {
                ...this.state.car_from_input,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div>
                <h2>add new car</h2>
                <form onSubmit={this.handleSubmit} style= {{ background: this.state.car_from_input.color2}}>
                    <p>Brand: <input type="text" name="brand" onChange={this.handleChange}
                        value={this.state.car_from_input.brand} placeholder="car brand" required /></p>
                    <p>Model: <input type="text" name="model" onChange={this.handleChange}
                        value={this.state.car_from_input.model} placeholder="car model" required /></p>
                       
                    <p style={{ color: this.state.car_from_input.color }}>Color:  &nbsp;
                        <select name="color" id="color_id" onChange={this.handleChange} style={{ color: this.state.car_from_input.color }}
                            value={this.state.car_from_input.color}>
                            <option value="green" style={{ color: "green" }}>Green</option>
                            <option value="red" style={{ color: "red" }}>Red</option>
                            <option value="orange" style={{ color: "orange" }}>Orange</option>
                            <option value="pink" style={{ color: "pink" }}>Pink</option>
                            <option value="black" style={{ color: "black" }}>Black</option>
                            <option value="blue" style={{ color: "blue" }}>Blue</option>
                        </select>
                    </p>
                    <p>Year: <input type="number" name="year" onChange={this.handleChange}
                        value={this.state.car_from_input.year} placeholder="year" required /></p>
                    <button type="submit">Buy New Car</button>
                    <p>just for fun -- background color: <input type="color" name="color2" placeholder="enter color" onChange={this.handleChange} /> </p>                    
                </form>
            </div>)
    }

}

export default NewCarDetials;