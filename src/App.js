import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';

class App extends Component {

  state = {
    inputText: '',
    inputLength: 0,
  }

  changeHangler = (event) => {
    this.setState({
      inputText: event.target.value,
      inputLength: event.target.value.length,
    })
  }

  deleteCharHandler = (charIndex) => {
    const chars = this.state.inputText.split('');
    chars.splice(charIndex, 1);
    this.setState({
      inputText: chars.join(''),
    })
  }

  render() {
    return (
      <div className="App">

      <input type="text" onChange={this.changeHangler} />

      <ValidationComponent length={this.state.inputLength}/>

      </div>
    );
  }
}

export default App;
