const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const totalNumbers = +input[0]; // A의 길이(리딩용)
const searchTargetList = input[1].split(" ").map(Number); // A 배열
const totalQueries = +input[2]; // B의 길이(리딩용)
const queries = input[3].split(" ").map(Number); // B 배열

// 이진 탐색을 위해 정렬
searchTargetList.sort((a, b) => a - b);

const result = queries.map((target) => {
  let left = 0;
  let right = searchTargetList.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = searchTargetList[mid];

    if (target === midValue) return 1;
    if (target < midValue) right = mid - 1;
    else left = mid + 1;
  }

  return 0;
});

console.log(result.join("\n"));
