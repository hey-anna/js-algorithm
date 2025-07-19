// 최종 답안 풀이

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 1. 입력 받기
const N = +input[0]; // 리딩용
const X = input[1].split(" ").map(Number); // 원본 좌표 배열

// 2. 중복 제거하고 정렬해서 좌표 압축 기준 만들기
const sortedUnique = [...new Set(X)].sort((a, b) => a - b);
// => Set으로 중복 제거, 오름차순 정렬

// 3. 압축값(인덱스) 매핑 객체 생성
const coordinateMap = new Map(); // ex) { -10 => 0, -9 => 1, 2 => 2, 4 => 3 }

// 3 - 1 정렬된 숫자들을 가져와 값, 인덱스 를 coordinateMap에 담아준다.
sortedUnique.forEach((value, index) => {
  coordinateMap.set(value, index);
});

// 4. 원본 배열 X의 각 원소를 압축한 => 인덱스로 변환
const result = X.map((x) => coordinateMap.get(x));

// 5. 출력
console.log(result.join(" "));
