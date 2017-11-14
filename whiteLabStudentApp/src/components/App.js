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
    const { setYear, courses, setCourse, course, allCourses, year } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div>
          <RadioButtons allCourses={allCourses} setYear={setYear} />
        </div>
        <div className="wrapper">
          <div className="flex-container">
            <div className="pieChart">
              <DisplayPieChart courses={courses} setCourse={setCourse}/>
            </div>
            <div className="tableChart">
              {<span>{year || `All`} </span>}
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
  const { data, year, course } = state.allCourseData
  return {
    courses: year ? data.filter(item => item.year.toString() === year ) : data,
    course,
    allCourses: data,
    year,
  };
};

const mapDispatchToProps = dispatch => ({
  getAllStudentDataAction: () => dispatch(getAllData()),
  setCourse: course => dispatch(setCourse(course)),
  setYear: year => dispatch(setYear(year)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
