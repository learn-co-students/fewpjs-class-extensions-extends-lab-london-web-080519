// Your code here
class Polygon {
	constructor(sidesArray) {
		this.sidesArray = sidesArray;
	}

	get countSides() {
		return this.sidesArray.length;
	}

	get perimeter() {
		return this.sidesArray.reduce((acc, curr) => acc + curr);
	}
}

class Triangle extends Polygon {
	get isValid() {
		return !!(
			this.sidesArray[0] + this.sidesArray[1] > this.sidesArray[2] &&
			this.sidesArray[1] + this.sidesArray[2] > this.sidesArray[0] &&
			this.sidesArray[0] + this.sidesArray[2] > this.sidesArray[1]
		);
	}
}

class Square extends Polygon {
	get isValid() {
		return !!(
			this.sidesArray[0] == this.sidesArray[1] &&
			this.sidesArray[1] == this.sidesArray[2] &&
			this.sidesArray[2] == this.sidesArray[3]
		);
	}

	get area() {
		return this.sidesArray[0] * this.sidesArray[1];
	}
}
