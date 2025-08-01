## BOJ 1012 - 유기농 배추 - 코드 풀이 요약

- `T`: 테스트 케이스 수(배추밭 수)
- `idx`: input 배열 순회용 인덱스 변수

- 방향 벡터:
  - `dx`: 가로(좌우) 이동 [0, 0, -1, 1]
  - `dy`: 세로(상하) 이동 [-1, 1, 0, 0]

1. 테스트 케이스 수 만큼 반복하며 처리
2. 각 테스트마다 `M`, `N`, `K`를 받고 → 가로, 세로, 배추 개수
3. `map`: 세로 N줄, 가로 M칸으로 이루어진 2차원 배열 (모두 0으로 초기화)
4. 배추 좌표를 `K`번 받아서, 해당 `map[y][x]`에 1로 표시

5. 전체 map을 순회:

   - `map[y][x]`가 1이면 `dfs(x, y)` 실행
   - dfs 내부에서 상하좌우 탐색하며 연결된 배추들을 모두 0으로 방문 처리
   - 새로 발견한 배추 덩어리마다 `count++`

6. 최종적으로 `count` = 필요한 지렁이 수
