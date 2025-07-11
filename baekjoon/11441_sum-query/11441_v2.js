// 제출한 정답 코드 하나하나 뜯기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 입력 처리
const N = Number(input[0]); // 수의 개수
const numbers = input[1].split(" ").map(Number);
const M = Number(input[2]); // 질의 개수 (리딩용)
const queries = input.slice(3).map((line) => line.split(" ").map(Number));
// 인덱스 4번째줄 0 1 2 3 부터 잘라서
// map으로 새 배열을 만들어주는데
// 각 인자를 문자열 배열로쪼개서, 숫자열배열로 다시 만들어준다.

// 누적합 배열 구하기
// 누적합(Prefix Sum) 배열 초기화
// 배열을 1번 인덱스부터 쓰기 위해, 0번 인덱스를 0으로 채워둠
// 이렇게 하면 나중에 prefixSum[j] - prefixSum[i-1] 쓸 수 있음
const prefixSum = [0]; // prefixSum[0] = 0
for (let i = 0; i < N; i++) {
  prefixSum[i + 1] = prefixSum[i] + numbers[i];
}

// 질의에 대한 결과 출력

let result = "";
for (let [i, j] of queries) {
  result += prefixSum[j] - prefixSum[i - 1] + "\n";
}

console.log(result.trim());

// N numbers M queries

numbers = [10, 20, 30, 40, 50]; // A[1] ~ A[5]

prefixSum = [0, 10, 30, 60, 100, 150];
// 인덱스       0   1   2   3    4    5
// 의미:     A[1]까지, A[2]까지, ... A[5]까지 누적합

// 그니깐 미리 합산해둔값읜 인덱스가 0 1 2 3 4 5 이렇게 되니깐
// 만약에  2 4 이면 4 네번째 누적값 100에서 2번째인 30이 아닌 앞의 누적값 인덱스인 1 10을 뺀다는거네,

// 2 ~ 4누적값을 출력하려면
// 앞에 계산 해둔 누적 값이 담긴 인덱스에서 4
// 2의 앞 인덱스인 1의 값을 빼주면 된다

// prefixSum[4] - prefixSum[1]
// = 100 - 10
// = 90
