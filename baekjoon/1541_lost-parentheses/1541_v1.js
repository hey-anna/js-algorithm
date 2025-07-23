// 최종 답안

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const parts = input.split("-");

const sumParts = parts.map((part) => {
  return part
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0);
});

let result = 0;
for (let i = 0; i < sumParts.length; i++) {
  if (i === 0) {
    result += sumParts[i]; // 첫 번째는 더하고
  } else {
    result -= sumParts[i]; // 나머지는 빼기
  }
}

console.log(result);
