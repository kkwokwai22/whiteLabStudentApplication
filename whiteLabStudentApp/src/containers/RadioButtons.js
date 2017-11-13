import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllData, setYear, clearYear } from '../actions/action_getAllData';

class RadioButtons extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { setYear, clearYear, state, getAllStudentDataAction } = this.props;
		return (
			<div>
				<h3>Years:</h3>
				<div>
					<input type="radio" id="contactChoice1" name="contact" value="email" onClick={() => clearYear()} />
					<label for="contactChoice1">All</label>
				</div>
				<div>
					<input
						type="radio"
						id="contactChoice2"
						name="contact"
						value="phone"
						onClick={() => setYear(2015)}
					/>
					<label for="contactChoice2">2015</label>
				</div>
				<div>
					<input type="radio" id="contactChoice3" name="contact" value="mail" onClick={() => setYear(2016)} />
					<label for="contactChoice3">2016</label>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAllStudentDataAction: () => dispatch(getAllData()),
		setYear: year => dispatch(setYear(year)),
		clearYear: _ => dispatch(clearYear())
	};
};

const mapStateToProps = state => {
	return {
		allDataFromReducer: state.allCourseData
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtons);
