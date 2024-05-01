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

        const { id, brand, model, color, year, update, delete_car } = this.props
        console.log('==' + id);
        //console.log(this.props);
        //const color = this.props.color
        //const { id, color, brand, model, year, update, delete_car } = this.props
        return !update?
                (<div key={id} style = {{ color }}>
                <p>Brand: <span title="click to edit" onClick={() => this.props.startUpdate(id)}>{brand}</span></p>
                <p>Model: {model}</p>
                <p>Color: {color}</p>
                <p>Year: {year}</p>
                <p>Price: [targil]</p>
                <button style={{ color: 'red' }} onClick={() => { delete_car(id) }}>X</button>
                <button style={{color: 'blue'}} onClick={ () => this.props.startUpdate(id) }>U</button>
                <hr />
            </div>) :
            (<div key={id} style = {{ color }}>
                <p ><span title="click to exit update" onClick={() => this.props.finishUpdate(id)}>Brand: </span><input type="text" 
                        placeholder={brand} /></p>
                <p>Model: <input type="text" placeholder={model} /></p>
                <p>Color:  &nbsp;
                <select name="color" id="color_id" value={color}>
                      <option value="green" style={{color: "green"}}>Green</option>
                      <option value="red" style={{color: "red"}}>Red</option>
                      <option value="orange" style={{color: "orange"}}>Orange</option>
                      <option value="pink" style={{color: "pink"}}>Pink</option>
                      <option value="black" style={{color: "black"}}>Black</option>
                      <option value="blue" style={{color: "blue"}}>Blue</option>
                    </select>
                    </p>
                <p>Year: <input type="text" placeholder={year} /></p>
                <p>Price: [targil]</p>
                <button style={{ color: 'red' }} onClick={() => { delete_car(id) }}>X</button>
                <button style={{color: 'green'}} onClick={ () => this.props.finishUpdate(id) }>V</button>
                <hr />
            </div>)

    }


}

export default Car;