function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching user data...");
    let data = await fetchData();
    console.log("User Data : ", data);
    console.log("Fetched user data successfully!");
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

getUserData();
