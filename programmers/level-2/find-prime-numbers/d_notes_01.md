## 🔍 `selectNum === 0` 도식화로 이해하기

> 숫자 조합이 완성되는 시점에 `Set`에 담기는 흐름을  
> 도식으로 정리해봤어요!  
> (예시 입력: `"17"`)

---

### 📥 문자 배열로 변환

```js
"17" → ["1", "7"]
```

---

### 🔁 재귀 호출 흐름 (2자리 조합 만들기)

```
getPermutations(["1", "7"], 2, "")
          ↓
  [i = 0] pick "1" → rest = ["7"] → current = "1"
          ↓
    getPermutations(["7"], 1, "1")
        ↓
    [i = 0] pick "7" → rest = [] → current = "17"
        ↓
    getPermutations([], 0, "17")
    ✅ selectNum === 0 → Set.add(17)

  [i = 1] pick "7" → rest = ["1"] → current = "7"
          ↓
    getPermutations(["1"], 1, "7")
        ↓
    [i = 0] pick "1" → rest = [] → current = "71"
        ↓
    getPermutations([], 0, "71")
    ✅ selectNum === 0 → Set.add(71)
```

---

### 📦 Set에 저장되는 순간

| current 문자열 | selectNum | 저장되는 값 |
| -------------- | --------- | ----------- |
| `"17"`         | `0`       | `17`        |
| `"71"`         | `0`       | `71`        |

---

### ✅ 핵심 요약

- `selectNum`은 앞으로 더 선택해야 하는 숫자 개수
- `selectNum === 0`이면 조합 완료
- 지금까지 누적된 문자열 `current`를 **숫자형으로 변환하여 Set에 저장**
- 저장은 재귀 중간중간에 **즉시 실행됨**

> 즉, "이제 고를 숫자가 없으니, 완성된 숫자를 Set에 담자!"는 타이밍이 바로 `selectNum === 0`입니다.
