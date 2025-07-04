// 제출한 정답 코드 하나하나 뜯기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const n = Number(input[0]); // 첫번째 인덱스 막대기개수

// 첫번째 제외 인풋을 자른 후, 숫자열로 변환 후 오른쪽에서 바라본다해서 배열을 거꾸로 정렬해준다.
sticks = input.slice(1).map(Number).reverse(); // 오른쪽에서 왼쪽 순서로 보기 위해 reverse

// 맨 오른쪽 막대기는 무조건 보임
// 첫번째 막대는 무조건 보이기 때문에 1로 시작
// 첫번째 막대기 높이를 비교 기준으로 설정하고,
// 이후 막대기들과 비교해 더 큰 값이 나오면 그 값을 새로운 기준으로 갱신한다.
let count = 1;
let maxHeight = sticks[0];

// 배열의 길이가 i보다 작을때 까지 반복된다.
// 만약에 현재 막대기보다 높이가 큰 막대기가 나오면
// 카운트에 더해주고, 해당 막대기 높이를 maxHeight에 넣어준다.
for (let i = 1; i < sticks.length; i++) {
  if (sticks[i] > maxHeight) {
    count++;
    maxHeight = sticks[i];
  }
}

console.log(count);
