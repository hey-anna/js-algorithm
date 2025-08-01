const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

let i = N - 1;
while (i > 0 && arr[i - 1] >= arr[i]) {
  i--;
}

if (i === 0) {
  console.log(-1);
  return;
}

let j = N - 1;
while (arr[i - 1] >= arr[j]) {
  j--;
}

[arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

const left = arr.slice(0, i);
const right = arr.slice(i).sort((a, b) => a - b);
const result = left.concat(right);

console.log(result.join(" "));
