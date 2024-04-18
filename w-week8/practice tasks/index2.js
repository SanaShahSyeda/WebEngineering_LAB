function getData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      const random_number = Math.floor(Math.random() * 10) + 1;
      random_number > 5
        ? resolve(random_number)
        : reject({ message: "Number rejected" });
      // Simulating successful completion
      // resolve(data);
      // Simulating failure
      // reject({ message: "Error" });
      // reject(new Error("Failed to fetch data"));
    }, 2000); // Simulating a delay of 2 seconds
  });
}
// Consuming the Promise
getData()
  .then((data) => {
    console.log("Data received:", data);
    return data;
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

console.log("I am after Promise");

// Local Storage

localStorage.setItem("username", "john_doe");
localStorage.setItem("isLoggedIn", true);
// Retrieving data from Local Storage
const username = localStorage.getItem("username");
const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log("Username:", username);
console.log("Is Logged In:", isLoggedIn);
// Updating data in Local Storage
localStorage.setItem("isLoggedIn", false);
// Removing data from Local Storage
localStorage.removeItem("username");
// Clearing all data from Local Storage
localStorage.clear();
