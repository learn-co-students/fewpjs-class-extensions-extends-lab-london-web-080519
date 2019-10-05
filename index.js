// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    let totalSides = this.sides.length;
    return totalSides;
  }

  get perimeter() {
    let perimeter = this.sides.reduce((a, b) => a + b);
    return perimeter;
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (
      this.sides[0] + this.sides[1] > this.sides[2] &&
      this.sides[0] + this.sides[2] > this.sides[1] &&
      this.sides[1] + this.sides[2] > this.sides[0]
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {

  get isValid() {
    return this.sides.every(a => a === this.sides[0])
  }

  get area() {
    return this.sides[0] * this.sides[0]
  }
}
