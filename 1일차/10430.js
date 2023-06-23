var input = require("fs").readFileSync("../example.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

// console.log((a + b) % c);
// console.log(((a % c) + (b % c)) % c);
// console.log((a * b) % c);
// console.log(((a % b) * (b % c)) % c);

console.log(
  `${(a + b) % c}\n${((a % c) + (b % c)) % c}\n${(a * b) % c}\n${
    ((a % b) * (b % c)) % c
  }`
);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

function solution() {
  let result = `${(a + b) % c} \n${((a % c) + (b % c)) % c} \n${
    (a * b) % c
  } \n${((a % c) * (b % c)) % c} \n`;
  console.log(result);
}
solution();

// input ex)5 8 4
