import React, { Component } from 'react';
import classes from './App.module.css';
import Char from './Char/Char';

class App extends Component {
  state = {
    // text written by user
    text: '',
    // keyboard letter's lines
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    first: [
      'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    ],
    second: [
      'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    ],
    third: [
      'z', 'x', 'c', 'v', 'b', 'n', 'm',
    ],
    casing: 'MAIUSCOLO',
    space: 'Space',
    backSpace: 'Backspace',
  }

  // Function to write the clicked character
  writeChar = (char) => {
    let text = this.state.text + char;
    this.setState({
      text: text,
    });
  }

  // Backspace handler, delete the last character
  deleteOneChar = () => {
    let text = this.state.text.split('');
    text.pop();
    text = text.join('');
    this.setState({
      text: text,
    });
  }

  // change letters casing
  caseHandler = () => {
    let first = this.state.first;
    let second = this.state.second;
    let third = this.state.third;
    const casing = this.state.casing === 'MAIUSCOLO' ? 'Minuscolo' : 'MAIUSCOLO';
    if(casing === 'Minuscolo') {
      first = first.map( ch => {
       ch = ch.toUpperCase(); 
       return ch;
      });
  
      second = second.map( ch => {
        ch = ch.toUpperCase(); 
        return ch;
      });
      
      third = third.map( ch => {
        ch = ch.toUpperCase(); 
        return ch;
      });
    } else {
      first = first.map( ch => {
        ch = ch.toLowerCase(); 
        return ch;
       });
   
       second = second.map( ch => {
         ch = ch.toLowerCase(); 
         return ch;
       });
       
       third = third.map( ch => {
         ch = ch.toLowerCase(); 
         return ch;
       });
    }

    this.setState({
      first,
      second,
      third,
      casing
    });
  }

  // render function
  render() {
    const numbers = this.state.numbers.map( (ch, i) => {
      return (
        <Char character={ch} key={i} click={() => this.writeChar(ch)} />
      );
    });

    const firstLine = this.state.first.map((ch, i) => {
      return (
      <Char character={ch} key={i} click={() => this.writeChar(ch)} />)
    });
    const secondLine = this.state.second.map((ch, i) => {
      return (
      <Char character={ch} key={i} click={() => this.writeChar(ch)} />)
    });
    const thirdLine = this.state.third.map((ch, i) => {
      return (
      <Char character={ch} key={i} click={() => this.writeChar(ch)} />)
    });

    return (
      <div className={classes.App}>
        <div className={classes.text}>{this.state.text}</div>
        <div className="keyboard-row">
          {numbers}
        </div>
        <div className="keyboard-row">
          {firstLine}
        </div>
        <div className="keyboard-row">
          {secondLine}
        </div>
        <div className="keyboard-row">
          {thirdLine}
        </div>
        <div className="keyboard-row">
          <Char character={this.state.casing} click={this.caseHandler}/>
          <Char character={this.state.space} click={() => this.writeChar(' ')}/>
          <Char character={this.state.backSpace} click={this.deleteOneChar}/>
        </div>
      </div>
    );
  }
}

export default App;
