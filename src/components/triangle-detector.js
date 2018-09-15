import React, {Component} from 'react';

class TriangleDetektor extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<h1>Determine type of triangle</h1>
				<form data-ts="Form">
					<fieldset>
						<label>
							<span>side A</span>
							<input type="number" placeholder="enter length of side A"/>
						</label>
						<label>
							<span>side B</span>
							<input type="number" placeholder="enter length of side B"/>
						</label>
						<label>
							<span>side C</span>
							<input type="number" placeholder="enter length of side C"/>
						</label>
					</fieldset>
					<button data-ts="Button" className="ts-primary">
						<span>submit</span>
					</button>
				</form>
			</React.Fragment>
		);
	};

};

export default TriangleDetektor;