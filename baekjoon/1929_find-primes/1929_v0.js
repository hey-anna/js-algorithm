const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const [M, N] = input.map(Number);

// 0부터 N까지 true로 초기화
const isPrime = new Array(N + 1).fill(true);
// ✔️ 0부터 N까지 인덱스 = 숫자와 일치
// ✔️ isPrime[i] → i가 소수인지 여부

// 0과 1은 소수가 아님
// 0과 1은 소수가 아니므로 제외
isPrime[0] = isPrime[1] = false;

// 에라토스테네스의 체
// 제곱수까지만 검사하면 충분 (최적화)
for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    // i의 배수들을 소수 아님으로 체크
    // j = i * i부터 시작해서
    // j에 i씩 더해가며(j에 i를 더해주면서 다음배수로 이동)
    // j <= N까지 반복하면서
    // j는 소수가 아님 → false
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

// | i 값 | 제거 대상 (j)            | 의미                   |
// | --- | -------------------- | -------------------- |
// | 2   | 4, 6, 8, 10, 12, ... | ✅ 짝수만 (2의 배수)        |
// | 3   | 9, 12, 15, 18, ...   | ✅ 3의 배수 (홀수 + 짝수 섞임) |
// | 5   | 25, 30, 35, 40, ...  | ✅ 5의 배수              |

//

// M부터 N까지 순회하며 소수 출력
let result = "";
// 최종적으로 true로 남은 소수만 출력
for (let i = M; i <= N; i++) {
  if (isPrime[i]) {
    result += i + "\n";
  }
}

console.log(result.trim());

// 한 번만 소수 배열을 구해놓고 그대로 출력만 하면 됨

// 가장 빠르고 효율적인 방식
