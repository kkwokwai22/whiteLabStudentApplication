import React, { Component } from 'react';
import PieChart from 'react-svg-piechart';

class DisplayPieChart extends Component {
  onClickHandler(course){
    this.props.setCourse(course)
  }

  render() {
    const { courses } = this.props;
    const pieChartColors = ['#dd4b39', '#3b5998', '#00aced']
    let sortedCourses = { keys: [] }
    let legend = []
    let pieChartData = []
    
    courses.forEach(item => {
      if(sortedCourses[item.course]) {
        sortedCourses[item.course].push(item)
      } else {
        sortedCourses[item.course] = []
        sortedCourses.keys.push(item.course)
      }
    })
    
    sortedCourses.keys.forEach((key, index)  => {
      legend.push(<button key={key} onClick={this.onClickHandler.bind(this, key)}>{key} peope in class: {sortedCourses[key].length}</button>)
        pieChartData.push({ label: key, value: sortedCourses[key].length, color: pieChartColors[index]})
    })

    return (
      <div>
        <PieChart data={pieChartData} sectorStrokeWidth={2} expandOnHover shrinkOnTouchEnd />
        {legend}
      </div>
    );
  }
}

export default DisplayPieChart
