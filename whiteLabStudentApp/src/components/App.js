import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import RadioButtons from '../containers/RadioButtons';
import DisplayPieChart from '../containers/DisplayPieChart';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      dataOf2015: null,
      dataOf2016: null
    };
  }

  componentDidMount() {
    const urlStudentData = 'https://quiet-lake-28784.herokuapp.com/';
    axios
      .get(urlStudentData)
      .then(response => {
        console.log(response.data);
        const allData = response.data;
        this.setState({
          data: allData
        });
      })
      .catch(error => {
        console.log('error ', error);
      });
  }

  getYear() {
    let year2015 = [];
    let year2016 = [];
    let data = this.state.data;
    data.forEach(val => {
      if (val.year === 2015) {
        year2015.push(val);
      } else if (val.year === 2016) year2016.push(val);
    });
    this.setState({
      dataOf2015: year2015
    });
    this.setState({
      dataOf2016: year2016
    });
  }

  render() {
    console.log(this.state.dataOf2016);
    console.log(this.state.dataOf2015);
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div>
          <RadioButtons />
        </div>
        <div className="pieChart">
          <DisplayPieChart />
          <div />
          <div className="App-intro">
            <h1>hello world</h1>
            <button onClick={this.getYear.bind(this)}>getyear</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
