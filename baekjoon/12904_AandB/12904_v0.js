const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const S = input[0]; // 목표 : 시작 문자열
let T = input[1]; // 역연산으로 계속 **줄여갈 대상**

// T가 S보다 길때 만 줄여 나감
// 길이가 같아지면 더 줄이면 S보다 짧아져서 “같아질 가능성”이 사라짐 → 루프
// endsWith : 문자열이 특정 문자(또는 문자열)로 끝나는지 확인하는 JavaScript 메서드

// "ABCDE".slice(0, -1) // "ABCD"
// "ABCDE".slice(0, -2) // "ABC"
// "ABCDE".slice(0, -3) // "AB"

// 외우는 팁
// slice(0, -1) → 맨 뒤 1개 잘라내기
// slice(0, -n) → 맨 뒤 n개 잘라내기

// T = T.slice(0, -1)            // 마지막 문자 제거
//        .split("")              // 문자열 → 문자 배열
//        .reverse()              // 배열 뒤집기
//        .join("");              // 배열 → 문자열로 합치기

while (T.length > S.length) {
  if (T.endsWith("A")) {
    T = T.slice(0, -1); // A 제거
  } else if (T.endsWith("B")) {
    T = T.slice(0, -1).split("").reverse().join(""); // B 제거 후 뒤집기
  }
}

console.log(T === S ? 1 : 0);
