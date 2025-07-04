// v3 - Set을 활용한 간단 풀이
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [a, b, c, d] = input.map((v) => v.split(" "));

const set = new Set(b);
let result = "";

d.forEach((e) => {
  result += set.has(e) ? "1" : "0";
  result += "\n";
});

console.log(result);
