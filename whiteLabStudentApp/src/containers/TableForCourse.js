import React, { Component } from 'react';

export default class TableForCourse extends Component {
  renderCourse({ id, year, course, instructor, students }) { 
    return (
      <tr key={id}>
        <td>{year}</td>
        <td>{course}</td>
        <td>{instructor}</td>
        <td>{students}</td>
      </tr>
    );
  }

  render() {
    const { courses, course } = this.props
    let filteredCourses = course ? courses.filter(item => {
      return item.course === course
    }) : courses

    return (
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Course</th>
            <th>Instructor</th>
            <th>Students</th>
          </tr>
        </thead>
        <tbody>{filteredCourses.map(this.renderCourse)}</tbody>
      </table>
    );
  }
}
