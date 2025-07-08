// 최종 제출

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

const queue = Array(N);
for (let i = 0; i < N; i++) {
  queue[i] = i + 1;
}

let head = 0;
let tail = N;

while (tail - head > 1) {
  head++; // 1. 카드 버리기
  queue[tail++] = queue[head++]; // 2. 다음 카드 맨 뒤로 보내기
}

console.log(queue[head]);
