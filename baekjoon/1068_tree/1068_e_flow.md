## 🌲 삭제 후 리프 노드 개수 세기 (DFS) — 코드 설명

### ✅ 전체 코드

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);
```

- **입력 읽기**
  - `0`은 `/dev/stdin`을 의미 (백준 등에서 사용)
  - 줄바꿈 기준으로 입력을 배열로 분리
  - `input[0]`: 노드 수 N
  - `input[1]`: 각 노드의 부모 정보
  - `input[2]`: 삭제할 노드 번호

---

```js
const N = Number(input[0]);
const parent = input[1].trim().split(/\s+/).map(Number);
const del = Number(input[2]);
```

- `N`: 노드 개수
- `parent`: 부모 노드 배열 (인덱스 = 현재 노드, 값 = 부모)
- `del`: 삭제할 노드 번호

---

```js
const children = Array.from({ length: N }, () => []);
let root = -1;
```

- `children`: 각 노드의 자식 노드들을 담는 배열 (트리 구조 저장용)
- `root`: 루트 노드 저장용 변수 (부모가 -1인 노드)

---

```js
for (const [i, p] of parent.entries()) {
  if (p === -1) root = i;
  else children[p].push(i);
}
```

- `parent.entries()`: `[인덱스, 값]` 형태로 부모 배열을 순회
- 부모가 `-1`이면 루트 노드이므로 `root`에 저장
- 아니면 `children[부모]` 배열에 `i`(현재 노드)를 추가해 자식 정보 저장

---

```js
if (del === root) {
  console.log(0);
  process.exit(0);
}
```

- 루트 노드를 삭제하는 경우 → 전체 트리 소멸 → 리프 노드 없음
- `0`을 출력하고 프로그램 종료

---

```js
let leafCount = 0;
function dfs(u) {
  const nexts = children[u].filter((v) => v !== del);
  if (nexts.length === 0) {
    leafCount++;
    return;
  }
  for (const v of nexts) dfs(v);
}
```

- `dfs(u)`:
  - 현재 노드 `u`의 자식 노드들 중에서 삭제 대상이 아닌 노드만 필터링
  - **자식이 하나도 없으면 리프 노드** → `leafCount` 증가
  - 자식이 있으면 재귀적으로 DFS 탐색 진행

---

```js
dfs(root);
console.log(leafCount);
```

- 루트부터 DFS 시작
- 리프 노드의 개수를 최종 출력

---

## 🧠 요약

- 트리를 자식 기준으로 구성하고,
- 삭제 노드 이후 구조를 반영하여
- **리프 노드 개수를 정확히 세는 문제**입니다.

DFS, 트리 구조, 배열 초기화, filter 활용 등이 포인트입니다.
