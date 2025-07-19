// 최종 답안 pointer

function solution(maps) {
  const n = maps.length; // 세로 길이
  const m = maps[0].length; // 가로 길이

  if (maps[0][0] === 0 || maps[n - 1][m - 1] === 0) return -1;

  const visited = Array.from({ length: n }, () => Array(m).fill(0)); // 방문 여부 + 최단거리 기록용
  const directions = [
    [0, 1], // 오른쪽
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [-1, 0], // 위
  ];

  const queue = [[0, 0]];
  let pointer = 0;
  visited[0][0] = 1;

  while (pointer < queue.length) {
    const [y, x] = queue[pointer++];

    for (const [dy, dx] of directions) {
      const ny = y + dy;
      const nx = x + dx;

      if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;

      if (maps[ny][nx] === 0 || visited[ny][nx] !== 0) continue;

      visited[ny][nx] = visited[y][x] + 1;
      queue.push([ny, nx]);
    }
  }

  const result = visited[n - 1][m - 1];

  return result === 0 ? -1 : result;
}
