# ✅ 제곱근을 이용한 소수 판별 개념 (도식 예제 포함)

소수를 판별할 때, **어떤 수 `n`이 합성수라면 약수 쌍 `(a × b = n)` 중 하나는 반드시 `√n` 이하**입니다.  
→ 즉, `2`부터 `√n`까지만 나눠봐도 소수 여부를 판별할 수 있어요!

---

## 📌 예제 1: n = 36

- √36 = 6
- 2 × 18 → 2는 √36 이하 ✅
- 3 × 12 → 3은 √36 이하 ✅
- 4 × 9 → 4는 √36 이하 ✅
- 6 × 6 → 6은 √36 ✅
- 9 × 4 → 9는 √36 초과 ❌  
  ➡️ 9를 확인할 필요 없음!

✅ `2 ~ 6까지만 확인하면 약수 존재 여부 확인 가능`

---

## 📌 예제 2: n = 17 (소수)

- √17 ≈ 4.12
- 2 → ❌
- 3 → ❌
- 4 → ❌
  ✅ 2부터 √17까지 어떤 수로도 나누어 떨어지지 않음 → 소수!

---

## 📌 예제 3: n = 49

- √49 = 7
- 2 → ❌
- 3 → ❌
- 4 → ❌
- 5 → ❌
- 6 → ❌
- 7 → ✅ (49 % 7 === 0)

✅ 약수가 존재 → 소수 ❌

---

## 💡 요약

- 소수 판별 시 `2 ~ √n` 까지만 나눠보면 충분!
- 이유: 약수쌍 중 하나는 √n 이하이기 때문.
- ✔️ 효율적이고 정확한 방식!
