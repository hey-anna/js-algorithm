// 정답 풀이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 첫 줄에서 N, M 추출
const [n, m] = input[0].split(" ").map(Number); // m 입력을 어떻게 나눠야 할지 "구조"를 이해하려면 필요함

// 듣도 못한 사람 명단
const listen = new Set(input.slice(1, 1 + n));

// 보도 못한 사람 명단
const see = input.slice(1 + n);

// 듣보잡: 듣도 보도 못한 사람 (교집합)
// see 배열에서 listen에 포함된 사람만 필터링 (교집합)
const result = see.filter((name) => listen.has(name)).sort();
// Set.has()는 중복 없이 빠르게 포함 여부를 확인하는 기능이니까,
// Set으로 만든 listen을 기준으로
// see 배열을 .filter() 돌릴 때
// → listen.has(name)이 true면 필터 통과시켜주는 거

// 결과 출력
console.log(result.length); // 교집합에 해당하는 사람 수
result.forEach((name) => console.log(name)); // 이름을 한 줄씩 출력

//

// 문제 해석 풀이 참고
// 3 4              ← input[0] : 듣도 못한 사람 수 N = 3, 보도 못한 사람 수 M = 4
// ohhenrie         ← input[1] : 듣도 못한 사람 1
// charlie          ← input[2] : 듣도 못한 사람 2
// baesangwook      ← input[3] : 듣도 못한 사람 3
// obama            ← input[4] : 보도 못한 사람 1
// baesangwook      ← input[5] : 보도 못한 사람 2
// ohhenrie         ← input[6] : 보도 못한 사람 3
// clinton          ← input[7] : 보도 못한 사람 4

// n = 3 → 듣도 못한 사람은 input[1] ~ input[3] 까지
// m = 4 → 보도 못한 사람은 input[4] ~ input[7] 까지
// 즉, 전체 입력 줄 수는 1 + n + m 줄임
// → 그걸 계산해서 정확히 어디까지 입력이 들어오는지를 판단할 수 있음

// 첫 줄에서 듣도 못한 사람 수 N, 보도 못한 사람 수 M을 숫자로 추출
// input[0] = "3 4" → ["3", "4"] → [3, 4]

// 듣도 못한 사람 명단만 잘라서 Set에 저장
// 첫 줄(input[0])은 힌트니까 제외하고, input[1]부터 시작
// slice(1, 1 + n) → 인덱스 1부터 시작해서 (1 + n) 전까지 잘라옴
// 즉, input[1], input[2], ..., input[n] 까지 자름 → 총 n명
// Set을 쓰는 이유: 중복 없이 저장 + .has()로 빠르게 포함 여부 확인

// 보도 못한 사람 명단은 그 다음 줄부터 끝까지
// 듣도 못한 사람 n명을 자르고 난 뒤니까 → 시작 인덱스는 1 + n

// 보도 못한 사람 명단은 그 다음 줄부터 끝까지
// 듣도 못한 사람 n명을 자르고 난 뒤니까 → 시작 인덱스는 1 + n

const arr = ["a", "b", "c", "d", "e"];

// arr.slice(start, end)
arr.slice(1, 4); // ["b", "c", "d"]
// 인덱스 1부터 4 전까지 → 인덱스 1, 2, 3

// arr.slice(start)
arr.slice(2); // ["c", "d", "e"]
// 인덱스 2부터 끝까지

// 핵심 흐름 다시 요약
// input[0]: 힌트줄 (N, M)
// input[1] ~ input[1 + n - 1]: 듣도 못한 사람들
// input[1 + n] ~ 끝까지: 보도 못한 사람들
// Set: 중복 제거 + 빠른 탐색용
// filter + has: 교집합 찾기
// sort: 사전순 정렬

const result2 = input
  .slice(1 + n) // 보도 못한 사람 목록
  .filter((name) => new Set(input.slice(1, 1 + n)).has(name)) // 즉석에서 Set 생성 & 비교
  .sort();
