// map-return
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const A = input[1].split(" ").map(Number); // A: 탐색 대상 배열
const B = input[3].split(" ").map(Number); // B: 찾고 싶은 숫자들

A.sort((a, b) => a - b); // 이진 탐색을 위한 정렬

let answer = [];

B.forEach((v) => {
  let start = 0;
  let end = A.length - 1;
  let found = false;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (v < A[mid]) {
      end = mid - 1;
    } else if (v > A[mid]) {
      start = mid + 1;
    } else {
      found = true;
      break;
    }
  }

  answer.push(found ? 1 : 0);
});

console.log(answer.join("\n"));
