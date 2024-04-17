import React from 'react';
import './App.css';

class App extends React.Component {

  // data
  // useState
  state = {
    time: new Date(),
    username: 'Danny',
    email: 'incognito@johndoe.com',
    age: 30
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    // this.setState({ username: e.target.value })
    // this.setState({ age: e.target.value })
  }

  // useEffect
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000)
  }


  // redner
  render() {
    //let x 
    //this.x // error
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello {this.state.username}</h1>
          <h1>AGE = {this.state.age}</h1>
          <h1>TIME = {this.state.time.getHours() + ':' + this.state.time.getMinutes() + ':' +
            (this.state.time.getSeconds() > 9 ? this.state.time.getSeconds() : ('0' + this.state.time.getSeconds()))}</h1>
          <button onClick={() => this.setState({ age: this.state.age + 1 })}>ADD AGE</button>
          <button onClick={() => this.setState({ age: this.state.age - 1 })}>SUB AGE</button>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          <input type="number" name="age" value={this.state.age} onChange={this.handleChange} />
          <input type="number" name="age"  />
        </header>
      </div>
    );
  }
}

export default App;
