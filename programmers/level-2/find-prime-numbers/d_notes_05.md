## ✅ 소수 판별 및 개수 세는 로직 설명

```js
// 소수 판별 함수
const isPrime = (num) => {
  if (num < 2) return false; // 0과 1은 소수가 아님
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // 나누어떨어지면 소수 아님
  }
  return true; // 모든 조건 통과 시 소수
};

// 소수 개수 세기
let count = 0;
for (const number of numberSet) {
  if (isPrime(number)) count++; // 소수면 카운트 증가
}

return count;
```

---

### 💡 핵심 요약

- `isPrime`: 주어진 숫자가 소수인지 판별하는 함수
- `numberSet`: 중복 없는 조합 숫자 모음
- 모든 숫자를 `isPrime()`으로 검사 후 소수 개수를 반환
