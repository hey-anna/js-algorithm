// 최종 답안 풀이

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const box = input.slice(1).map((line) => line.split(" ").map(Number));

// 방향벡터 (상하좌우)
const dx = [0, 0, -1, 1]; // x축 이동 (좌우)
const dy = [-1, 1, 0, 0]; // y축 이동 (상하)

const queue = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (box[y][x] === 1) queue.push([x, y]);
  }
}

let index = 0;
while (index < queue.length) {
  const [x, y] = queue[index++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;

    if (box[ny][nx] === 0) {
      box[ny][nx] = box[y][x] + 1;
      queue.push([nx, ny]);
    }
  }
}

let maxDay = 0;
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (box[y][x] === 0) {
      console.log(-1);
      return;
    }
    maxDay = Math.max(maxDay, box[y][x]);
  }
}

console.log(maxDay - 1);
