const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const N = input[0]; // 사람의 초기값
const K = input[1]; // 어떤 간격으로 제거 할지 변수를 할당 하고

let queue = [];

// N번까지 배열에 push 해준다.
for (let i = 1; i <= N; i++) {
  queue.push(i);
}

let result = []; // 결과를 담을 빈 배열을 선언하고
let count = 1; // count 초기값을 선언해주고, 한사람씩 확인할때 마다 1씩 더 해준다.

// 모두 제거 될때까지 반복 해준다.
// queue.랭쓰의 길이가 0보다 클때까지 반복 해준다.
// 만약에 K가 3이라면, 카운트3으로 나눠서 0이 되므로,
// 제거된 결과 배열안에 push 해준다.
// 그게 아니면 다시 queue배열 안에 넣어준다.
while (queue.length > 0) {
  const person = queue.shift(); // 맨 앞 사람 꺼내기 선언

  if (count % K === 0) {
    result.push(person); // 꺼내서 조건 성립 하면 result push
  } else {
    queue.push(person); // 그게 아니면 queue에 다시 push
  }
  count++;
}

console.log(`<${result.join(", ")}>`);
