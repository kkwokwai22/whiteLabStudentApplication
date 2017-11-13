import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import RadioButtons from '../containers/RadioButtons';
import TableForCourse from '../containers/TableForCourse';
import DisplayPieChart from '../containers/DisplayPieChart';
import { getAllData, setYear } from '../actions/action_getAllData';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getAllStudentDataAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div>
          <RadioButtons />
        </div>
        <div class="wrapper">
          <div class="flex-container">
            <div className="pieChart">
              <DisplayPieChart courses={this.props.courses} />
            </div>
            <div className="tableChart">
              <TableForCourse courses={this.props.courses} />
            </div>
          </div>
        </div>
        <div className="App-intro" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data, year, course } = state.allCourseData;
  return {
    courses: year
      ? data.filter(item => {
          return item.year === year;
        })
      : data
  };
};

const mapDispatchToProps = dispatch => ({
  getAllStudentDataAction: () => dispatch(getAllData()),
  setYear: () => dispatch(setYear())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
