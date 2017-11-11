import React, { Component } from 'react';

export default class RadioButtons extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>Years:</h3>
				<div>
					<input type="radio" id="contactChoice1" name="contact" value="email" />
					<label for="contactChoice1">All</label>
				</div>
				<div>
					<input type="radio" id="contactChoice2" name="contact" value="phone" />
					<label for="contactChoice2">2015</label>
				</div>
				<div>
					<input type="radio" id="contactChoice3" name="contact" value="mail" />
					<label for="contactChoice3">2016</label>
				</div>
			</div>
		);
	}
}
