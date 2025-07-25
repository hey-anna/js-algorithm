## `++` 연산자를 사용한 흐름 분석

`++` 연산자를 이렇게 한 줄에 3번이나 쓰는 경우는 처음 봤다.  
보통 `for`문이나 `while`문에서 조건이 성립할 때까지 반복되도록 사용하는 것으로만 알고 있었는데…

---

### 코드 흐름 분석

```js
// 초기 상태
let head = 0;
let tail = N; // 예: 6

// 1. 카드 버리기
head++;
// → head가 1이 되며, queue[0] = 1 은 더 이상 접근하지 않음
// → 즉, "버린 것처럼" 처리됨

// 2. 다음 카드 뒤로 보내기
queue[tail++] = queue[head++];
// → 오른쪽부터 실행됨

// queue[head++] 실행:
// 현재 head는 1 → queue[1] = 2
// → 2를 꺼내고 head는 2로 증가

// queue[tail++] = 2 실행:
// 현재 tail은 6 → queue[6] = 2
// → 이후 tail은 7로 증가
```
