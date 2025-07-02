const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// +input[x]는 문자열을 숫자로 변환하는 트릭입니다 (Number(input[x])와 동일)
// split(" ") → 공백 기준으로 나누고 .map(Number) → 숫자 배열로 변환
const totalNumbers = +input[0]; // A의 길이(리딩용)
const searchTargetList = input[1].split(" ").map(Number); // A 배열
const totalQueries = +input[2]; // B의 길이(리딩용)
const queries = input[3].split(" ").map(Number); // B 배열

// 이진 탐색을 위해 정렬
// 이진 탐색은 정렬된 배열에서만 동작하므로 오름차순 정렬
searchTargetList.sort((a, b) => a - b);

// queries 배열의 각 숫자(target)에 대해
// 존재 여부를 map()으로 처리합니다 → 1 또는 0 반환
// 탐색 범위를 배열 처음부터 끝까지 설정
// 배열의 인덱스는 0부터 시작하니까 length - 1까지
const result = queries.map((target) => {
  let left = 0;
  let right = searchTargetList.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = searchTargetList[mid];

    if (target === midValue) return 1; // 찾았으므로 1을 반환 → map() 배열에 저장됨
    if (target < midValue)
      right = mid - 1; // 찾는 값이 중간값보다 작다면 → 왼쪽으로 범위 줄임
    else left = mid + 1; // 찾는 값이 중간값보다 크다면 → 오른쪽으로 범위 줄임
  }

  return 0; // while문이 끝날 때까지 못 찾았으면 0을 반환
});

console.log(result.join("\n"));

// 흐름 요약
// A배열을 정렬
// B배열의 각 값에 대해 이진 탐색 수행
// 있으면 1, 없으면 0 저장
// 최종 결과 줄바꿈해서 출력
