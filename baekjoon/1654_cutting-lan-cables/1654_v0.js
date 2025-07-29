const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [k, n] = input[0].split(" ").map(Number);
const lan = input.slice(1).map(Number);

// 이분 탐색
//
// 자를 수 있는 가장 짧은 길이 (0은 불가)
let left = 1;

// lan은 우리가 가지고 있는 랜선들의 길이 배열
// 랜선들 중 가장 긴 길이를 구하기
// 자바스크립트 전개 연산자(...)로 배열에서 가장 큰 수를 구함
// 이분 탐색에서 자를 수 있는 최대 길이의 시작점
// 가장 긴 랜선보다 더 긴 길이로 자르면 랜선 1개도 만들 수 없기 때문
// 이분 탐색의 최댓값 후보의 한계점 설정
let right = Math.max(...lan); // 가장 긴 랜선 길이;

let answer = 0;

while (left <= right) {
  // lan : 현재 가지고 있는 랜선 길이 배열 (예: [802, 743, 457, 539])
  // mid : 지금 자르려고 시도 중인 랜선 길이 후보
  // len / mid : 한 랜선 길이(len)를 mid로 잘랐을 때 몇 개 나오는지
  // Math.floor(...) : 정수 개수만 유효 → 소수점은 버림
  // reduce(...) : 전체 랜선에 대해 잘라서 만든 개수를 누적(acc)

  // 각 랜선별 잘린 개수:
  // 802 / 200 = 4.01 → 4개
  // 743 / 200 = 3.715 → 3개
  // 457 / 200 = 2.285 → 2개
  // 539 / 200 = 2.695 → 2개

  // 총합 = 4 + 3 + 2 + 2 = 11

  // acc: 누적합(초기값 0)
  // len: 배열의 각 랜선 길이
  // 반복적으로 acc에 잘린 개수를 더함

  // mid = 200일 때
  // acc = 0
  // acc = 0 + Math.floor(802 / 200) → 4
  // acc = 4 + Math.floor(743 / 200) → 7
  // acc = 7 + Math.floor(457 / 200) → 9
  // acc = 9 + Math.floor(539 / 200) → 11
  // → 최종 count = 11

  // Math.floor(len / mid) : 각 랜선에서 만들 수 있는 랜선 개수
  // reduce(..., 0) : 전체 랜선을 돌며 개수를 누적
  // 최종 count : 현재 mid로 자를 경우 만들 수 있는 랜선의 총 개수
  const mid = Math.floor((left + right) / 2);
  const count = lan.reduce((acc, len) => acc + Math.floor(len / mid), 0);

  //

  // 지금 시도 중인 길이(mid)로 잘랐을 때 n개 이상 만들 수 있는지 판단하는 데 사용
  if (count >= n) {
    // 충분히 만들 수 있음 → 더 길게 자를 수 있는지 확인
    answer = mid;
    left = mid + 1;
  } else {
    // 부족함 → 길이 줄여야 함
    right = mid - 1;
  }
}

console.log(answer);

// mid = 200
// count = 11 (n 이상이니까 조건 만족)
// → answer = 200 저장
// → left = mid + 1 = 201 (더 길게 자르기 시도)
// → right는 그대로 400
// → mid = Math.floor((201 + 400) / 2) = 300
