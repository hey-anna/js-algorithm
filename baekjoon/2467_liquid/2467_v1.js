const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// 이미 정렬되어 있다고 했지만, 혹시 모르니 정렬 한 번 더 확인
// arr.sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let minSum = Infinity;
let answer = [];

while (left < right) {
  const sum = arr[left] + arr[right];

  if (Math.abs(sum) < Math.abs(minSum)) {
    minSum = sum;
    answer = [arr[left], arr[right]];
  }

  if (sum > 0) right--;
  else left++;
}

console.log(answer[0], answer[1]);
