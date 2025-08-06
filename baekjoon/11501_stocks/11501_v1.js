// 답안

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[line]);
  const prices = input[line + 1].split(" ").map(Number); // 주가 리스트
  line += 2;

  let maxPrice = 0;
  let profit = 0;

  for (let i = N - 1; i >= 0; i--) {
    if (prices[i] > maxPrice) {
      maxPrice = prices[i];
    } else {
      profit += maxPrice - prices[i];
    }
  }

  console.log(profit);
}
