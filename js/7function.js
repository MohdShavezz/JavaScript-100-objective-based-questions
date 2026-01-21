
JavaScript Functions: 
====================

1. What is a Function?
----------------------
A function is a reusable block of code designed to perform a task.

2. Why Use Functions?
---------------------
- Reusability
- Maintainability
- DRY (Don't Repeat Yourself)

3. Declaration vs Expression
----------------------------
Declaration:
greet();
function greet() {
  console.log("Hi!");
}

Expression:
const sayHi = function() {
  console.log("Hi again!");
};
sayHi();

4. Parameters vs Arguments
--------------------------
function add(a, b) { // parameters
  return a + b;
}
add(5, 3); // arguments

5. Return Statement
-------------------
function multiply(x, y) {
  return x * y;
}
let result = multiply(2, 3); // 6

6. Arrow Functions
------------------
const greet = name => `Hello, ${name}`;
greet("Ali"); // Hello, Ali

7. Callback Functions
---------------------
function process(callback) {
  callback();
}
process(() => console.log("Done!"));

8. IIFE
--------
(function () {
  console.log("This runs immediately");
})();

9. Recursion
-------------
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
factorial(5); // 120

10. Higher-Order Functions
--------------------------
function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}
const greetAli = greet("Ali");
greetAli(); // Hello Ali

11. Closures: A closure is a function that remembers the variables from its outer lexical scope,
even after the outer function has finished executing.
------------
function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
Since count is in a closure, its value is preserved between calls.


//do this sum() with Currying
function sum(a, b, c) {
  return a + b + c;
}

function sum(a) {
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}
let res1= sum(1)
let res2= res1(2)
let res3= res2(3)
console.log(res3)

console.log(sum(1)(2)(3))


//TASK
// 1. Check number is prime or not true/false
// isPrime(n) 
// 2. create calculator
// a,b : numbers,
// operator: + - * /
// calculator(a,b,operator) 
// 3. create flatten function to flat array eg:
// [1,[2,[3,4],5],6] => [1,2,3,4,5,6]
// flatten(arr)

1 Prime Checker
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

2 Calculator
function calculator(a, b, operator) {
  switch(operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Cannot divide by zero";
    default: return "Invalid operator";
  }
}

3 function flatten(arr){
  let res=[]
  for(let i of arr){
    if(Array.isArray(i)){
      res=res.concat(flatten(i))
    }else{
      res.push(i)
    }
  }
  return res;
}
let arr =[1,[2,[3,4],5],6]
console.log(flatten(arr))
// // or
console.log(arr.flat(Infinity))
