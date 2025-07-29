const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [k, n] = input[0].split(" ").map(Number);
const lan = input.slice(1).map(Number);

// 이분 탐색
let left = 1;
let right = Math.max(...lan);
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const count = lan.reduce((acc, len) => acc + Math.floor(len / mid), 0);

  // mid 길이로 잘랐을 때 몇 개 만들 수 있니?
  if (count >= n) {
    answer = mid;
    left = mid + 1; // 길이 늘려보기 // 더 길게 잘라볼까?
  } else {
    right = mid - 1; // 너무 길다 → 줄여야 함 // 너무 길어 → 줄이자
  }
}

console.log(answer);
