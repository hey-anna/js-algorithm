# 입력

2 ← 테스트케이스 수 (T)
5 ← 첫 번째 테스트케이스: 지원자 수 N
3 2 ← 1번 지원자
1 4
4 1
2 3
5 5
7 ← 두 번째 테스트케이스: 지원자 수 N
3 6
7 3
4 2
1 4
5 7
2 5
6 1

# 도식화

예시: (서류, 면접)

입력: (3,2) (1,4) (4,1) (2,3) (5,5)
정렬: (1,4) (2,3) (3,2) (4,1) (5,5)

처리:

- (1,4): 선발, minInterview = 4
- (2,3): 3 < 4 → 선발, min = 3
- (3,2): 2 < 3 → 선발, min = 2
- (4,1): 1 < 2 → 선발, min = 1
- (5,5): 5 > 1 → 탈락

결과: 4명 선발
