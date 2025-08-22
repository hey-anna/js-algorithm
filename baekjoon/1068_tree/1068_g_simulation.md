# 코드 흐름에 따른 도식화

> 주어진 트리에서 특정 노드를 삭제했을 때 남은 리프 노드의 개수를 구하는 문제

---

## ✅ 문제 입력 예시

```
7
-1 0 0 1 1 2 2
2
```

- `N = 7`: 노드 개수
- `parent = [-1, 0, 0, 1, 1, 2, 2]`: 각 인덱스가 노드 번호이고, 값은 부모 노드
- `del = 2`: 삭제할 노드 번호

---

## 🔸 트리 구조 (삭제 전)

```
        0
      /   \
     1     2
    / \   / \
   3  4  5  6
```

- 루트 노드: `0` (부모가 -1)
- 자식 노드 리스트 구성 (`children`):
  ```js
  children = [
    [1, 2], // 0의 자식
    [3, 4], // 1의 자식
    [5, 6], // 2의 자식
    [],
    [],
    [],
    [], // 3, 4, 5, 6은 자식 없음
  ];
  ```

---

## 🔸 삭제 대상 노드

- 삭제할 노드: `2`
- `2`번 노드와 그 자식 노드들 (`5`, `6`)은 모두 **탐색 대상에서 제외**

---

## 🔸 DFS 탐색 흐름

```js
dfs(0);
// children[0] → [1, 2]
// 2는 삭제 대상이므로 제외 → nexts = [1]

dfs(1);
// children[1] → [3, 4]

dfs(3);
// children[3] → [] → 리프 노드 → leafCount++

dfs(4);
// children[4] → [] → 리프 노드 → leafCount++
```

---

## ✅ 최종 결과

- 탐색한 리프 노드: `3`, `4`
- 삭제된 서브트리: `2`, `5`, `6`
- **출력값: `2`**

---

## ✅ 전체 코드 (JavaScript)

```js
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const N = Number(input[0]);
const parent = input[1].trim().split(/\s+/).map(Number);
const del = Number(input[2]);

const children = Array.from({ length: N }, () => []);
let root = -1;

// 트리 구조 구성
for (const [i, p] of parent.entries()) {
  if (p === -1) root = i;
  else children[p].push(i);
}

// 루트가 삭제 대상일 경우
if (del === root) {
  console.log(0);
  process.exit(0);
}

let leafCount = 0;

// DFS 탐색
function dfs(u) {
  const nexts = children[u].filter((v) => v !== del);
  if (nexts.length === 0) {
    leafCount++;
    return;
  }
  for (const v of nexts) dfs(v);
}

dfs(root);
console.log(leafCount);
```

---

## 🔍 핵심 요약

- `Array.from({ length: N }, () => [])`: 자식 노드 리스트 초기화
- `children[p].push(i)`: 부모-자식 관계를 자식 중심으로 구성
- 삭제된 노드를 재귀 탐색에서 제외
- 리프 노드란 **삭제된 노드가 자식일 경우를 포함하여 자식이 더 이상 없는 노드**

---
