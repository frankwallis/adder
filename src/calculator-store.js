/*
	A very simple flux-like store to model the calculator.
	All operations are synchronous, so update notifications are not needed.
*/
export class CalculatorStore {
	constructor() {
		this.clear();
	}
	
	input(digit) {
		// TODO - validate digit
		this.operand = (this.operand * 10) + digit;
	}

	add() {
		this.total = this.total + this.operand;
		this.operand = 0.0;
	}
		
	clear() {
		this.total = 0.0;
		this.operand = 0.0;
	}
}