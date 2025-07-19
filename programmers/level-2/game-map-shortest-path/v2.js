// 다른 버전 shift

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 시작점 또는 도착점이 벽이면 도달 불가
  if (maps[0][0] === 0 || maps[n - 1][m - 1] === 0) return -1;

  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  const queue = [[0, 0]];
  visited[0][0] = 1;

  const directions = [
    [0, 1], // 오른쪽
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [-1, 0], // 위
  ];

  while (queue.length) {
    const [y, x] = queue.shift();

    for (const [dy, dx] of directions) {
      const ny = y + dy;
      const nx = x + dx;

      if (
        ny < 0 ||
        ny >= n ||
        nx < 0 ||
        nx >= m ||
        maps[ny][nx] === 0 ||
        visited[ny][nx]
      )
        continue;

      visited[ny][nx] = visited[y][x] + 1;
      queue.push([ny, nx]);
    }
  }

  const answer = visited[n - 1][m - 1];
  return answer === 0 ? -1 : answer;
}
