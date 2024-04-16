let range = {
  from: 1,
  to: 5,
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

//  forEach
var arr = [44, 98, 2, 33];
var sum = 0;
var result = arr.forEach(calculateForEach);

function calculateForEach(item) {
  sum += item;
}
console.log(sum);

// map
var arr = [1, 2, 3, 4, 5];
var result = arr.map(calculateMapResult);

function calculateMapResult(item) {
  return item * 2;
}
console.log("map result = " + result);

// filter
var arr = [1, 2, 3, 4, 5];
var result = arr.filter(calculateFilterResult);

function calculateFilterResult(item) {
  return item >= 3;
}
console.log("filter result = " + result);

// reduce
var arr = [1, 2, 3, 4, 5];
var result = arr.reduce(calculateReduceResult, 0);

function calculateReduceResult(sum, item) {
  return (sum = sum + item);
}
console.log("reduce result = " + result);

// findIndex
var arr = [1, 2, 3, 4, 5];
var result = arr.findIndex(calculateFindIndexResult);

function calculateFindIndexResult(item) {
  return item > 3;
}
console.log("findIndex result = " + result);

// var --> global scope
for (var i = 0; i < 5; i++) {
  console.log("");
}
console.log(i); // prints 6

// let --> block scope
for (let j = 0; j < 5; j++) {
  console.log("");
}
// console.log(j); // error not defined
