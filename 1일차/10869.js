var input = require("fs").readFileSync("../example.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);

// input ex)7 3
