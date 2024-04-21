import React, { Component } from 'react';

class CarFilter extends Component {

    state = {
        year_filter: 0
    }

    handleChange = (e) => {
        this.setState({
            year_filter: e.target.value
        })
        this.props.set_filter(e.target.value)
    }

    render() {
        return (
            <div>
                <h2>filter cars by year (bigger equal than)</h2>
                <p>Filter: <input type="number" 
                                  name="year" onChange={this.handleChange}
                                  value={this.state.year_filter} placeholder="year" /></p>
                <p>Filter by Price: [targil]</p>
            </div>
        );
    }

}

export default CarFilter;