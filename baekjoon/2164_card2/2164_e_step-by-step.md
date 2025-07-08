# BOJ 2164 - 카드2 - 포인터 시뮬레이션 흐름 해설

---

## 🔹 초기 상태

```js
const queue = [1, 2, 3, 4, 5, 6];
let head = 0;
let tail = N; // 6
```

- `head` → 현재 맨 앞 카드 위치 (`queue[0] = 1`)
- `tail` → 다음 들어갈 빈 칸 위치 (`queue[6]` 비어 있음)

---

## 🔹 시뮬레이션 흐름

```js
초기 상태
queue  = [1, 2, 3, 4, 5, 6]
         ↑                 ↑
       head(0)          tail(6)
```

---

### ✅ 1회차

```js
head++ // → head = 1
queue[tail++] = queue[head++]
→ queue[6] = queue[1] = 2 → head = 2, tail = 7

queue = [1, 2, 3, 4, 5, 6, 2]
         ✘  ↑                 ↑
           head(2)         tail(7)
```

---

### ✅ 2회차

```js
head++ → head = 3
queue[7] = queue[3] = 4 → head = 4, tail = 8

queue = [1, 2, 3, 4, 5, 6, 2, 4]
         ✘  ✘  ✘  ↑                 ↑
               head(4)         tail(8)
```

---

### ✅ 3회차

```js
head++ → head = 5
queue[8] = queue[5] = 6 → head = 6, tail = 9

queue = [1, 2, 3, 4, 5, 6, 2, 4, 6]
         ✘  ✘  ✘  ✘  ✘  ↑                ↑
                     head(6)        tail(9)
```

---

### ✅ 4회차

```js
head++ → head = 7
queue[9] = queue[7] = 4 → head = 8, tail = 10

queue = [1, 2, 3, 4, 5, 6, 2, 4, 6, 4]
         ✘  ✘  ✘  ✘  ✘  ✘  ✘  ↑                ↑
                          head(8)        tail(10)
```

---

### ✅ 5회차

```js
head++ → head = 9
queue[10] = queue[9] = 4 → head = 10, tail = 11

queue = [1, 2, 3, 4, 5, 6, 2, 4, 6, 4, 4]
         ✘  ✘  ✘  ✘  ✘  ✘  ✘  ✘  ✘  ↑              ↑
                               head(10)      tail(11)
```

---

## 🔚 종료 조건 도달

```js
while (tail - head > 1)
// → 11 - 10 = 1 → false → 종료
// → 마지막 남은 카드 = queue[head] = queue[10] = 4
```

---

## ✅ 핵심 요약

| 연산 구문                       | 의미                      |
| ------------------------------- | ------------------------- |
| `head++`                        | 앞 카드 제거처럼 건너뛰기 |
| `queue[tail++] = queue[head++]` | 앞 카드 꺼내 뒤에 추가    |

- 실제 삭제 없이 `head`와 `tail` 포인터만으로 **큐(Queue)**처럼 작동
- `shift()`보다 효율적인 구조로 시간 초과 방지
- 마지막에는 `queue[head]`만 남고 루프 종료됨
