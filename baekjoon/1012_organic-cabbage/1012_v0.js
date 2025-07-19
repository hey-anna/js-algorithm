// 최종 답안 풀이

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = +input[0]; // 테스트 케이스 수
let idx = 1; // 시작: input[1]

// 방향 벡터: 상하좌우
// 순서대로: 상, 하, 좌, 우
const dx = [0, 0, -1, 1]; // x는 가로 방향
const dy = [-1, 1, 0, 0]; // y는 세로 방향

for (let t = 0; t < T; t++) {
  // input[1]
  const [M, N, K] = input[idx++].split(" ").map(Number); // 가로, 세로, 배추 개수
  // M N K 읽고 → idx = 2

  // 배추 지도 만들기: 0으로 초기화된 2차원 배열
  const map = Array.from({ length: N }, () => Array(M).fill(0));

  // 배추 위치 입력 받아서 지도에 표시
  // K개의 좌표 읽기 → input[2] ~ input[2+K-1] 까지
  for (let i = 0; i < K; i++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    map[y][x] = 1; // 그 좌표에 배추 심기(= 값 1로 표시)
  }

  // DFS 함수 정의
  const dfs = (x, y) => {
    // 재귀호출
    map[y][x] = 0; // 방문했으므로 0으로 처리(방문한 곳은 0으로 바꿔서 다시 안 보게 함)

    // 상하좌우 네 방향 확인
    for (let d = 0; d < 4; d++) {
      // const [이동할_x, 이동할_y] = 현재_위치 + 방향;
      const nx = x + dx[d]; // x 좌표를 좌우로 이동
      const ny = y + dy[d]; // y 좌표를 상하로 이동

      // 범위 내이고, 배추가 있으면 재귀 호출
      if (
        nx >= 0 && // 왼쪽 벗어남 방지
        nx < M && // 오른쪽 벗어남 방지
        ny >= 0 && // 위쪽 벗어남 방지
        ny < N && // 아래쪽 벗어남 방지
        map[ny][nx] === 1 // 방문할 위치에 배추가 있는가?
      ) {
        dfs(nx, ny);
      }
    }
  };

  let count = 0;

  // 전체 map 순회하며 배추 덩어리 찾기
  // 세로, 가로
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (map[y][x] === 1) {
        dfs(x, y); // 해당 지점에서 DFS 시작(🔥 배추 덩어리 탐색)
        count++; // 새로운 덩어리니까 지렁이 수 증가(✅ 지렁이 1마리 필요 → 카운트 증가!)
      }
    }
  }

  console.log(count); // 결과 출력
}
