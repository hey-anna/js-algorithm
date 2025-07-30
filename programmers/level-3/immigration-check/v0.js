// 답안 풀이

function solution(n, times) {
  // 가능한 시간의 범위를 설정 (최소: 1분, 최대: 가장 느린 심사관이 n명 다 심사할 때)
  let left = 1;
  let right = Math.max(...times) * n; // 최대시간을 잡아준다.
  let answer = right;

  // 이진 탐색 시작
  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // 중간 시간 설정

    // mid 시간 동안 각 심사관이 처리할 수 있는 인원 합계 계산
    const totalProcessed = times.reduce(
      (acc, time) => acc + Math.floor(mid / time),
      0
    );

    // mid 시간 동안 총 n명 이상을 처리할 수 있다면
    // → mid 시간은 "가능한 시간"임
    if (totalProcessed >= n) {
      // n명 이상 처리 가능 → 이 시간이 정답 후보가 될 수 있음
      answer = mid;
      right = mid - 1; // 더 짧은 시간도 가능한지 확인
    } else {
      // n명 처리 불가능 → 시간이 부족하다는 뜻
      left = mid + 1; // 더 많은 시간이 필요
    }
  }

  return answer; // 모든 사람이 심사받는 데 걸리는 최소 시간
}
