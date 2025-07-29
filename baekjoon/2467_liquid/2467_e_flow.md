## 📥 입력 처리

```
input = ["5", "-99 -2 -1 4 98"]

N = 5
arr = [-99, -2, -1, 4, 98]
```

---

## 📌 투 포인터 초기 설정

```
left → 0 (가장 작은 수)
right → N - 1 = 4 (가장 큰 수)
minSum = Infinity
answer = []
```

---

## 🔁 while (left < right)

반복하면서 아래 순서대로 실행:

1️⃣ **합 계산**

```
sum = arr[left] + arr[right]
```

2️⃣ **절댓값 비교**

```
Math.abs(sum) < Math.abs(minSum)
→ 0에 더 가까우면 갱신
→ minSum = sum
→ answer = [arr[left], arr[right]]
```

3️⃣ **포인터 이동**

```
sum > 0 → right--  (합 줄이기)
sum < 0 → left++   (합 키우기)
```

---

## 💥 종료 조건

```
left >= right → while 종료
```

---

## 📤 정답 출력

```
console.log(answer[0], answer[1])
```

---

## 🧪 예시 흐름 (입력: -99 -2 -1 4 98)

```
초기:    left=0, right=4 → sum = -1 → minSum 갱신
1단계:   left=1, right=4 → sum = 96 → skip → right--
2단계:   left=1, right=3 → sum = 2 → skip → right--
3단계:   left=1, right=2 → sum = -3 → skip → left++
4단계:   left=2, right=2 → 종료

최종 answer: [-99, 98]
```
