// 정답
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const listen = new Set(input.slice(1, 1 + n));
const see = input.slice(1 + n);
const result = see.filter((name) => listen.has(name)).sort();

// 결과 출력
console.log(result.length); // 교집합에 해당하는 사람 수
result.forEach((name) => console.log(name)); // 이름을 한 줄씩 출력
