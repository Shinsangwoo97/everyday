var input = require("fs").readFileSync("../example.txt").toString().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().split("");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a + b);

// input ex)1 2
