// ex) 245030 (hhmmss) 700 추가 시 000210 이 나오도록

const date = new Date(2023, 6, 20, 23, 50, 30);

console.log('date', date);

date.setSeconds(date.getSeconds() + 700);

console.log('date', date);

const baseDate = new Date(2023, 6, 20, 23, 50, 30); // 주의: 월은 0부터 시작하므로, 7월은 6으로 표현합니다.
console.log('기존 시간: ' + baseDate);

baseDate.setSeconds(baseDate.getSeconds() + 700);
console.log('700초 후: ' + baseDate);

baseDate.setMinutes(baseDate.getMinutes() + 10);
console.log('10분 후: ' + baseDate);

baseDate.setHours(baseDate.getHours() + 1);
console.log('1시간후: ' + baseDate);
// ---------------------------------------- //
console.log('----------------------');

function addSecondsToTime(time, secondsToAdd) {
  // 주어진 시간 문자열을 각각 시간, 분, 초로 분리하여 숫자로 변환
  let hh = parseInt(time.substr(0, 2));
  let mm = parseInt(time.substr(2, 2));
  let ss = parseInt(time.substr(4, 2));

  // 전체 시간을 초 단위로 계산
  let totalSeconds = hh * 3600 + mm * 60 + ss + secondsToAdd;

  // 총 초를 다시 시간, 분, 초로 변환
  hh = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600; // 남은 초 계산
  mm = Math.floor(totalSeconds / 60);
  ss = totalSeconds % 60;

  // 다음 날로 넘어갔을 경우를 처리하기 위해, 시간이 24를 초과하면 24를 뺀다.
  if (hh >= 24) hh -= 24;

  // 숫자를 두 자리 문자열로 변환. 예) '1' -> '01'
  hh = hh.toString().padStart(2, '0');
  mm = mm.toString().padStart(2, '0');
  ss = ss.toString().padStart(2, '0');

  // 결과를 'hhmmss' 형식의 문자열로 반환
  return hh + mm + ss;
}

let baseTime = '235030'; // 시작 시간
console.log('기존 시간: ' + baseTime);

// 주어진 시간에 700초를 더한 후, 'hhmmss' 형식의 문자열로 변환
let newTime = addSecondsToTime(baseTime, 700);
console.log('700초 후: ' + newTime);

// ---------------------------- //
console.log('----------------------');

function addMinutesToTime(time, minutesToAdd) {
  let secondsToAdd = minutesToAdd * 60; // 분을 초로 변환
  return addSecondsToTime(time, secondsToAdd);
}

let baseTimes = '235030'; // 시작 시간
console.log('기존 시간: ' + baseTimes);

// 주어진 시간에 10분을 더한 후, 'hhmmss' 형식의 문자열로 변환
let newTimes = addMinutesToTime(baseTimes, 10);
console.log('10분 후: ' + newTimes);

function addHoursToTime(time, hoursToAdd) {
  let secondsToAdd = hoursToAdd * 3600; // 시간을 초로 변환
  return addSecondsToTime(time, secondsToAdd);
}

let baseTimeH = '235030'; // 시작 시간
console.log('기존 시간: ' + baseTimeH);

// 주어진 시간에 3시간을 더한 후, 'hhmmss' 형식의 문자열로 변환
let newTimeH = addHoursToTime(baseTimeH, 3);
console.log('3시간 후: ' + newTimeH);
