// 정답 제출

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

sticks = input.slice(1).map(Number).reverse();

let count = 1;
let maxHeight = sticks[0];

for (let i = 1; i < sticks.length; i++) {
  if (sticks[i] > maxHeight) {
    count++;
    maxHeight = sticks[i];
  }
}

console.log(count);
