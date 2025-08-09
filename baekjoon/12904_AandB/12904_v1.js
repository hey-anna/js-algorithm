const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const S = input[0];
let T = input[1];

while (T.length > S.length) {
  if (T.endsWith("A")) {
    T = T.slice(0, -1); // A 제거
  } else if (T.endsWith("B")) {
    T = T.slice(0, -1).split("").reverse().join(""); // B 제거 후 뒤집기
  }
}

console.log(T === S ? 1 : 0);
