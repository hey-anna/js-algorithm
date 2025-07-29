const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); // 용액 수
const arr = input[1].split(" ").map(Number); // 오름차순 정렬된 용액 특성값 배열

let left = 0;
let right = N - 1; // 마지막 인덱스 위치를 가리킴 (0부터 시작하니까)
let minSum = Infinity; // 현재까지 찾은 가장 0에 가까운 합
let answer = []; // 결과로 출력할 두 용액 저장 - 결과로 저장할 두 용액 쌍

// 포인터끼리 겹치기 전까지 반복
// 배열은 정렬되어 있기 때문에 왼쪽과 오른쪽에서 좁혀가며 탐색
while (left < right) {
  const sum = arr[left] + arr[right]; // 현재 선택 한 두 용액의 합을 계산

  // 절댓값 기준으로 0에 더 가까우면 갱신 (현재 합(sum)이 이전까지의 minSum보다 0에 더 가까우면 갱신)
  if (Math.abs(sum) < Math.abs(minSum)) {
    minSum = sum;
    answer = [arr[left], arr[right]]; // 더 가까운 쌍을 answer에 저장
  }

  // 합이 0보다 크면 → 오른쪽 값을 줄여야 함 (양수 줄이기)
  if (sum > 0) {
    right--;
  }
  // 합이 0보다 작으면 → 왼쪽 값을 키워야 함 (음수 줄이기)
  else {
    left++;
  }
}

console.log(answer[0], answer[1]);

// 0 과 동일해도 모든 수의 포인터를 다 확인 함
