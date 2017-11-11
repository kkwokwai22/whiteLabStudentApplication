import React, { Component } from 'react';
import PieChart from 'react-simple-pie-chart';

export default class DisplayPieChart extends Component {
  render() {
    return (
      <div>
        <PieChart
          slices={[
            {
              color: '#f00',
              value: 10
            },
            {
              color: '#0f0',
              value: 20
            },
            {
              color: 'peru',
              value: 30
            }
          ]}
        />
      </div>
    );
  }
}
