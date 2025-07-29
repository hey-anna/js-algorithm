## ✂️ BOJ 1654 - 랜선 자르기: 200이 정답이 되는 과정 완전 도식화

### 🎯 문제 목표

> 랜선들 `[802, 743, 457, 539]`를  
> 같은 길이로 잘라서 **최소 11개 이상** 만들되,  
> 만들 수 있는 **가장 긴 길이(mid)** 를 찾아라.

---

### 🔁 이분 탐색 기본 구조

```js
let left = 1;
let right = 802; // 가장 긴 랜선
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  const count = 랜선들을 mid로 자른 총 개수;

  if (count >= n) {
    answer = mid;       // 후보 저장
    left = mid + 1;     // left 이동 ↑ 더 길게 잘라보기
  } else {
    right = mid - 1;    // right 이동 ↓ count < n 너무 길어서 부족 → 줄이기
  }
}
```

---

### 📊 mid가 변하는 흐름 도식 (계산식 포함)

```
초기 상태: left = 1, right = 802

① mid = Math.floor((1 + 802) / 2) = 401
   → count = 1 + 1 + 1 + 1 = 4 (부족)
   → right = 400

② mid = Math.floor((1 + 400) / 2) = 200
   → count = 4 + 3 + 2 + 2 = 11 ✅ 조건 만족
   → answer = 200 저장
   → left = 201

③ mid = Math.floor((201 + 400) / 2) = 300
   → count = 2 + 2 + 1 + 1 = 6 ❌ 부족
   → right = 299

④ mid = Math.floor((201 + 299) / 2) = 250 → count = 8 ❌ → right = 249
⑤ mid = Math.floor((201 + 249) / 2) = 225 → count = 10 ❌ → right = 224
⑥ mid = Math.floor((201 + 224) / 2) = 212 → count = 10 ❌ → right = 211
⑦ mid = Math.floor((201 + 211) / 2) = 206 → count = 10 ❌ → right = 205
⑧ mid = Math.floor((201 + 205) / 2) = 203 → count = 10 ❌ → right = 202
⑨ mid = Math.floor((201 + 202) / 2) = 201 → count = 10 ❌ → right = 200
```

---

### 🔄 탐색 방향은 어떻게 결정되는가?

- 매번 **조건을 만족했는지 여부에 따라**
  → `left` 또는 `right` **하나만** 움직인다.

```
left = 1, right = 802 → mid = 401 → count = 4 ❌ → right = 400

left = 1, right = 400 → mid = 200 → count = 11 ✅ → left = 201

left = 201, right = 400 → mid = 300 → count = 6 ❌ → right = 299

left = 201, right = 299 → mid = 250 → count = 8 ❌ → right = 249

left = 201, right = 249 → mid = 225 → count = 10 ❌ → right = 224

...
→ 이렇게 조건에 따라 **한 쪽만 이동**하며 범위를 좁혀나간다.
```

### ⛔ 종료 조건 도달

```
left = 201, right = 200 → left > right → 이분 탐색 종료
최종 answer = 200
```

---

### ✅ 왜 정답이 200인가?

- `mid = 200`일 때, **딱 11개** 만들 수 있었음 (조건 만족)
- 그 이후 `mid = 201, 203, 212...` 시도 시 → 10개밖에 못 만들어서 조건 미달
- → 즉, 조건을 만족하는 길이 중 **가장 큰 값이 200**

---

### 🧠 한 줄 요약

> "200cm로 자르면 딱 11개 만들 수 있음 →  
> 그보다 길면 조건 미달 →  
> 조건을 만족하는 **최대 길이**는 `200`"
