// 최종 답안 코드 리팩토링, 자주 사용하는 패턴, 유지 보수 쉽게 수정

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];
let idx = 1;
let result = "";

for (let t = 0; t < T; t++) {
  const N = Number(input[idx]);
  const applicants = [];

  //   for (let i = 1; i <= N; i++) {
  //     const [paper, interview] = input[idx + i].split(" ").map(Number);

  for (let i = 0; i < N; i++) {
    // 지원자 정보는 input[idx + 1] ~ input[idx + N]
    // input[idx + 1 + i] → input[2] ~ input[6]까지 정확히 5명의 정보를 읽음
    const [paper, interview] = input[idx + 1 + i].split(" ").map(Number);
    applicants.push([paper, interview]);
  }

  applicants.sort((a, b) => a[0] - b[0]);

  let count = 1;
  let minInterview = applicants[0][1];

  // 두번째 인덱스부터 시작하니깐
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
