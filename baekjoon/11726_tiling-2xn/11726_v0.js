// 입력값 받기
const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

// DP 배열 초기화
// → 길이가 input + 1인 비어있는 배열을 만든다
// (예: input = 4면 길이 5짜리 배열 생성: 인덱스 0~4)
//
// dp[0], dp[1], dp[2], ..., dp[input]까지
// 총 input + 1개의 칸이 있고
// 각 칸의 초기값은 전부 0
// const dp = [0, 0, 0, 0, 0];
// 인덱스는 0부터 4까지 → 총 5칸
// 즉, dp[0], dp[1], dp[2], dp[3], dp[4]
const dp = new Array(input + 1).fill(0);

// 첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)
// n의 최소값은 1

// 기본값 설정
dp[1] = 1;
dp[2] = 2;

// const dp = [0, 1, 2, 0, 0]; // 초기 상태
// i = 3: dp[3] = dp[2] + dp[1] = 2 + 1 = 3
// i = 4: dp[4] = dp[3] + dp[2] = 3 + 2 = 5
// → 최종 결과: dp[4] = 5

// 점화식 적용: dp[n] = dp[n-1] + dp[n-2]
// → 마지막에 세로 하나 붙였을 경우(3가지)
// → 마지막에 가로 2개 붙였을 경우(2가지)
// 각각의 경우의 수를 더해서 전체 경우를 계산하는 공식
// "타일 배치의 규칙"을 분석해서 만든 공식이자 수학적 점화식
//  **외워서 쓰는 공식이 아니라, 타일링 문제의 구조를 분석해서 만들어진 "공식"**
for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

// 결과 출력
// const dp = [0, 1, 2, 3, 5];
// const input = 4;
// console.log(dp[4]) → 5 출력됨
// dp의 배열의 마지막 인덱스 값이 = input index 값
console.log(dp[input]);
