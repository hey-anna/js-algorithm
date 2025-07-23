// 최종 답안 풀이

// 입력 예시: "55-50+40"
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 1. '-' 기준으로 수식을 나눔
const parts = input.split("-");

// 2. 각 덩어리에서 '+' 연산을 계산해서 합을 구함
const sumParts = parts.map((part) => {
  return part
    .split("+") // '+' 기준으로 다시 나누고
    .map(Number) // 문자열 → 숫자 변환
    .reduce((a, b) => a + b, 0); // 각 덩어리의 총합
});

// 3. 첫 덩어리는 더하고, 나머지는 모두 빼줌
let result = 0;
for (let i = 0; i < sumParts.length; i++) {
  if (i === 0) {
    result += sumParts[i]; // 첫 번째는 더하고
  } else {
    result -= sumParts[i]; // 나머지는 빼기
  }
}

// 결과 출력
console.log(result);
