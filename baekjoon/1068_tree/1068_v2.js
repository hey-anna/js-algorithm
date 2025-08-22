// for

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
// const parent = line.split(' ').map(Number);
const parent = input[1].trim().split(/\s+/).map(Number);
const del = Number(input[2]);

// 자식 인접 리스트 구성
const children = Array.from({ length: N }, () => []);
let root = -1;

for (let i = 0; i < N; i++) {
  const p = parent[i];
  if (p === -1) {
    root = i;
  } else {
    children[p].push(i);
  }
}

// 루트를 지우면 트리 전체 삭제
if (del === root) {
  console.log(0);
  process.exit(0);
}

let leafCount = 0;

function dfs(u) {
  // u의 실효 자식(삭제 노드 제외)
  const nexts = children[u].filter((v) => v !== del);

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
