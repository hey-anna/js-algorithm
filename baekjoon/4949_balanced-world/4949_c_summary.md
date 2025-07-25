# BOJ 4949 - 균형잡힌 세상 (핵심 요약)

## 문제 목표

문장 속 괄호 `()`와 `[]`가 **제대로 열리고 닫혔는지 확인**하는 문제.

---

## 판단 방법

- 여는 괄호 `(` 또는 `[` 가 나오면 **스택에 저장**한다.
- 닫는 괄호 `)` 또는 `]` 가 나오면
  - **최근에 열린 괄호랑 짝이 맞는지 확인**한다.
  - 짝이 안 맞으면 → `no`
- 모든 괄호를 처리한 뒤,
  - 스택이 비어 있으면 → `yes`
  - 무언가 남아 있으면 → `no`

📌 문제 본문에는 직접적으로 “한 줄당 판단”이란 표현은 없지만,  
**“각 줄마다 해당 문자열이 균형을 이루고 있으면 yes, 아니면 no를 출력한다”**는 문장과  
**입출력 예시의 대응 방식**을 통해  
→ **한 줄 단위로 판단하고, 한 줄 단위로 출력**한다는 것을 알 수 있다.

---

## 예시 설명

### 예시 1

```
( [ ] ) → yes
```

- `(` → 저장
- `[` → 저장
- `]` → `[`랑 짝 맞음
- `)` → `(`랑 짝 맞음  
  → 모두 짝이 맞음 → `yes`

### 예시 2

```
( [ ) ] → no
```

- `(` → 저장
- `[` → 저장
- `)` → 최근 열린 `[` 와 짝이 안 맞음 ❌  
  → `no`

---

## 핵심 문장

> **스택에 괄호를 쌓고**, 닫을 때 **올바른 괄호 순서로 닫히는지 확인**하면 된다.
