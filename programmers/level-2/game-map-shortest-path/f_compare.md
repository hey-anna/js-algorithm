## ✅ pointer 방식 vs shift() 방식 비교 정리

두 코드 모두 동작 방식은 같고, 최단 거리도 정확하게 구함.  
→ 결과적으로 **동일한 로직을 다른 방식으로 구현**한 것.

---

### 🔍 차이점 요약

| 항목         | pointer 방식                         | shift() 방식                            |
| ------------ | ------------------------------------ | --------------------------------------- |
| 큐 처리 방식 | `pointer++`로 인덱스를 이동하며 처리 | `queue.shift()`로 큐 앞에서 하나씩 꺼냄 |
| 성능         | ✅ 더 빠름 (O(1))                    | ❌ 느림 (O(n)) - 요소 이동 발생         |
| 코드 스타일  | 약간 복잡하게 보일 수 있음           | 직관적이고 간단하게 보임                |
| while 조건   | `pointer < queue.length`             | `while (queue.length)`                  |
| 큐 구현 방식 | 고전적 BFS 스타일                    | 자바스크립트 큐처럼 사용                |

---

### ✅ 예시 코드 비교

#### 🔹 pointer 방식

```js
let pointer = 0;
while (pointer < queue.length) {
  const [y, x] = queue[pointer++];
}
```

#### 🔹 shift 방식

```js
while (queue.length) {
  const [y, x] = queue.shift(); // 큐 앞에서 제거
}
```
