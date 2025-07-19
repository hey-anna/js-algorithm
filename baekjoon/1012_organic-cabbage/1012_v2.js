// 댜른 버전

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = +input[0]; // 테스트케이스 개수
let line = 1; // 현재 읽고 있는 줄 번호

// 방향 벡터 (상, 하, 좌, 우)
const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const dfs = (x, y, map, visited, M, N) => {
  visited[y][x] = true;

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (
      nx >= 0 &&
      nx < M &&
      ny >= 0 &&
      ny < N &&
      map[ny][nx] === 1 &&
      !visited[ny][nx]
    ) {
      dfs(nx, ny, map, visited, M, N);
    }
  }
};

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[line++].split(" ").map(Number); // 가로 M, 세로 N, 배추 수 K

  // 지도 만들기 (기본값 0)
  const map = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  // 배추 위치에 1 표시
  for (let i = 0; i < K; i++) {
    const [x, y] = input[line++].split(" ").map(Number);
    map[y][x] = 1;
  }

  let count = 0;

  // 모든 좌표를 돌면서, 배추이면서 아직 방문하지 않은 곳이라면 DFS
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (map[y][x] === 1 && !visited[y][x]) {
        dfs(x, y, map, visited, M, N);
        count++; // 새로운 덩어리 발견 시 카운트 증가
      }
    }
  }

  console.log(count);
}
