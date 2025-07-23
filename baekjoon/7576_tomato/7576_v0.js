// 최종 답안 풀이

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(Number);

// 실제 토마토 상태가 담긴 2차원 배열을 만든다
const box = input.slice(1).map((line) => line.split(" ").map(Number));

// 방향벡터 (상하좌우)
const dx = [0, 0, -1, 1]; // x축 이동 (좌우)
const dy = [-1, 1, 0, 0]; // y축 이동 (상하)

// 초기 익은 토마토의 위치를 미리 큐에 담는다
// 익은 토마토(1)의 좌표를 모두 queue에 넣고,
// 동시에 퍼지도록 하기 위한 초기 BFS 세팅
const queue = [];
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (box[y][x] === 1) queue.push([x, y]);
  }
}

//  BFS 탐색 (전파)
let index = 0;
while (index < queue.length) {
  // 먼저 queue[index] 꺼내고, index를 +1
  const [x, y] = queue[index++];

  // 상하좌우 네 방향 확인
  for (let i = 0; i < 4; i++) {
    // const [이동할_x, 이동할_y] = 현재_위치 + 방향;
    const nx = x + dx[i]; // x 좌표를 좌우로 이동
    const ny = y + dy[i]; // y 좌표를 상하로 이동

    // 범위 체크
    if (
      nx < 0 || // 왼쪽 벽 밖으로 나감 (x좌표가 음수)
      ny < 0 || // 위쪽 벽 밖으로 나감 (y좌표가 음수)
      nx >= M || // 오른쪽 벽 밖으로 나감 (x가 가로 칸 수 M 이상)
      ny >= N // 아래쪽 벽 밖으로 나감 (y가 세로 칸 수 N 이상)
    )
      continue; // 스킵

    // 익지 않은 토마토만 감염시킴
    if (box[ny][nx] === 0) {
      box[ny][nx] = box[y][x] + 1; // ← 상하좌우에 날짜 +1 기록 (날짜 누적 : 전파 시작 후 지난 일수 기록)
      queue.push([nx, ny]); // 다음 BFS 대상으로 큐에 넣기
    }
    // 상하좌우로 이동
    // 익지 않은 토마토(0)라면:
    // - 현재칸의값 + 1로 바꾸고
    // - queue에 추가해서 다음 날에 익힐 준비
  }
}

// 결과 계산
let maxDay = 0; // 가장 마지막에 익은 토마토의 날짜를 저장할 변수

// 2차원 배열(box) 전체를 돌면서
// 모든 토마토 상태를 확인함
for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    // box[y][x] === 0이면 아직도 안 익은 토마토가 있다는 뜻
    if (box[y][x] === 0) {
      // 그럼 아예 익힐 수 없으므로 -1 출력하고 함수 종료
      console.log(-1); // 익지 못한 토마토 존재
      return; // 종료
    }

    // 이 칸의 값이 더 크다면 → 더 늦게 익은 토마토란 뜻
    // 가장 오래 걸린 날짜를 maxDay에 저장
    maxDay = Math.max(maxDay, box[y][x]); // 더 큰 값으로 maxDay를 갱신
  }
}

// 시작할 때 익은 토마토가 1부터 시작했기 때문에
// 실제 소요 일수는 maxDay - 1
console.log(maxDay - 1);

// box =
// [2, 3, 4]
// [3, 2, 1]
// [2, 3, 4]

// → 가장 큰 값은 4
// → maxDay = 4

// ---

// Day 1 → 값 = 1
// Day 2 → 값 = 2
// ...
// Day 5 → 값 = 5

// → 5 - 1 = 4일 걸림

// | 코드                | 의미                         |
// | ----------------- | -------------------------- |
// | `box[y][x] === 0` | 익지 못한 토마토 발견 → 실패 (`-1`)   |
// | `Math.max()`      | 전체 중 가장 늦게 익은 날짜 계산        |
// | `maxDay - 1`      | 실제 걸린 날짜 (1부터 시작했기 때문에 -1) |
