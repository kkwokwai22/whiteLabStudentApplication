import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const urlStudentData = 'https://quiet-lake-28784.herokuapp.com/';
    axios
      .get(urlStudentData)
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data[0].course
        });
      })
      .catch(error => {
        console.log('error ', error);
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h1>{this.state.data}</h1>
        </div>
      </div>
    );
  }
}

export default App;
