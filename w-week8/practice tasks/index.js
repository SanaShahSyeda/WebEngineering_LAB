// template-literal
const numberOfFriends = 0;
`${numberOfFriends}` > 0
  ? console.log(`Number of Friends = ${numberOfFriends}`)
  : console.log("You have no Friends");

// arrow function
const add = (a, b) => a + b;
console.log(add(2, 3));

var obj1 = {
  name: "John",
  gender: "male",
  code: 345,
  age: 24,
};

var obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2.name = "john smith";

// changes data in both objects
console.log(obj1);
console.log(obj2);

// spread operator ------>>

var obj2 = { ...obj1 };
console.log(obj1);
console.log(obj2);

obj2.name = "johnny smith";

// changes data in only respective object
console.log(obj1);
console.log(obj2);

// destructuring
const { name, gender, ...baqaya } = obj1;
console.log(name + ` ` + gender + ` ` + baqaya.age + baqaya.code);

//setTimeout()
console.log("Starting setTimeout example...");
setTimeout(() => {
  console.log("This message will be displayed after 2 seconds.");
}, 2000); // 2000 milliseconds = 2 seconds
console.log("setTimeout example scheduled.");

// promise

function getData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      // Simulating successful completion
      // resolve(data);
      // Simulating failure
      reject({ message: "Error" });
      // reject(new Error("Failed to fetch data"));
    }, 2000); // Simulating a delay of 2 seconds
  });
}
// Consuming the Promise
const dataaa = getData()
  .then((data) => {
    console.log("Data received:", data);
    return data;
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

console.log(dataaa);
