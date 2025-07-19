// 최종 답안

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const X = input[1].split(" ").map(Number);

const sortedUnique = [...new Set(X)].sort((a, b) => a - b);

const coordinateMap = new Map();
sortedUnique.forEach((value, index) => {
  coordinateMap.set(value, index);
});

const result = X.map((x) => coordinateMap.get(x));

console.log(result.join(" "));
