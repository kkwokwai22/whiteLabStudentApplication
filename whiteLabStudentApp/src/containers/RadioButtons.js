import React, { Component } from 'react';

class RadioButtons extends Component {
	render() {
		const { setYear, allCourses } = this.props;
		let years = {}
		allCourses.forEach(item => {
			years[item.year] = null
		})
		let yearsRadioButtons = []
		for (let key in years) {
			yearsRadioButtons.push(
				<div key={key}>
					<input type="radio" id={key} name="contact" value="mail" onClick={() => setYear(key)} />
					<label>{key}</label>
				</div>
			)
		}

		return (
			<div>
				<h3>Years:</h3>
				<div>
					<input type="radio" id="contactChoice1" name="contact" value="email" onClick={() => setYear(0)} />
					<label>All</label>
				</div>
				{yearsRadioButtons}
			</div>
		);
	}
}

export default RadioButtons