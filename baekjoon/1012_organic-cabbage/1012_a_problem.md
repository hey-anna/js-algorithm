# BOJ 1012 - 유기농 배추 - 문제

🔗 [문제 링크 바로가기](https://www.acmicpc.net/problem/1012)

## 문제 설명

차세대 영농법인 **유기농 배추**를 재배하고 있다. 배추를 해충으로부터 보호하기 위해 배추들 사이에 **배추흰지렁이**를 배치하려고 한다. 이 지렁이는 인접한 배추들이 직접 이어져 있는 경우 그 배추들도 함께 보호할 수 있다.

즉, 배추들이 상하좌우로 연결되어 있다면 하나의 배추흰지렁이가 커버 가능하다.

예를 들어 다음과 같이 배추들이 배치되어 있을 경우 총 5마리의 배추흰지렁이가 필요하다:

```
1 1 0 0 0 0 0 0 0 0
0 1 0 0 0 0 0 0 0 0
0 0 0 0 1 0 0 0 0 0
0 0 0 0 1 0 0 0 0 0
0 0 1 1 0 0 0 1 1 1
0 0 0 0 1 0 0 1 1 1
```

## 입력

- 테스트 케이스 T (1 ≤ T ≤ 50)
- 각 테스트 케이스마다:
  - M, N, K (1 ≤ M, N ≤ 50, 1 ≤ K ≤ 2500)
  - 배추의 위치 K개: (x, y) — 0 ≤ x < M, 0 ≤ y < N
  - 두 배추의 위치가 같은 경우는 없음

## 출력

각 테스트 케이스에 대해 필요한 **최소의 배추흰지렁이 마리 수** 출력

---

## 예제 입력 1

```
2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
5 5
```

## 예제 출력 1

```
5
1
```

---

## 예제 입력 2

```
1
5 3 6
0 2
1 2
2 2
3 2
4 2
4 0
```

## 예제 출력 2

```
2
```
