import React, { Component } from 'react';

class CarFilter extends Component {

    state = {
        filter_by_year: 0
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.set_filter({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>filter cars by year (bigger equal than)</h2>
                <p>Filter: <input type="number" 
                                  name="filter_by_year" onChange={this.handleChange}
                                  value={this.state.filter_by_year} placeholder="year" /></p>
                <p>Filter by Price: [targil]</p>
            </div>
        );
    }

}

export default CarFilter;