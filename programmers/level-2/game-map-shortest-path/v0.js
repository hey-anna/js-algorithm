// 최종 답안 풀이

function solution(maps) {
  const n = maps.length; // 전체 줄 수 = 세로 길이 (행 개수)
  const m = maps[0].length; // 한 줄 안에 칸 수 = 가로 길이 (열 개수)

  // maps[y][x]	y행 x열의 값 (맵 좌표)

  // 예외 처리
  // 시작점이나 도착점이 벽이면 → 무조건 실패 처리
  if (maps[0][0] === 0 || maps[n - 1][m - 1] === 0) return -1;

  const visited = Array.from({ length: n }, () => Array(m).fill(0)); // 방문 여부 + 최단거리 기록용
  const directions = [
    // 상하좌우 방향 정의
    [0, 1], // 오른쪽
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [-1, 0], // 위
  ];

  const queue = [[0, 0]]; // BFS 시작점 (0,0)
  let pointer = 0; // queue.shift() 대신 인덱스로 접근 (성능 향상)
  visited[0][0] = 1; // 시작점은 방문했으며, 거리 1로 설정

  while (pointer < queue.length) {
    const [y, x] = queue[pointer++]; // 현재 탐색 위치 꺼내기

    for (const [dy, dx] of directions) {
      // 상하좌우 네 방향 반복
      const ny = y + dy;
      const nx = x + dx;

      // 맵 밖으로 나가면 건너뜀
      if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

      // 벽이거나, 이미 방문한 칸이면 건너뜀
      if (maps[ny][nx] === 0 || visited[ny][nx]) continue;

      // 이동 가능한 길이라면:
      visited[ny][nx] = visited[y][x] + 1; // 이전 거리 + 1
      queue.push([ny, nx]); // 다음 탐색 대상으로 큐에 추가
    }
  }

  const result = visited[n - 1][m - 1]; // 도착 지점의 거리 값

  return result === 0 ? -1 : result; // 도착 못했으면 0이므로 -1 반환
}
