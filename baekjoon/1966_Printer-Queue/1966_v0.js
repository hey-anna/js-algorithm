const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]); // 테스트 케이스 수
// const T = Number(input[0]); // 정수/실수 모두 처리 가능 (엄격함)
// const T = +input[0]; // 가장 짧은 표현, 실무에서 자주 사용
let line = 1;

for (let t = 0; t < T; t++) {
  // 문서의 개수 N과, 궁금한 문서 위치 M (0부터 시작)
  // 입력 형식 통일성 유지: 테스트 케이스 구조를 통일시키기 위해
  // 예: 4 2 → "문서 4개 중, 2번 인덱스가 궁금해"
  // 그래서 N은 입력 파싱용으로만 사용되고, 이후 로직에는 영향 없음
  const [N, M] = input[line++].split(" ").map(Number); // 문서 수, 궁금한 문서 위치
  // 문서들의 중요도를 배열로 저장
  const priorities = input[line++].split(" ").map(Number); // 중요도 리스트

  // 큐를 [index, priority] 형태로 구성
  // 문서를 [문서 번호, 중요도] 쌍으로 구성한 큐
  let queue = priorities.map((priority, idx) => [idx, priority]);
  // 출력 순서를 세는 변수 (몇 번째로 출력됐는지)
  let count = 0;

  // 큐가 빌 때까지 반복
  // queue.length가 0이 아닐 동안 반복해라.
  while (queue.length) {
    // 큐에서 맨 앞 문서 꺼냄
    const current = queue.shift();

    // 큐 안에 현재 문서보다 높은 중요도가 하나라도 있는지 검사
    // 중요도가 더 높은 문서가 하나라도 있으면 다시 큐에 넣기
    // .some()은 조건을 만족하는 요소가 하나라도 있으면 true 반환
    const hasHigher = queue.some((item) => item[1] > current[1]);

    if (hasHigher) {
      queue.push(current); // 중요도 높은 문서가 뒤에 있다면 다시 큐 뒤로 보냄
    }
    // “중요도가 높은 문서가 더 이상 없다면,
    // 순차적으로 인쇄되다가 내가 궁금한 문서가 인쇄되는 순간 함수(반복문)가 종료된다.”
    else {
      count++; // 인쇄처리 되다가
      // 내가 찾는 문서 나오면 스톱
      if (current[0] === M) {
        console.log(count); // 우리가 찾던 문서이면 출력 후 종료
        break;
      }
    }
  }
}

// 그니깐 중요한 문서 순서대로 정리해주고, 정리 다되면 인쇄시작하는데, 내가 찾는 문서면 스톱

// ✅ 다시 정리하자면:

// 📌 중요한 문서부터 정리(=출력 준비)
// → 그 순서에 따라 하나씩 인쇄
// → 그리고 내가 찾는 문서가 인쇄되는 순간 멈춘다 (정답 출력)
