//Liskov substitution principle

class Person {

}

class Memeber extends Person {
  access() {
    console.log('You have access')
  }
}

class Guest extends Person {
  isGuest = true
}

class Frontend extends Memeber {
  canCreateFront() {

  }
}
class Backend extends Memeber {
  canCreateBack() {

  }
}

class AnotherPerson extends Guest {
  access() {
    throw new Error('You have not access!')
  }
}

function openDoor(member) {
  member.access()
}

openDoor(new Frontend())
openDoor(new Backend())
// openDoor(new AnotherPerson())