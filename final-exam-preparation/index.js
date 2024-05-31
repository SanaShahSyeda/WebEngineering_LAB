let date = new Date();

// Default locale (depends on environment)
console.log(date.toLocaleString()); // "5/15/2024, 2:30:00 PM" in en-US

// Specific locale
console.log(date.toLocaleString("de-DE")); // "15.5.2024, 14:30:00" in German

let obj = {};

// Define multiple properties with different attributes
Object.defineProperties(obj, {
  b: {
    value: 2,
    enumerable: true,
  },
  c: {
    value: 3,
    enumerable: false,
  },
});

for (let key in obj) {
  console.log(key); // "b"
}

console.log(Object.keys(obj)); // ["b"]
console.log(Object.getOwnPropertyNames(obj)); // ["b", "c"]

let arr = [1, 2, 3, 4, 5];
result = arr.map((ar) => {
  return divide(ar * 2);
});

function divide(value) {
  console.log(value);
  return value / 2;
}

console.log(result);

const obj2 = {
  prop1: 10,
  prop2: "hello",
};

Object.seal(obj2);
// Changing property values is allowed
obj2.prop1 = 20;
obj2.prop2 = "world";

console.log(obj2); // Output: { prop1: 20, prop2: 'world' }

let mypromise = new Promise(function (resolve, reject) {
  let success = true;
  if (success) {
    resolve("successfull");
  } else {
    reject("Error");
  }
});

mypromise
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });

arr1 = [1, 2, 3, 4, 5];
arr2 = [...arr1, 6, 8];

// Object destructuring
const person = {
  age: 30,
  city: "New York",
};
const { age, city } = person;
console.log(age); // Output: 30
console.log(city);

// Array destructuring
numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(third);

//Custom Map
var numbers = [1, 2, 3, 4];
function customMap(numbers, customizedFunction) {
  var demo = [];
  for (let i = 0; i < numbers.length; i++) {
    let element = customizedFunction(numbers[i]);
    demo.push(element);
  }
  return demo;
}
var doubled = customMap(numbers, function (num) {
  return num * 2;
});
console.log(doubled);

// promise
function demoFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside setTimeOut()");
      resolve("success");
    }, 3000);
  });
}

demoFunction()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//reduce
numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

// async await
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}
async function fetchDataWithTimeout() {
  console.log("Fetching data...");
  try {
    const data = await fetchData();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchDataWithTimeout();
