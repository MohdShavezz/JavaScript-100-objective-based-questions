// 1 let & const
// 2 Arrow Functions
const add = (a, b) => a + b;
// 3 Default Parameters
function greet(name = "Guest") {
  return name;
}
// 4 Destructuring (Array & Object)
let [a, b] = [1, 2];
let { name, age } = { name: "Ali", age: 25 };
// 5 Spread Operator (...)
let arr = [1, 2];
let newArr = [...arr, 3];
// 6 Rest Parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
// 7 Classes
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}
// 8 Promises
const promise = new Promise((res, rej) => {
  res("Done");
});
promise.then(console.log);
// 9 for...of Loop
for (let val of [1, 2, 3]) {
  console.log(val);
}
// 10 Map & Set
let map = new Map();
map.set("a", 1);
let set = new Set([1, 1, 2]);
// 11 template literals
// 12 Square → Even → Sum
const nums = [1, 2, 3, 4];
const result = nums
  .map(n => n * n)
  .filter(n => n % 2 === 0)
  .reduce((a, b) => a + b, 0);
console.log(result); // 20
// 14 Count Occurrences (reduce)
const words = ["a", "b", "a", "c"];
const count = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(count); // { a: 2, b: 1, c: 1 }
