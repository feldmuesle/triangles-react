import React, {Component} from 'react';
import Input from './input';

class TriangleDetektor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideA: '',
			sideB: '',
			sideC: '',
			missingValues: false
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
		event.preventDefault();
		if (this.state.missingValues) this.setState({missingValues: false});
		const isValid = this.validateForm();

		if (isValid) this.displayTriangleType();
	}

	validateForm() {
		const sideA = this.state.sideA;
		const sideB = this.state.sideB;
		const sideC = this.state.sideC;
		const isEmpty = (!sideA.length || !sideB.length || !sideC.length);
		const isValid = !isEmpty && this.isNumber(sideA) && this.isNumber(sideB) && this.isNumber(sideB);

		if (isEmpty) this.setState({missingValues: true});

		return isValid;
	}

	validateInput(value) {
		let error = null;

		if (!value.length && this.state.missingValues) error = 'Please provide a length for this side of the triangle';
		if (value.length && isNaN(value)) error = 'Value must be a number';

		if (error) {
			return <dl className="ts-errors"><dt>{error}</dt></dl>;
		}
	}

	displayTriangleType() {
		const sideA = this.state.sideA;
		const sideB = this.state.sideB;
		const sideC = this.state.sideC;
		let type = null;

		if (this.isEqual(sideA, sideB) && this.isEqual(sideA, sideC)) {
			type = 'equilateral';
		} else if (this.isEqual(sideA, sideB) || this.isEqual(sideA, sideC) || this.isEqual(sideB, sideC)) {
			type = 'isosceles';
		} else {
			type = 'scalene';
		}

		let msg = `A triangle with the dimensions ${sideA}, ${sideB} and ${sideC} is ${type}.`;

		// show result in TS notification.
		window.ts.ui.Notification.info(msg, {
				onaccept:() => {
					this.setState({
						sideA: '',
						sideB: '',
						sideC: ''
					});
				}
			});

		return type;
	}

	isEqual(a, b) {
		return (a === b) ? true : false;
	}

	isNumber(value) {
		return value.length > 0 && !isNaN(value);
	}

	render() {
		return (
			<React.Fragment>
				<h1>Determine type of triangle</h1>
				<form data-ts="Form"
					className="form"
					onSubmit={(event)=>{this.handleSubmit(event);}}>
					<fieldset>
					<Input
						label="side A"
						type="text"
						name="sideA"
						value={this.state.sideA}
						placeholder="enter length of side A"
						handleInput={this.handleInput}/>
					{this.validateInput(this.state.sideA)}
					<Input
						label="side B"
						type="text"
						name="sideB"
						value={this.state.sideB}
						placeholder="enter length of side B"
						handleInput={this.handleInput}/>
					{this.validateInput(this.state.sideB)}
					<Input
						label="side C"
						type="text"
						name="sideC"
						value={this.state.sideC}
						placeholder="enter length of side C"
						handleInput={this.handleInput}/>
					{this.validateInput(this.state.sideC)}
					</fieldset>
					<button data-ts="Button" className="ts-primary btn-submit" onClick={(event)=>{this.handleSubmit(event);}}>
						<span>submit</span>
					</button>
				</form>
			</React.Fragment>
		);
	};

};

export default TriangleDetektor;