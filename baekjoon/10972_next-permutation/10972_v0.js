const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = input[1].split(" ").map(Number);

// 1. 뒤에서부터 i-1 < i 를 만족하는 i 찾기
let i = N - 1; // 인덱스 맞추기 위함
while (i > 0 && arr[i - 1] >= arr[i]) {
  i--;
}

// i = 3 → arr[2] = 3, arr[3] = 4 → 3 < 4 → ✅ 여기서 i 멈춤
// 기준점은 arr[i - 1] = arr[2] = 3

// i > 0 → 인덱스가 배열 범위 내에 있는지 체크 (0보다 커야 i - 1이 유효함)
// arr[i - 1] >= arr[i] → 앞에 숫자가 크거나 같으면 내림차순이다 → 계속 줄인다

// arr[i - 1] >= arr[i]
// → 즉, 앞 숫자가 크거나 같으면
// → "내림차순 흐름이다 → i를 줄인다"

// arr = [1, 2, 3, 4];
// N = 4;
// 인덱스:   0  1  2  3

// i - 1 은 2
// arr[i] 이거는 3이면 1234배열에서는 0123 이라서 4이고 3보다 4가 크므로 멈춤

// 2. 마지막 순열이라면
if (i === 0) {
  console.log(-1);
  return;
}

// i === 0 이므로, 조건 성립 → -1 출력
// i는 뒤에서부터 출발해서
// 처음으로 arr[i - 1] < arr[i]가 되는 곳을 찾는 기준점
// 근데 그런 곳이 없다면 → i는 0까지 내려감

// 입력: 4 3 2 1
// 내림차순이기 때문에
// → 기준점 없음 → i = 0까지 감소
// → 다음 순열 없음 → -1 출력

// 3. i-1보다 큰 값 중 가장 끝쪽(j)을 찾아 swap
let j = N - 1;
while (arr[i - 1] >= arr[j]) {
  j--;
}

// 기준점은 arr[i - 1] = arr[2] = 3

// j = 3 → arr[3] = 4
// → 비교: 3 >= 4 ❌ (조건 불충족) → while 멈춤!
// → j-- 안 함!!

// 🔔 여기서 포인트!!

// 조건이 arr[i - 1] >= arr[j]예요
// → "기준점보다 크지 않은 값은 건너뛴다"
// → 그런데 지금은 4 > 3이므로 크잖아!
// → 그러니 조건이 깨졌고, j 찾았다! 멈춘 거예요

// 첫번째 while문에서 기준점을 찾고, 기준점을 찾으면 기준점보다 큰값을 찾아서 교체해준다는건가?
// 기준점보다 큰 값 중 가장 뒤에 있는 값 arr[j]를 찾아서
// → swap(교환) 해주기

// 4. swap(arr[i - 1], arr[j])
[arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

// [arr[2], arr[3]] = [arr[3], arr[2]];
// → 즉: [3, 4] = [4, 3]
// arr = [1, 2, 4, 3] ✅

// 기준점(i - 1)에 있는 값과,
// 뒤에서 찾은 그보다 큰 값(j)을
// 서로 교환(swap) 하기 위한 코드입니다.

// arr = [1, 2, 3, 4]
// i = 3
// j = 3
// // 기준점: arr[2] = 3, arr[3] = 4

// [arr[2], arr[3]] = [arr[3], arr[2]];
// // → 결과: arr = [1, 2, 4, 3]

// 구조 분해 할당

// 5. i부터 끝까지 오름차순 정렬
// 출력용
const left = arr.slice(0, i); // → [1, 2, 4]
const right = arr.slice(i).sort((a, b) => a - b); // [3] → 정렬해도 그대로
const result = left.concat(right); // → [1, 2, 4, 3] // concat은 두 배열을 이어 붙이는 메서드

// 정렬 필요한 이유
// arr = [1, 3, 5, 4, 2]
// → swap 후: [1, 4, 5, 3, 2]
// → i = 2
// → slice(i) = [5, 3, 2]
// → sort → [2, 3, 5]
// → result = [1, 4, 2, 3, 5]

console.log(result.join(" "));

// 다른 방법 출력용
// const sorted = arr.splice(i).sort((a, b) => a - b);
// arr.push(...sorted);
// console.log(arr.join(" "));
