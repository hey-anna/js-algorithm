// 최종 답안
// for...of + entries

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const N = Number(input[0]);
const parent = input[1].trim().split(/\s+/).map(Number);
const del = Number(input[2]);

const children = Array.from({ length: N }, () => []);
let root = -1;

for (const [i, p] of parent.entries()) {
  if (p === -1) root = i;
  else children[p].push(i);
}

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
