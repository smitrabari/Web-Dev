function person(name) {
  this.name = name;
}

person.prototype.greet = function () {
  console.log(`my name is ${this.name}!!`);
};

let person1 = new person("Smit");
console.log(person1.greet());
