import React, {Component} from 'react';
import Input from './input';

class TriangleDetektor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideA: '',
			sideB: '',
			sideC: '',
			missingValues: false,
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
		if (this.state.missingValues) this.setState({missingValues: false});
		this.checkIfFormIsEmpty();
	}

	checkIfFormIsEmpty() {
		const sideA = this.state.sideA;
		const sideB = this.state.sideB;
		const sideC = this.state.sideC;

		if (!sideA.length || !sideB.length || !sideC.length) this.setState({missingValues: true})
	}

	validateIfValueIsNumber(value) {
		if (value.length && isNaN(parseInt(value, 10))) {
			return <dl className="ts-errors"><dt>Value must be a number</dt></dl>;
		}
	}

	validateIfValueIsMissing(value) {
		if (!value.length && this.state.missingValues) {
			return <dl className="ts-errors"><dt>Please provide a length for this side of the triangle</dt></dl>;
		}
	}

	render() {
		console.log('state', this.state);
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
					{this.validateIfValueIsMissing(this.state.sideA)}
					{this.validateIfValueIsNumber(this.state.sideA)}
					<Input
						label="side B"
						type="text"
						name="sideB"
						value={this.state.sideB}
						placeholder="enter length of side B"
						handleInput={this.handleInput}/>
					{this.validateIfValueIsMissing(this.state.sideB)}
					{this.validateIfValueIsNumber(this.state.sideB)}
					<Input
						label="side C"
						type="text"
						name="sideC"
						value={this.state.sideC}
						placeholder="enter length of side C"
						handleInput={this.handleInput}/>
					{this.validateIfValueIsMissing(this.state.sideC)}
					{this.validateIfValueIsNumber(this.state.sideC)}
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