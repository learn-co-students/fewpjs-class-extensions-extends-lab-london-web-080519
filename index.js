// Your code here

class Polygon {
    constructor(sides) {
        this._sides = sides
    }

    get countSides() {
        return this._sides.length
    }

    get perimeter() {
        return this._sides.reduce((a,b) => a+b)
    }
     
}

class Triangle extends Polygon {

    get isValid() {
        if (this._sides[0] + this._sides[1] > this._sides[2] &&
            this._sides[1] + this._sides[2] > this._sides[0] &&
            this._sides[2] + this._sides[0] > this._sides[1]) 
        { 
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    
    get isValid() {
        return this._sides.every( (el, index, arr) => el === arr[0] )    
    }

    get area() {
        return this._sides[0] * this._sides[0]
    }
}


