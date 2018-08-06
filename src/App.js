import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    inputLength: 0
  }

  changeHangler = (event) => {
    this.setState({
      inputLength: event.target.value.length
    })
  }

  render() {
    return (
      <div className="App">

      <input type="text" onChange={this.changeHangler} />

      </div>
    );
  }
}

export default App;
