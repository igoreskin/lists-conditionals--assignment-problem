import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

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
    let charArr = this.state.inputText.split('');
    let chars = (
      <div>
        {charArr.map((char, index) => {
          return <CharComponent
          click={() => this.deleteCharHandler(index)}
          content={char}
          />
        })}
      </div>
      )

    return (
      <div className="App">
        <input type="text" onChange={this.changeHangler} />
        <ValidationComponent length={this.state.inputLength}/>
        {chars}
      </div>
    );
  }
}

export default App;
