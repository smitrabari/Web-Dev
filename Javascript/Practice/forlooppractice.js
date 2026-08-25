let array = [2, 5, 7, 9];
let doublearray = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] == 7) {
    continue;
  }
  doublearray.push(array[i]);
}

// console.log(doublearray);

let coffee = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortcoffee = [];

for (const mytea of coffee) {
  if (mytea.length > 10) {
    break;
  }
  shortcoffee.push(mytea);
}

console.log(shortcoffee);
