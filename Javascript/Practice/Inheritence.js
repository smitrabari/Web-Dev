// Parent Class
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  price() {
    return `${this.make} ${this.model} is having price of 20k`;
  }
}
// Child Class
class Car extends Vehicle {
  mycarprice() {
    return `${this.make} ${this.model} is having price of 10k`;
  }
}
// calling the child class
let mycar = new Car("Toyota", "Corolla");
console.log(mycar.price());
