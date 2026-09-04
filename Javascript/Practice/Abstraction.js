class CoffeeMachine {
  start() {
    return `Starting the machine...`;
  }

  BrewCoffee() {
    return `Brewing coffee`;
  }

  PressStartButton() {
    return `${this.start()} ${this.BrewCoffee()}`;
  }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.PressStartButton());
