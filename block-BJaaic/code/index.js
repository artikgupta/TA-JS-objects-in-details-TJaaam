let amimalMethods = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    returns`I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};

let dogMethods = {
  bark: function () {
    alert(`I am ${tnis.name} and I can bark 🐶`);
  },
  changeMethods: function (newColor) {
    this.color = newColor;
    return this.color;
  },

  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};

let catMethods = {
  meow: function () {
    alert(`I am ${this.name} and I can do mewo meow 😹`);
  },
  chahangeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColorOfEyes: function (newColor) {
    this.colorOfEyes = newColor;
    return this.colorOfEyes;
  },
  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  },
};

function AnimalInfo(location, numberOfLegs) {
  let animal = Object.create(amimalMethods);
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
}

function Dog(name, color) {
  let dogs = Object.setPrototypeOf(dogMethods, amimalMethods);
  dogs.name = name;
  dogs.color = color;
}

function Cat(name, colorOfEyes) {
  let cats = Object.create(catMethods, amimalMethods);
  cats.name = name;
  cats.colorOfEyes = colorOfEyes;
}
