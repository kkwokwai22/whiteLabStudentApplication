import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get2015Data } from '../actions/action_getAllData';

class RadioButtons extends Component {
	constructor(props) {
		super(props);
	}

	hello() {
		alert('hello');
	}

	render() {
		const { get2015StudentDataAction } = this.props;
		return (
			<div>
				<h3>Years:</h3>
				<div>
					<input
						type="radio"
						id="contactChoice1"
						name="contact"
						value="email"
						onClick={this.hello.bind(this)}
					/>
					<label for="contactChoice1">All</label>
				</div>
				<div>
					<input
						type="radio"
						id="contactChoice2"
						name="contact"
						value="phone"
						onClick={get2015StudentDataAction}
					/>
					<label for="contactChoice2">2015</label>
				</div>
				<div>
					<input
						type="radio"
						id="contactChoice3"
						name="contact"
						value="mail"
						onClick={this.hello.bind(this)}
					/>
					<label for="contactChoice3">2016</label>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		get2015StudentDataAction: () => dispatch(get2015Data())
	};
};

const mapStateToProps = state => {
	return {
		all2015DataFromReducer: state.allCourseData
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RadioButtons);
