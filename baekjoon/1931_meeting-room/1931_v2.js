const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 회의 수
const N = +input[0]; // 리딩용

// 각 회의의 시작, 끝 시간 배열로 저장
const meetings = input.slice(1).map((line) => {
  const [start, end] = line.split(" ").map(Number);
  return { start, end }; // 객체 형태로 저장
});

// 끝나는 시간 기준 오름차순 정렬
// 끝나는 시간이 같다면, 시작 시간이 빠른 순으로 정렬
meetings.sort((a, b) => {
  if (a.end === b.end) return a.start - b.start;
  return a.end - b.end;
});

let count = 0; // 선택된 회의 수
let endTime = 0; // 마지막으로 선택된 회의의 끝나는 시간

// 선택될 때마다 `count` 증가, `endTime` 업데이트
// if 이전 회의 이후에 시작하는 회의만 선택
for (const meeting of meetings) {
  if (meeting.start >= endTime) {
    count++;
    endTime = meeting.end; // 다음 회의는 이 시간 이후부터 가능
  }
}

console.log(count);
