// 최종 답안 풀이
// for...of + entries

// 백준 1068: 트리 (리프 노드 개수) — for...of + entries
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const N = Number(input[0]);
const parent = input[1].trim().split(/\s+/).map(Number);
const del = Number(input[2]);

// 트리 구조의 자식 노드 리스트를 초기화할 때 자주 사용하는 방식
const children = Array.from({ length: N }, () => []);
// `Array.from()` : 배열을 생성하는 메서드
// `{ length: N }` : 길이가 N인 배열을 만든다 (요소는 `undefined`로 채워짐)
// - `() => []` : 각 요소를 빈 배열로 초기화
// 즉, **"길이가 N인 배열을 만들고, 각 요소에 빈 배열을 채운 것"**입니다.

let root = -1;

for (const [i, p] of parent.entries()) {
  if (p === -1) root = i;
  else children[p].push(i);
}

// const arr = ['a', 'b', 'c'];

// for (const [index, value] of arr.entries()) {
//   console.log(index, value);
//   // 0 'a'
//   // 1 'b'
//   // 2 'c'
// }

if (del === root) {
  console.log(0);
  process.exit(0);
}

let leafCount = 0;
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
