const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const meetings = input.slice(1).map((line) => {
  const [start, end] = line.split(" ").map(Number);
  return { start, end };
});

meetings.sort((a, b) => {
  if (a.end === b.end) return a.start - b.start;
  return a.end - b.end;
});

let count = 0;
let endTime = 0;

for (const meeting of meetings) {
  if (meeting.start >= endTime) {
    count++;
    endTime = meeting.end;
  }
}

console.log(count);
