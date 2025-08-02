## 🔍 순열 조합 도식화 - `"123"`을 입력으로 주었을 때

```js
// 호출
getPermutations(["1", "2", "3"], 3);
```

### 🧩 순열 탐색 트리 (3자리 수 조합)

```
▶ i = 0 → pick "1"
    current: "1", rest: ["2", "3"]
    ▶ i = 0 → pick "2"
        current: "12", rest: ["3"]
        ▶ i = 0 → pick "3"
            current: "123" ✅ 저장

    ▶ i = 1 → pick "3"
        current: "13", rest: ["2"]
        ▶ i = 0 → pick "2"
            current: "132" ✅ 저장

▶ i = 1 → pick "2"
    current: "2", rest: ["1", "3"]
    ▶ i = 0 → pick "1"
        current: "21", rest: ["3"]
        ▶ i = 0 → pick "3"
            current: "213" ✅ 저장

    ▶ i = 1 → pick "3"
        current: "23", rest: ["1"]
        ▶ i = 0 → pick "1"
            current: "231" ✅ 저장

▶ i = 2 → pick "3"
    current: "3", rest: ["1", "2"]
    ▶ i = 0 → pick "1"
        current: "31", rest: ["2"]
        ▶ i = 0 → pick "2"
            current: "312" ✅ 저장

    ▶ i = 1 → pick "2"
        current: "32", rest: ["1"]
        ▶ i = 0 → pick "1"
            current: "321" ✅ 저장
```

---

### ✅ 최종 Set에 저장된 순열 값 (중복 없이)

```
"123", "132", "213", "231", "312", "321"
```

---

### 💡 핵심 요약

- selectNum = 3 → 3자리 수 만들기 위해 재귀 3단계 호출
- 매 단계마다 하나씩 숫자를 pick하고 나머지를 rest로 넘김
- 최종적으로 selectNum === 0이 되면 current 값을 숫자로 변환해 Set에 저장
