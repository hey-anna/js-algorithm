// 시간 초과 답안

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input); // input을 숫자형으로 변경해주고 사용

const queue = []; // 빈배열 선언해주고

// 입력된 숫자가 6이라면, 6개의 숫자를 배열에 담아주기 위해 for문 돌리기
for (let i = 1; i <= N; i++) {
  queue.push(i);
}

// 카드가 1장 남을때까지 동작 반복하기
while (queue.length > 1) {
  queue.shift(); // 1. 제일 위 카드 버리기
  queue.push(queue.shift()); // 2. 다음 카드 아래로 보내기
}

console.log(queue[0]); // 마지막 카드 출력
