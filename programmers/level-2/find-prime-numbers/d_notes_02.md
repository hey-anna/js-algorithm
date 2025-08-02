## 🔁 순열 재귀에서 `splice`, `selectNum - 1`, `current + picked` 완전 정리

### 🤯 왜 이렇게 헷갈릴까?

- 순간적으로는 이해되지만 전체 흐름이 연결이 안 됨
- `splice`, `재귀`, `문자열 누적`, `selectNum` 같은 개념이 한 줄에 몰려 있음
- 완전탐색 + 재귀가 처음이라 **뇌가 과부하 상태** 발생

---

### ✅ 이 for문의 역할은?

```js
for (let i = 0; i < arr.length; i++) {
  const rest = [...arr]; // 배열 복사 (원본 보호)
  const picked = rest.splice(i, 1); // i번째 요소 제거 → 현재 선택한 숫자
  getPermutations(rest, selectNum - 1, current + picked); // 재귀 호출
}
```

| 요소                | 설명                                         |
| ------------------- | -------------------------------------------- |
| `rest`              | 원본 배열 복사 (splice로 망가지지 않게)      |
| `splice(i, 1)`      | i번째 요소 1개 제거하고 그걸 `picked`에 담음 |
| `current + picked`  | 지금까지 누적한 숫자 조합 문자열             |
| `selectNum - 1`     | 하나 골랐으니 앞으로 고를 숫자 개수 1 감소   |
| `getPermutations()` | 나머지 숫자들로 계속 조합을 이어감 (재귀)    |

---

### 🧠 예시: `"123"` → 2자리 조합

```plaintext
getPermutations(["1", "2", "3"], 2, "")
→ pick "1" → current = "1"
  → getPermutations(["2", "3"], 1, "1")
    → pick "2" → current = "12" → 저장!
    → pick "3" → current = "13" → 저장!
→ pick "2" → current = "2"
  → getPermutations(["1", "3"], 1, "2")
    → pick "1" → current = "21"
    → pick "3" → current = "23"
→ pick "3" → current = "3"
  → getPermutations(["1", "2"], 1, "3")
    → pick "1" → current = "31"
    → pick "2" → current = "32"
```

---

### 📦 저장된 결과 조합 (Set에 들어감)

```
["12", "13", "21", "23", "31", "32"]
```

---

### ✅ 핵심 요약

- `splice(i, 1)` → i번째 요소 1개 제거 + 반환
- `selectNum - 1` → 선택할 개수 하나 줄이기
- `current + picked` → 문자열 누적
- 재귀 호출로 모든 조합 생성 → selectNum === 0 되면 조합 완성됨

---

### 🧘‍♀️ 마지막 정리

> 지금 이 흐름이 처음엔 정말 어렵지만,  
> 퍼즐처럼 하나하나 쌓이고 나면  
> “순열”과 “재귀”가 **진짜 강력한 도구**라는 걸 깨닫게 됩니다!

```js
getPermutations(rest, selectNum - 1, current + picked);
```

이 한 줄은  
👉 “하나 골랐으니, 남은 걸로 다음 조합 이어서 만들어봐!”  
라는 뜻입니다 💪

---
