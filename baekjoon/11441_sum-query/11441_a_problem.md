# BOJ 11441 - 합 구하기

## 문제

N개의 수 A₁, A₂, ..., Aₙ이 주어진다.
이때, i번째부터 j번째까지의 합 Aᵢ + ... + Aⱼ를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 수의 개수 N이 주어진다. (1 ≤ N ≤ 100,000) 둘째 줄에는 A₁, A₂, ..., Aₙ이 주어진다. (−1,000 ≤ Aᵢ ≤ 1,000) 셋째 줄에는 구간의 개수 M이 주어진다. (1 ≤ M ≤ 100,000) 넷째 줄부터 M개의 줄에는 각각의 구간을 나타내는 i와 j가 주어진다. (1 ≤ i ≤ j ≤ N)

## 출력

총 M개의 줄에 각각의 구간에 대한 합을 출력한다.

## 예제 입력 1

5
10 20 30 40 50
5
1 3
2 4
3 5
1 5
4 4

## 예제 출력 1

60
90
120
150
40

## 예제 입력 2

3
1 0 -1
6
1 1
2 2
3 3
1 2
2 3
1 3

## 예제 출력 2

1
0
-1
1
-1
0

## 출처

문제 만든 사람: baekjoon
