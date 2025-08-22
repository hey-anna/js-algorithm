# 코드 뜯어보기

## 문제 한 줄 요약

- 트리에서 **지정 노드 `del`과 그 자손 전체를 삭제**한 뒤, 남은 트리의 **리프(자식 0개) 개수**를 구한다.

---

## 입력 구조

1. `N` : 노드 수 (0 ~ N-1)
2. `parent[0..N-1]` : 각 노드의 부모 번호 (`-1`이면 그 노드가 루트)
3. `del` : 삭제할 노드 번호

---

## 코드 단계별 해설

### 1) 입력 파싱

```js
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const parent = input[1].trim().split(/\s+/).map(Number);
const del = Number(input[2]);
```

- 표준입력 전체를 읽고 줄 단위로 나눈 뒤, 각 줄을 숫자로 변환.
- parent는 공백 여러 개/탭 등도 견고하게 처리하려고 split(/\s+/) 사용.

### 2) 자식 인접 리스트 구성 + 루트 찾기

```js
const children = Array.from({ length: N }, () => []);
let root = -1;

for (let i = 0; i < N; i++) {
  const p = parent[i];
  if (p === -1) {
    root = i; // i가 루트
  } else {
    children[p].push(i); // "부모 p → 자식 i" 간선
  }
}
```

- 부모 배열은 “위로” 가기 쉬우므로, 탐색하기 좋게 자식 리스트로 바꿔 둔다.
- parent[i] === -1인 인덱스가 루트.

### 3) 루트가 곧 삭제 노드인 경우(전체 삭제)

```js
if (del === root) {
  console.log(0);
  process.exit(0);
}
```

- 루트를 지우면 트리가 통째로 사라져 리프가 0개.

### 4) DFS로 리프 세기 (핵심)

```js
let leafCount = 0;

function dfs(u) {
  const nexts = children[u].filter((v) => v !== del); // del로 내려가지 않음

  if (nexts.length === 0) {
    // 실효 자식이 없으면 리프
    leafCount++;
    return;
  }
  for (const v of nexts) dfs(v);
}

dfs(root);
console.log(leafCount);
```

> 포인트 1: filter(v !== del)

- 삭제 노드 del로 향하는 간선을 탐색 단계에서 차단 → del 하위 전체가 자연스럽게 미방문(= 삭제 효과).

> 포인트 2: 리프 판정

- “삭제를 반영한 뒤”의 자식 수가 0이면 리프.
- 원래 자식이 있던 노드라도, **유일한 자식이 del**이었다면 삭제 후 리프로 재분류됨.

### 왜 올바른가?

- 굳이 del 서브트리를 자료구조에서 물리적으로 제거할 필요 없음.
  탐색 중 진입만 막으면 그 아래는 전부 방문되지 않아 삭제와 동일한 결과를 얻는다.

### 복잡도

- 시간: O(N) (각 노드·간선 한 번씩 처리)
- 공간: O(N) (자식 리스트)
- 재귀 깊이 최대 N(≤50) → Node.js에서도 안전

### 자주 하는 실수 체크

- parent 파싱 시 공백이 여러 칸일 수 있음 → split(/\s+/)로 견고하게.
- del === root 예외 처리 누락 시 오답.
- 리프 판정은 삭제 이후 기준임에 주의.
