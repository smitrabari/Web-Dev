let genericCar = {
  tyers: 4,
};
let tesla = {
  driver: "Elon Musk",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(Object.getPrototypeOf(tesla));
