var input = require("fs").readFileSync("../example.txt").toString().split("\n");

var a = input[0].split("");
var b = input[1].split("");

var one = Number(input[0]) * Number(b[2]);
var two = Number(input[0]) * Number(b[1]);
var three = Number(input[0]) * Number(b[0]);

console.log(one);
console.log(two);
console.log(three);
console.log(three * 100 + two * 10 + one);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = input[0].split("");
let b = input[1].split("");

let one = Number(input[0]) * Number(b[2]);
let two = Number(input[0]) * Number(b[1]);
let three = Number(input[0]) * Number(b[0]);

console.log(one);
console.log(two);
console.log(three);
console.log(three * 100 + two * 10 + one);

// input ex)
// 472
// 385
