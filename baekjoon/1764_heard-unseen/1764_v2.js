// 정답 코드 리팩토링

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n] = input[0].split(" ").map(Number); // m은 사용 안 하므로 생략
const listen = new Set(input.slice(1, 1 + n)); // 듣도 못한 사람들 → Set
const see = input.slice(1 + n); // 보도 못한 사람들 → 배열

const result = see.filter((name) => listen.has(name)).sort(); // 교집합 + 정렬

console.log(result.length);
result.forEach((name) => console.log(name));

// 궁금할 수 있는 리팩토링 포인트
// Q: m은 왜 안 받아도 되나요?
// 입력 구조 이해에만 쓰이고, 실질적인 로직에서는 필요 없기 때문

// Q: listen을 Set으로 만든 이유는요?
// 중복 제거 + .has()로 빠른 비교 가능 (O(1) 탐색)

// Q: 성능도 괜찮나요?
// 최적 조합입니다:

// Set: O(1) 탐색

// filter: O(m)

// 전체 시간 복잡도: O(n + m + m log m)

// 최종적으로 딱 한 줄 요약
// 듣도 못한 사람을 Set에 넣고, 보도 못한 사람 중 겹치는 이름만 정렬해서 출력한다!
