class Bird {
  fly() {
    return `flying...`;
  }
}
class penguin extends Bird {
  fly() {
    return `penguins can't fly`;
  }
}

let bird = new Bird();
console.log(bird.fly());
let newbird = new penguin();
console.log(newbird.fly());
