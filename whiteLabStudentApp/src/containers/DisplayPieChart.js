import React, { Component } from 'react';

class DisplayPieChart extends Component {
  render() {
    const { courses, setCourse } = this.props;
    let hashTable = { keys: [] }
    courses.forEach(item => {
      if(hashTable[item.course]) {
        hashTable[item.course].push(item)
      } else {
        hashTable[item.course] = []
        hashTable.keys.push(item.course)
      }
    })
    console.log(hashTable[hashTable.keys[0]])
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

export default DisplayPieChart
