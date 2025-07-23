// 최종 답안 - 리팩토링 전

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const parts = input.split("-");

const sumParts = parts.map((part) => {
  return part
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0);
});

// 코드 변경 S
let result = sumParts[0];
for (let i = 1; i < sumParts.length; i++) {
  result -= sumParts[i];
}
// 코드 변경 E

console.log(result);
