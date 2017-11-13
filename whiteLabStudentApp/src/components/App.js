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
        <div class="wrapper">
          <div class="flex-container">
            <div className="pieChart">
              <DisplayPieChart />
            </div>
            <div className="tableChart">
              <TableForCourse />
            </div>
          </div>
        </div>
        <div className="App-intro" />
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
