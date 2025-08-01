# BOJ 1654 - 랜선 자르기 ✂️ - 문제 요약

- **목표**: 가지고 있는 K개의 랜선을 잘라서 **길이가 동일한 N개의 랜선**을 만들되,  
  만들 수 있는 **랜선의 최대 길이**를 구하라.

- **제약 조건**:

  - K: 이미 가지고 있는 랜선 개수 (1 ≤ K ≤ 10,000)
  - N: 만들어야 하는 랜선 개수 (1 ≤ N ≤ 1,000,000)
  - 각 랜선의 길이는 2³¹ - 1 이하의 자연수

- **문제 포인트**:

  - 자를 수 있는 길이는 1부터 가장 긴 랜선의 길이까지
  - 특정 길이 L로 잘랐을 때 만들어지는 개수가 N개 이상인지 체크
  - 이분 탐색으로 가능한 최대 길이 L을 찾는 **매개 변수 탐색** 문제

- **입력 예시**:

  ```
  4 11
  802
  743
  457
  539
  ```

- **출력 예시**:
  ```
  200
  ```

🧩 핵심 전략:  
가능한 길이 범위 [1, max 랜선 길이]에서 이분 탐색 →  
중간값 mid로 잘라서 랜선 개수 세기 →  
N개 이상이면 길이 늘려보기, 아니면 줄이기
