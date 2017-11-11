import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  fetchData() {
    const urlStudentData = 'https://quiet-lake-28784.herokuapp.com/';
    let request = url => {
      axios
        .get(url)
        .then(function(response) {
          console.log('data: ', response.data);
        })
        .catch(function(error) {
          console.log('error ', error);
        });
    };
    console.log(request(urlStudentData));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.fetchData.bind(this)}>fetchData</button>
        </p>
      </div>
    );
  }
}

export default App;
