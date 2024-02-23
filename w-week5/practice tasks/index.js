var ar1 = ["a", "b", "a", "d"];
console.log(ar1);
ar1.push("e");
console.log(ar1);
ar1.pop("e");
console.log(ar1);
// shift() ----> removes first element and returns it
console.log(ar1.shift());
console.log(ar1);
console.log(ar1.unshift("a"));
console.log(ar1);

var ar2 = ["e", "f", "g"];

console.log(ar1.concat(ar2));
// array.slice(start, end)
// slice returns a piece of the array but it doesn’t affect the original array.
console.log("slice(0,1) value " + ar1.slice(0, 1));
console.log("After slice(0,1)  -->" + ar1);

// array.splice(start, deleteCount, newElem1, newElem2, ..., newElemN);
// newElem1 to newElemN denote the values that would be added after the start.
// splice changes the original array by removing, replacing, or adding values and returns the affected values.
console.log("splice(0,1) value " + ar1.splice(0, 1));
console.log("After splice(0,1)  -->" + ar1);

console.log(ar1.indexOf("a"));

console.log(ar1.lastIndexOf("a"));

console.log(ar1.includes("c"));

// Objects

var student1 = {
  name: "john",
  "cms-id": "9302",
};

console.log(Object.keys(student1));
console.log(Object.values(student1));
console.log(Object.entries(student1));

var student2 = {
  name: "jane",
  "cms-id": "9303",
};

console.log(Object.assign(student2, student1));
// After assigning student1 to student2
console.log(student1);

// Object.getOwnPropertyNames() returns both enumerable and non-enumerable properties,
// Object.keys() only returns enumerable ones.

console.log(Object.getOwnPropertyNames(student1));

// Task

var arr = [1, 5, 3, 2, 3, 5, 6, 4, 2];
var arr_obj = {};

for (key in arr) {
  const element = arr[key];
  if (arr_obj[element]) {
    arr_obj[element]++;
  } else {
    arr_obj[element] = 1;
  }
}

console.log(arr_obj);

var fruits = ["orange", "apple", "banana"];
var arr_obj2 = {};

for (key in fruits) {
  const element = fruits[key];
  if (arr_obj2[element]) {
    arr_obj2[element]++;
  } else {
    arr_obj2[element] = 1;
  }
}

console.log(arr_obj2);

var students = [
  { id: 1, name: "john" },
  { id: 2, name: "simmy" },
  { id: 1, name: "johnnny" },
  { id: 2, name: "sammy" },
];

var result = {};

for (key in students) {
  const temp = students[key];
  //console.log(temp.id);
  if (temp.id) {
    result[temp.id]++;
  } else {
    result[temp.id] = 1;
  }
}

console.log(result);

// map, forEach, array.filter

console.log(student1);
// freeze makes an object completely immutable
Object.freeze(student1);
student1["name"] = "hello";
console.log(student1); // no change

// Object. seal allows existing properties to be modified,
// but prevents the addition and deletion of new properties.
Object.seal(student1);
student1["name"] = "hello";
console.log(student1);

// Functions
// 1: Named Functions
/**
 * Represents greet.
 * @constructor
 * @param {string} name - The Name of the user.
 */
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Sana"));

// 2: Arrow Functions
// - shorter syntax
// - no binding of this, and super
// - this keyword always represents the object that defined the arrow function.
const greeting = (name) => {
  return "Hello, " + name + "!";
};
console.log(greeting("Sana"));

// - arrow function with only 1 statement
hello = () => "Hello World !!";
console.log(hello());

// 3: Anonymous Functions
// - used as arguments to other functions or assigned to variables
const greeting2 = function (name) {
  return "Hello, " + name + "!";
};
console.log(greeting2("SANA"));

// 4: Immediately Invoked Functions
// - wrapped in parentheses to denote that it's a function expression
// - () to invoke function
// - used to create a new scope and avoid polluting the global namespace
(function () {
  console.log("I am an Immediately invoked function.");
})();

// 5: Higher Order Functions
// - Functions that can take other functions as arguments or return functions.
// - map, filter and reduce

// 5(a): map
// Example: Doubling each number in the array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // Output: [ 2, 4, 6, 8, 10]

// 5(b): filter
// Example: Filtering out even numbers from the array
numbers = [1, 2, 3, 4, 5];
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5]

// 5(c): reduce
// Example: Summing up all numbers in the array
numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)
