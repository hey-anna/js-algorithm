// 최종 답안

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

// 거리 행렬 초기화 (1-indexed)
const INF = Infinity;
const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));
for (let i = 1; i <= n; i++) dist[i][i] = 0;

// 중복 간선은 최소 비용만 유지

const START_INDEX = 2;
const END_INDEX = START_INDEX + m; // 예시 16

for (let i = START_INDEX; i < END_INDEX; i++) {
  const [a, b, c] = input[i].trim().split(/\s+/).map(Number);
  if (c < dist[a][b]) dist[a][b] = c;
}

// for (let i = 2; i < 2 + m; i++) {
//   const [a, b, c] = input[i].trim().split(/\s+/).map(Number);
//   if (c < dist[a][b]) dist[a][b] = c;
// }

// 플로이드-워셜: k(경유) → i(출발) → j(도착)
for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    const dik = dist[i][k];
    if (dik === INF) continue; // i→k가 불가하면 스킵
    for (let j = 1; j <= n; j++) {
      const via = dik + dist[k][j];
      if (via < dist[i][j]) dist[i][j] = via;
    }
  }
}

// 출력: 도달 불가(INF)는 0
let out = [];
for (let i = 1; i <= n; i++) {
  let row = [];
  for (let j = 1; j <= n; j++) {
    row.push(dist[i][j] === INF ? 0 : dist[i][j]);
  }
  out.push(row.join(" "));
}
console.log(out.join("\n"));
