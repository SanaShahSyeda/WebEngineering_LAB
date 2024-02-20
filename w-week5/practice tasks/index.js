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

// array.splice(start, deleteCount, newElem1, newElem2, ..., newElemN;
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
