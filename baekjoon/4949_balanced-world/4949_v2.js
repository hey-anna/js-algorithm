// 제출한 정답 코드 하나하나 뜯기
// stack char line last
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 입력의 마지막 줄 '.'은 검사 대상이 아니므로 제거
input.pop();

const result = input.map((line) => {
  const stack = []; // 괄호 저장할 스텍

  for (let char of line) {
    // const last = stack.pop(); // 스택에서 마지막 괄호를 꺼냄 - pop()은 조건 안에서만 - pop()은 닫는 괄호일 때만 실행됨
    if (char === "(" || char === "[") {
      stack.push(char); // 여는 괄호가 있으면 stack에 담아준다.
    } else if (char === ")") {
      if (stack.pop() !== "(") return "no"; // no 닫는 소괄호면, 직전에 열린 괄호가 "(" 이어야 함, 짝이 안맞는 경우( [ ) ]
    } else if (char === "]") {
      if (stack.pop() !== "[") return "no"; // no 닫는 대괄호면, 직전에 열린 괄호가 "[" 이어야 함, 짝이 안맞는 경우 ( [ ) ]
    }
  }

  return stack.length === 0 ? "yes" : "no"; // no 열려만 있고 안닫 힌 경우 (((, [(
});

console.log(result.join("\n"));
