# 프로그래머스 - 입국심사 - 문제 요약

- `n`명의 사람이 **입국 심사**를 기다림
- 각 심사관은 **고정된 시간**(`times[i]`) 동안 한 사람을 심사함
- 각 심사관은 **동시에 1명씩만** 심사 가능
- 모든 사람이 심사를 마치는 데 걸리는 **최소 시간**을 구하라

---

## 💡 핵심 개념

- 특정 시간 `t` 안에 심사관들이 처리할 수 있는 총 인원 수 계산:
  - 각 심사관은 `t / 심사시간` 명 처리 가능
- 이걸 통해 **t분 안에 n명 이상 처리 가능한지** 판단 가능

---

## 🔍 해결 전략 – 이진 탐색

1. 최소 시간: `1분`
2. 최대 시간: `가장 느린 심사시간 × n`
3. **이진 탐색**으로 최소 시간을 탐색
4. mid 시간 안에 처리 가능 → 더 짧은 시간도 가능한지 확인 (왼쪽 범위)
5. 불가능하면 → 더 긴 시간 확인 (오른쪽 범위)

---

## ✏️ 예시

```js
n = 6;
times = [7, 10];
```

- 28분 동안 심사관1은 `28/7 = 4명`, 심사관2는 `28/10 = 2명` → 총 6명 ✅
- 따라서 답은 **28분**

---

## 🧠 구조 요약

```js
function solution(n, times) {
  // 이진 탐색 범위 설정
  let left = 1;
  let right = Math.max(...times) * n;
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // mid 시간 안에 몇 명을 처리할 수 있는가?
    const processed = times.reduce(
      (sum, time) => sum + Math.floor(mid / time),
      0
    );

    if (processed >= n) {
      answer = mid; // 가능 → 더 짧은 시간 시도
      right = mid - 1;
    } else {
      left = mid + 1; // 불가능 → 더 긴 시간 필요
    }
  }

  return answer;
}
```
