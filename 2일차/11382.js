// var input = require("fs").readFileSync("../example.txt").toString().split(" ");
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// var c = parseInt(input[2]);

// console.log(a+b+c);

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

console.log(a+b+c);

// input ex) 77 77 7777