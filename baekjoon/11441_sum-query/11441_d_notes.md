# 문제 핵심 code

- 그리고 prefixSum은 0부터 시작해서
- 처음엔 [0]만 있고, i + 1 위치에 하나씩 채워나가는 구조

### 누적합 for문이 동작하는 방식

```js
입력:
numbers = [10, 20, 30, 40, 50]
           0   1   2   3   4    ← 인덱스 (총 5개)
```

```js
초기: prefixSum = [0];

for (let i = 0; i < N; i++) {
  prefixSum[i + 1] = prefixSum[i] + numbers[i];
}
```

반복 과정:

| i   | 계산식                                   | 결과 (prefixSum 배열)     |
| --- | ---------------------------------------- | ------------------------- |
| 0   | prefixSum[1] = prefixSum[0] + numbers[0] | [0, 10]                   |
| 1   | prefixSum[2] = prefixSum[1] + numbers[1] | [0, 10, 30]               |
| 2   | prefixSum[3] = prefixSum[2] + numbers[2] | [0, 10, 30, 60]           |
| 3   | prefixSum[4] = prefixSum[3] + numbers[3] | [0, 10, 30, 60, 100]      |
| 4   | prefixSum[5] = prefixSum[4] + numbers[4] | [0, 10, 30, 60, 100, 150] |

> 메모리 상에서 이해

- prefixSum 배열은 함수 안이 아니라 바깥에서 선언된 변수이기 때문에,
- for문 돌면서 prefixSum[i + 1] 위치가 생기고 값이 쌓인다
- 그리고 반복문이 끝난 뒤에도 그 배열은 계속 남아 있음 → 나중에 질의 계산에서 사용 가능!

✅ 최종 결과:

```js
prefixSum = [0, 10, 30, 60, 100, 150];
```

### 💡 왜 `prefixSum[i + 1]`에 저장할까?

> 누적합을 `prefixSum[1]`부터 시작하면  
> 나중에 `i`번째부터 `j`번째까지의 합을 구할 때  
> **`prefixSum[j] - prefixSum[i - 1]`** 이라는 공식이 성립되기 때문!

예시:

- `numbers = [10, 20, 30, 40, 50]`
- `prefixSum = [0, 10, 30, 60, 100, 150]`

만약 질의가 [2, 4]라면:

```js
prefixSum[4] - prefixSum[1]
= 100 - 10 = 90
= A[2] + A[3] + A[4]
```

- `prefixSum[4]`는 A[1] + A[2] + A[3] + A[4]
- `prefixSum[1]`은 A[1]까지의 누적합
- 차이값이 곧 A[2] ~ A[4] 범위의 합이 된다!

---

> ✅ 요약:  
> `prefixSum[0]`을 0으로 시작하고  
> `prefixSum[i + 1]`에 누적합을 저장하는 이유는  
> 나중에 질의 구간 [i, j]를 **단 한 줄의 계산**으로 빠르게 처리하기 위해서다.
