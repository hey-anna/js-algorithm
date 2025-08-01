## ✅ 소수 구하기 코드 풀이 정리

### 📥 1. 입력값 받기

- M, N 범위를 입력받는다

```js
const [M, N] = input.map(Number);
```

---

### 🧠 2. 소수 판별 배열 초기화

- N까지의 숫자를 확인해야 하므로 길이를 `N + 1`로 설정한다
- 모든 수를 소수라고 가정하고 `true`로 초기화

```js
const isPrime = new Array(N + 1).fill(true);
```

- 0과 1은 소수가 아니므로 false로 미리 설정

```js
isPrime[0] = isPrime[1] = false;
```

---

### 🔁 3. 에라토스테네스의 체 시작

- i는 2부터 시작해서 √N 이하일 때까지 반복
- i가 아직 소수로 판별되었다면 → i의 배수들을 제거

```js
for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    // i의 배수들을 false 처리
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}
```

#### 💡 왜 `j = i * i`부터 시작하나요?

- `2 * i`, `3 * i`, ... 같은 **작은 곱들은 이미 이전 i에서 처리됨**
- 예:
  - `i = 2`일 때 4, 6, 8, 10, ... 제거
  - `i = 3`일 때는 6, 9, 12, ...인데, **6, 12는 이미 제거됨**
- 따라서 **중복 제거 + 불필요한 반복 방지**를 위해  
  `j = i * i`부터 시작하는 것이 핵심!

- i가 소수로 판별된 경우 (`isPrime[i] === true`)
  → i의 **배수 j**를 걸러냄
  → j는 `i * i`부터 시작해서 `j += i`로 진행

---

### 📤 4. 결과 수집

- 결과 문자열을 저장할 변수 생성

```js
let result = "";
```

- M부터 N까지 돌면서 `isPrime[i]`가 true면 출력값에 추가

```js
for (let i = M; i <= N; i++) {
  if (isPrime[i]) {
    result += i + "\n";
  }
}
```

---

### 🖨️ 5. 결과 출력

- 마지막 줄바꿈을 제거하고 출력

```js
console.log(result.trim());
```

---

### ✅ 전체 흐름 요약

1. 입력값 M, N을 받는다
2. `isPrime[N + 1]` 배열 생성 후 전부 true 설정(초기화)
3. 0과 1은 false로 처리(초기화)
4. 2부터 √N까지 i의 배수들을 false로 바꾸기
   - 2부터 √N까지 소수의 배수를 제거 (`j = i * i`부터 시작 → 중복 제거 목적)
5. M부터 N까지 isPrime[i]가 true인 값만 출력
   - M부터 N까지 true인 값만 결과에 추가하고 출력
