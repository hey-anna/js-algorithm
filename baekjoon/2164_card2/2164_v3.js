// 제출한 정답 코드 하나하나 뜯기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

const queue = Array(N);
for (let i = 0; i < N; i++) {
  queue[i] = i + 1; // queue를 [1, 2, 3, ..., N] 형태로 초기화
}

let head = 0; // 큐의 맨 앞을 가리키는 포인터
let tail = N; // 큐의 맨 뒤 다음 위치 (새로운 카드가 들어갈 자리)

// 카드가 한 장 남을 때까지 반복
while (tail - head > 1) {
  head++; // 맨 앞 카드 버리기 (실제로 제거하지 않고 무시하는 방식)

  // 다음 카드(queue[head])를 꺼내서 queue[tail]에 넣음 = 맨 뒤로 보내기
  // 이 한 줄은 다음 두 동작이 동시에 일어남:
  // 1. queue[head++] → 현재 head 위치의 값을 꺼내고 head 1 증가
  // 2. queue[tail++] = ... → 그 값을 tail 위치에 넣고 tail 1 증가
  queue[tail++] = queue[head++];
}

// 마지막 남은 카드 출력
console.log(queue[head]);
