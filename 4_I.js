// Interface segregation principle

class Animal {
  constructor(name) {
    this.name = name
  }

}

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`)
  }
}

const walker = {
  walk() {
    console.log(`${this.name} can walk`)
  }
}

const flier = {
  fly() {
    console.log(`${this.name} can fly`)
  }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)


const dog = new Dog('Patron');
dog.walk();
dog.swim();

const eagle = new Eagle('Eagle');
eagle.walk();
eagle.fly();

const whale = new Whale('Whale');
whale.swim();
