let array = [2, 5, 7, 9];
let doublearray = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] == 7) {
    continue;
  }
  doublearray.push(array[i]);
}

console.log(doublearray);
