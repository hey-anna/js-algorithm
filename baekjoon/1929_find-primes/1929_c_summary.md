# BOJ 1929 - 소수 구하기 - 문제 요약

## 목표

- 주어진 범위 **M 이상 N 이하의 모든 소수**를 **오름차순으로 출력**하라.

---

## 입력

- 두 정수 `M`, `N`이 주어짐  
  (1 ≤ M ≤ N ≤ 1,000,000)

---

## 출력

- 각 줄에 소수 하나씩 출력  
  (M 이상 N 이하에서 소수인 수들만)

---

## 제약 사항

- 시간 효율 필요 → **에라토스테네스의 체** 알고리즘 추천
- 단순 반복문은 시간 초과 가능성 높음 (입력 범위 최대 1,000,000)

---

## 예시

```
입력:
3 16

출력:
3
5
7
11
13
```
