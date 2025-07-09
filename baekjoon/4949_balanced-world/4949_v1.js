// 최종 제출

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

const result = input.map((line) => {
  const stack = [];

  for (let char of line) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.pop() !== "(") return "no";
    } else if (char === "]") {
      if (stack.pop() !== "[") return "no";
    }
  }

  return stack.length === 0 ? "yes" : "no";
});

console.log(result.join("\n"));
