var input = require("fs").readFileSync("../example.txt").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if(a > b){
    console.log(">")
}
if(a < b){
    console.log("<")
}
if(a === b){
    console.log("==")
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);

if(a > b){
    console.log(">")
}
if(a < b){
    console.log("<")
}
if(a === b){
    console.log("==")
}

// input ex)1 2 | 10 2 | 5 5
