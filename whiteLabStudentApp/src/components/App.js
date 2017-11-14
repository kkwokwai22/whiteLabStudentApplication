import React, { Component } from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import RadioButtons from '../containers/RadioButtons';
import TableForCourse from '../containers/TableForCourse';
import DisplayPieChart from '../containers/DisplayPieChart';
import { getAllData, setYear, setCourse } from '../actions/action_getAllData';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getAllStudentDataAction();
  }

  render() {
    const { setYear, courses, setCourse, course } = this.props
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
              <DisplayPieChart courses={courses} setCourse={setCourse}/>
            </div>
            <div className="tableChart">
              {course && <span>{course}</span>}
              <TableForCourse courses={courses} course={course}  />
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
    courses: year ? data.filter(item => {
          return item.year === year;
        }) : data,
    course,
  };
};

const mapDispatchToProps = dispatch => ({
  getAllStudentDataAction: () => dispatch(getAllData()),
  setCourse: course => dispatch(setCourse(course))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
