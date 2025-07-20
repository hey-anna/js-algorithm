// 최종 답안

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let idx = 1;
let result = "";

for (let t = 0; t < T; t++) {
  const N = Number(input[idx]);
  const applicants = [];

  for (let i = 1; i <= N; i++) {
    const [paper, interview] = input[idx + i].split(" ").map(Number);
    applicants.push([paper, interview]);
  }

  applicants.sort((a, b) => a[0] - b[0]);

  let count = 1;
  let minInterview = applicants[0][1];

  for (let i = 1; i < N; i++) {
    if (applicants[i][1] < minInterview) {
      count++;
      minInterview = applicants[i][1];
    }
  }

  result += count + "\n";
  idx += N + 1;
}

console.log(result.trim());
