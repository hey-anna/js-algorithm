// for

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const parent = input[1].trim().split(/\s+/).map(Number);
const del = Number(input[2]);

// 자식 인접 리스트 구성
const children = Array.from({ length: N }, () => []);
let root = -1; // 루트를 아직 못 찾았다는 초기 상태를 의미

// ## 초기 상태는?
// - 예를 들어 `N = 5`면, 이 줄 실행 직후 상태는:
// ```js
// children === [ [], [], [], [], [] ]   // 각 칸이 "서로 다른" 빈 배열

// 부모 배열은 “위로” 가기 쉬우므로, 탐색하기 좋게 자식 리스트로 바꿔 둔다.
// parent[i] === -1인 인덱스가 루트.
// -1은 “없음(루트)”을 표시하는 센티넬
for (let i = 0; i < N; i++) {
  const p = parent[i];
  if (p === -1) {
    root = i; // i가 루트
  } else {
    children[p].push(i); // "부모 p → 자식 i" 간선
  }
}

// 루트를 지우면 트리 전체 삭제
// 루트를 지우면 트리가 통째로 사라져 리프가 0개.
if (del === root) {
  console.log(0);
  process.exit(0);
}

let leafCount = 0;

// 포인트 1: filter(v !== del)
// 삭제 노드 del로 향하는 간선을 탐색 단계에서 차단 → del 하위 전체가 자연스럽게 미방문(= 삭제 효과).

// 포인트 2: 리프 판정
// “삭제를 반영한 뒤”의 자식 수가 0이면 리프.
// 원래 자식이 있던 노드라도, **유일한 자식이 del**이었다면 삭제 후 리프로 재분류됨.

// **
// 굳이 del 서브트리를 자료구조에서 물리적으로 제거할 필요 없음.
// 탐색 중 진입만 막으면 그 아래는 전부 방문되지 않아 삭제와 동일한 결과를 얻는다.

function dfs(u) {
  // u의 실효 자식(삭제 노드 제외)
  const nexts = children[u].filter((v) => v !== del); // del로 내려가지 않음

  if (nexts.length === 0) {
    // 자식이 없으면 리프
    leafCount++;
    return;
  }

  for (const v of nexts) {
    dfs(v);
  }
}

dfs(root);
console.log(leafCount);
