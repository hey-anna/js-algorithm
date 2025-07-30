## 코드 해석

- 이진 탐색으로 풀이한다.
- left: 최소 시간
- right: 가장 느린 심사관 × n (최대 시간)
- answer: 가능한 최소 시간 후보

→ left ~ right 범위에서 이진 탐색 반복

- mid: 중간값 (현재 시간 후보)
- totalProcessed: mid 시간 동안 각 심사관이 처리할 수 있는 인원 수를 합산한 값

- 만약 totalProcessed >= n이면:
  → mid는 가능한 시간 → answer에 저장
  → 더 짧은 시간도 가능한지 right = mid - 1

- 아니면 (n명 못 처리하면)
  → 더 긴 시간 필요 → left = mid + 1

- 최종적으로 모든 사람이 심사 받는 데 걸리는 **최소 시간**이 answer로 리턴된다.
