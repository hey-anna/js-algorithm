// 최종 제출

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
const M = Number(input[2]);
const queries = input.slice(3).map((line) => line.split(" ").map(Number));

const prefixSum = [0];
for (let i = 0; i < N; i++) {
  prefixSum[i + 1] = prefixSum[i] + numbers[i];
}

let result = "";
for (let [i, j] of queries) {
  result += prefixSum[j] - prefixSum[i - 1] + "\n";
}

console.log(result.trim());
