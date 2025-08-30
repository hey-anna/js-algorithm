const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]); // 테스트 케이스 수
let line = 1;

for (let t = 0; t < T; t++) {
  const [N, M] = input[line++].split(" ").map(Number); // 문서 수, 궁금한 문서 위치
  const priorities = input[line++].split(" ").map(Number); // 중요도 리스트

  // 큐를 [index, priority] 형태로 구성
  let queue = priorities.map((priority, idx) => [idx, priority]);
  let count = 0;

  while (queue.length) {
    const current = queue.shift();

    // 중요도가 더 높은 문서가 하나라도 있으면 다시 큐에 넣기
    const hasHigher = queue.some((item) => item[1] > current[1]);

    if (hasHigher) {
      queue.push(current);
    } else {
      count++;
      if (current[0] === M) {
        console.log(count);
        break;
      }
    }
  }
}
