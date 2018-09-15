import React, {Component} from 'react';
import Input from './input';

class TriangleDetektor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideA: '',
			sideB: '',
			sideC: ''
		};
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(event) {
		const input = event.target;
		this.setState({
			[input.name]: input.value
		});
	}

	handleSubmit(event) {
		console.log('handle submit');
		event.preventDefault();
	}

	validateIfValueIsNumber(value) {
		return value.length && isNaN(parseInt(value, 10));
	}

	render() {
		return (
			<React.Fragment>
				<h1>Determine type of triangle</h1>
				<form data-ts="Form" onSubmit={(event)=>{this.handleSubmit(event);}}>
					<fieldset>
					<Input
						label="side A"
						type="text"
						name="sideA"
						value={this.state.sideA}
						placeholder="enter length of side A"
						handleInput={this.handleInput}/>
					{this.validateIfValueIsNumber(this.state.sideA) &&
						<dl className="ts-errors">
							<dt>Value must be a number</dt>
						</dl>}
					<Input
						label="side B"
						type="text"
						name="sideB"
						value={this.state.sideB}
						placeholder="enter length of side B"
						handleInput={this.handleInput}/>
					{this.validateIfValueIsNumber(this.state.sideB) &&
						<dl className="ts-errors">
							<dt>Value must be a number</dt>
						</dl>}
					<Input
						label="side C"
						type="text"
						name="sideC"
						value={this.state.sideC}
						placeholder="enter length of side C"
						handleInput={this.handleInput}/>
					{this.validateIfValueIsNumber(this.state.sideC) &&
						<dl className="ts-errors">
							<dt>Value must be a number</dt>
						</dl>}
					</fieldset>
					<button data-ts="Button" className="ts-primary" onClick={(event)=>{this.handleSubmit(event);}}>
						<span>submit</span>
					</button>
				</form>
			</React.Fragment>
		);
	};

};

export default TriangleDetektor;