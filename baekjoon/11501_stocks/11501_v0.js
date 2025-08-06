// 답안 풀이

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]); // 테스트케이스 개수
let line = 1; // input이 줄(line) 단위 배열이기 때문 변수 명명, 첫번째 줄부터 시작

for (let t = 0; t < T; t++) {
  const N = Number(input[line]); //날 수(며칠치 데이터인지) = 날짜의 수 (며칠인지) = “며칠 동안”
  const prices = input[line + 1].split(" ").map(Number); // 주가 리스트
  line += 2;

  let maxPrice = 0;
  let profit = 0; // 이익 수익

  // 1)
  // 뒤에서부터 순회
  // 뒤에서부터 순회하며 이익을 누적
  // 예) 5 - 1 = 4 3 2 1 0
  // 뒤에서부터 순회하며 이익이 더클때 이익 발생 (누적이익 출력)
  for (let i = N - 1; i >= 0; i--) {
    if (prices[i] > maxPrice) {
      maxPrice = prices[i]; // 뒤에서부터 비교할 최고 주가 , 최고 주가 갱신
    } else {
      profit += maxPrice - prices[i]; // 누적 이익, 이익이 나는 날에만 , 뒤에서 순회하다가 가격이 낮으면 뒷날에 수익이 발생하는것이기때문에 빼주고, 누적 하는거
    }
  }

  console.log(profit);
}
