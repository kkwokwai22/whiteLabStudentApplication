import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import RadioButtons from '../containers/RadioButtons';
import TableForCourse from '../containers/TableForCourse';
import DisplayPieChart from '../containers/DisplayPieChart';
import { getAllData } from '../actions/action_getAllData';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { getAllStudentDataAction } = this.props;
    getAllStudentDataAction();
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
  }

  render() {
    console.log(this.props.allCourseData);
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
        </div>
        <div>
          <TableForCourse />
        </div>
        <div className="App-intro">
          <h1>hello world</h1>
          <button onClick={this.getYear.bind(this)}>getyear</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllStudentDataAction: () => dispatch(getAllData())
  };
};

const mapStateToProps = state => {
  return {
    allCourseData: state.allCourseData
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
