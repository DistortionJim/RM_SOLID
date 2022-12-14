// Open close principle
class Shape {
  area() {
    throw new Error('Area method should be implemented')
  }
}

class Square extends Shape {
  constructor(size) {
    super()
    this.size = size
  }

  area() {
    return this.size ** 2
  }
}

class Circe extends Shape {
  constructor(radius) {
    super()
    this.radius = radius
  }
  area() {
    return (this.radius ** 2) * Math.PI
  }
}

class Rect extends Shape{
  constructor(width, height) {
    super()
    this.width = width
    this.height = height
  }
  area() {
    return this.width * this.height
  }
}

class Triangle extends Shape {
  constructor(a, b) {
    super();
    this.a = a
    this.b = b
  }
  area() {
    return (this.a * this.b) / 2
  }
}

class AreaCalc {
  constructor(shapes = []) {
    this.shapes = shapes
  }
  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area()
      return acc;
    }, 0)
  }
}

const calc = new AreaCalc(
  [
    new Square(10),
    new Circe(1),
    new Circe(4),
    new Rect(4, 5)
    new Triangle(4, 5)
  ]
)

console.log(calc.sum());