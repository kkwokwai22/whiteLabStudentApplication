import React, { Component } from 'react';
import { connect } from 'react-redux';
import PieChart from 'react-svg-piechart';

class DisplayPieChart extends Component {
  constructor() {
    super();

    this.state = {
      expandedSector: null
    };

    this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this);
  }

  handleMouseEnterOnSector(sector) {
    this.setState({ expandedSector: sector });
  }

  render() {
    const { differentDataFromReducer } = this.props;
    console.log('the data i need', differentDataFromReducer);
    const data = [
      { label: 'Facebook', value: 100, color: '#3b5998' },
      { label: 'Twitter', value: 60, color: '#00aced' },
      { label: 'Google Plus', value: 30, color: '#dd4b39' }
    ];

    const { expandedSector } = this.state;

    return (
      <div>
        <PieChart
          data={data}
          expandedSector={expandedSector}
          onSectorHover={this.handleMouseEnterOnSector}
          sectorStrokeWidth={2}
          expandOnHover
          shrinkOnTouchEnd
        />
        <div>
          {data.map((element, i) => (
            <div key={i}>
              <span style={{ background: element.color }} />
              <span style={{ fontWeight: this.state.expandedSector === i ? 'bold' : null }}>
                {element.label} : {element.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     getAllStudentDataAction: () => dispatch(getAllData()),
//     get2015StudentDataAction: () => dispatch(get2015Data()),
//     get2016StudentDataAction: () => dispatch(get2016Data())
//   };
// };

const mapStateToProps = state => {
  return {
    differentDataFromReducer: state.allCourseData
  };
};

export default connect(mapStateToProps, null)(DisplayPieChart);
