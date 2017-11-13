import React, { Component } from 'react';

export default class TableForCourse extends Component {
  renderCourse(classDetail) {
    const year = classDetail.year;
    const course = classDetail.course;
    const instructor = classDetail.instructor;
    const students = classDetail.students;
    return (
      <tr>
        <td>{year}</td>
        <td>{course}</td>
        <td>{instructor}</td>
        <td>{students}</td>
      </tr>
    );
  }

  render() {
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
        <tbody>{this.props.courses.map(this.renderCourse)}</tbody>
      </table>
    );
  }
}
