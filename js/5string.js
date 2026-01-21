let str = "JavaScript";
console.log(str.length); // 10

let s = "hi";
s[0] = "H";
console.log(s); // "hi" ❌ No. Strings are immutable.

"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"

"  hi  ".trim();      // "hi"
"  hi".trimStart();   // "hi"
"hi  ".trimEnd();     // "hi"

"JavaScript".slice(0, 4); // "Java"
"JavaScript".slice(-4); // "ript"
"JavaScript".substring(4, 10); // "Script"

"hello world".replace("world", "JS");     // "hello JS"
"ha ha ha".replaceAll("ha", "ho");         // "ho ho ho"

"JavaScript".includes("Script"); // true

"JavaScript".startsWith("Java"); // true
"JavaScript".endsWith("ipt");    // true

"js is fun".split(" "); // ["js", "is", "fun"]

"Hello".concat(" ", "World"); // "Hello World"

"ABC".charAt(1);      // "B"
"ABC".charCodeAt(1);  // 66

"hello".indexOf("l");      // 2
"hello".lastIndexOf("l"); // 3

"ha".repeat(3); // "hahaha"

// How to check palindrome?
let s = "madam";
let isPal = s === s.split("").reverse().join("");
console.log(isPal); // true

str.includes("js");      // true/false
str.indexOf("js") !== -1 // true/false

// Count Vowels
let str = "javascript";
let count = str.match(/[aeiou]/gi).length;

// How to capitalize first letter?
let s = "hello";
s[0].toUpperCase() + s.slice(1); // "Hello"


