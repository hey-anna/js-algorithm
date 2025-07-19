// 최종 답안

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = +input[0];
let idx = 1;

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[idx++].split(" ").map(Number);

  const map = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    map[y][x] = 1;
  }

  const dfs = (x, y) => {
    map[y][x] = 0;

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (nx >= 0 && nx < M && ny >= 0 && ny < N && map[ny][nx] === 1) {
        dfs(nx, ny);
      }
    }
  };

  let count = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (map[y][x] === 1) {
        dfs(x, y);
        count++;
      }
    }
  }

  console.log(count);
}
