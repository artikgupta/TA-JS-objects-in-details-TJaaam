// # More about class

// - Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

// - Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`

// - Create a method inside the class named `calcArea` that will return the area of the square.

// - Create a `area` getter method using which we can get the area of the square.

// - Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`. If the passed value is not the area of the square alert say `Not a valid input`

// - Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.

// - Create another property named `numberOfTimes` that will hold the value of number of times the area property is accessed from the object. The values will initialize to `0`. The area property can't be accessed more than 4 times. If it crosses 4 times alert message `Upper Limit Reached`

// - Create two instance of the `Square` class

// - Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.

// - Check the `isEqual` method and pass the two instance you created above.

// ## User Class

// - Create a `User` class that accepts `firstName` and `lastName` property

// - Create a getter method named `fullName` that will return the full name of the person.

// - Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

// - Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

// - Create two instance of the `User` class

// - Check by using the `fullName` setter method with name bigger than 5 characters.

// - Check by using the `fullName` setter method with name less than 5 characters.

// - Check the `fullName` using getter

// - Check the `nameContains` method

class Square {
  constructor(side) {
    this.width = side;
    this.height = side;
    this.numberOfTimes = 0;
  }
  description() {
    alert(`The square is ${width} x ${height}`);
  }

  calcArea() {
    return this.side * this.side;
  }

  get area() {
    if (this.numberOfTimes < 4) {
      this.numberOfTimes += 1;
      return this.calcArea();
    }
  }

  set area(val) {
    this.width = Math.sqrt(val);
    this.height = Math.sqrt(val);
  }

  static isEqual(obj1, obj2) {
    return obj1.width * obj1.height === obj2.width * obj2.height;
  }
}

let square1 = new Square(4);
let square2 = new Square(16);

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + this.lastName;
  }
  set fullName(fullName) {
    if (fullName.length <= 5) {
      return "Full name should be more than 5 characters";
    } else {
      this.firstName = fullName.split(" ")[0];
      this.lastName = fullName.split(" ")[1];
    }
  }
  nameContains(str) {
    return `${this.firstName} ${this.lastName}`.includes(str);
  }
}

let user1 = new User("Arya", "Stark");
let user2 = new User("Bran", "Stark");

user1.fullName("aaaaaaaaaaaaaaaaaaaaaa");

user1.nameContains("Aryaaaaaaaa");
user1.nameContains("Arf");
