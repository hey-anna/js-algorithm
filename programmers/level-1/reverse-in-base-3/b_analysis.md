# 프로그래머스 - 3진법 뒤집기 - 문제 해석

---

## 문제 요약

주어진 10진수 `n`을

1. 3진법으로 바꾸고
2. 그 값을 **뒤집은 후**
3. 다시 **10진법으로 변환**해  
   return 하는 문제입니다.

---

## ✨ 진법 개념 요약

### 🔸 10진수 → 3진수 변환 (나눗셈법)

`n`을 3으로 계속 나누고 **나머지를 순서대로 저장**,  
**역순으로 읽으면 3진법 수**가 됩니다.

예) 45

```
45 ÷ 3 = 15 ... 0
15 ÷ 3 = 5  ... 0
5 ÷ 3 = 1   ... 2
1 ÷ 3 = 0   ... 1
→ 3진법: 1200
```

---

### 🔸 3진수 → 10진수 변환 (거듭제곱 곱셈합)

뒤집은 3진수 문자열을 각 자리마다  
`자리값 × 3ⁿ`으로 계산해 모두 더합니다.

예) 0021

```
= 0×3³ + 0×3² + 2×3¹ + 1×3⁰ = 0 + 0 + 6 + 1 = 7
```

---

## 🔁 문제 흐름

1. 10진수 n → 3진법 문자열
2. 3진법 문자열 → 뒤집기
3. 뒤집은 문자열 → 10진법으로 변환
4. 결과 리턴

---

## 예제 정리

### 입력: 45

- 3진법: `1200`
- 뒤집기: `0021`
- 결과: `7`

---

### 입력: 125

- 3진법: `11122`
- 뒤집기: `22111`
- 결과: `229`

---

## 헷갈릴 수 있는 개념: GCD (최대공약수)?

- `3⎮45`처럼 나누기 구조는 **진법 변환용 나눗셈법**
- `최대공약수(GCD)`는 **유클리드 호제법**과는 별개 개념
- 이 문제는 **진법 변환**과 관련된 문제입니다!
