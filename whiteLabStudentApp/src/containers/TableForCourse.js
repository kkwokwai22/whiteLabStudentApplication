import React, { Component } from 'react';

export default class TableForCourse extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        { id: 0, year: 2015, course: 'English 1C: Applied Composition', instructor: 'Lacey Leblanc', students: 5 },
        { id: 1, year: 2015, course: 'English 1B: Argument & Analysis', instructor: 'Mcclain Page', students: 5 }
      ]
    };
  }

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
        <tbody>{this.state.list.map(this.renderCourse)}</tbody>
      </table>
    );
  }
}
