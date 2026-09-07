function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        return resolve("Data fetched Successfully");
      } else {
        return reject("Error in fetching data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
