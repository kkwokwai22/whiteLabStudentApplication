import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllData, setYear, clearYear, set1A, set1B, set1C } from '../actions/action_getAllData';

class DisplayPieChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { courses } = this.props;
    console.log('hi', courses);
    let appliedComposition = courses.filter(val => {
      if (val.course.indexOf('Applied') > 1) return val.course;
    });
    let argumentAnalyisis = courses.filter(val => {
      if (val.course.indexOf('Argument') > 1) return val.course;
    });
    let freshmanComposition = courses.filter(val => {
      if (val.course.indexOf('Freshman') > 1) return val.course;
    });
    let appliedLen = appliedComposition.length;
    let argumentLen = argumentAnalyisis.length;
    let freshmanLen = freshmanComposition.length;
    return (
      <div>
        <button>English 1C: Applied Composition people in class: {appliedLen}</button>
        <button>English 1B: Argument & Analyisis people in class: {argumentLen}</button>
        <button>English 1A: freshman Composition people in class: {freshmanLen}</button>
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

// not only
const mapDispatchToProps = dispatch => ({
  getAllStudentDataAction: () => dispatch(getAllData()),
  setYear: () => dispatch(setYear()),
  set1A: course => dispatch(set1A(course)),
  set1B: course => dispatch(set1B(course)),
  set1C: course => dispatch(set1C(course))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPieChart);
