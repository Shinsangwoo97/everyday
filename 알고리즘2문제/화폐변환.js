// 10000000 을 입력시 => 10,000,000 으로 자동 변환 되는 코드
// ex) 10000000000.12315456
let input = require('fs').readFileSync('../example.txt').toString();

console.log('input', input);

var money = Number(input).toLocaleString(); // 내장 함수 사용(소수점 사용시 짤림(반올림))
console.log('money', money);
// money 10,000,000,000.123

let ss = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //정규식
console.log('ss', ss);
// ss 10,000,000,000.12,315,456

console.log(input.toLocaleString(undefined, { maximumFractionDigits: 5 }));
// 10000000000.12315456
