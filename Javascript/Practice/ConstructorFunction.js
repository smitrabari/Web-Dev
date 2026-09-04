// class
function person(name, age) {
  this.name = name;
  this.age = age;
}

// object
let person1 = new person("Smit", 19);
// console.log(person1);

//class 2
function Car(make, model) {
  this.make = make;
  this.model = model;
  this.discription = function () {
    return `this is a ${this.make} and model is ${this.model}`;
  };
}

// object 2
let car1 = new Car("BMW", "M4");
// console.log(car1);
// console.log(car1.discription());

// class 3
function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} make a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.sound());

// Error Creator
function Drink(name) {
  if (!new.target) {
    throw new Error("You must use 'new' to create an instance of Drink");
  }
  this.name = name;
}

let chai = Drink("Chai");
