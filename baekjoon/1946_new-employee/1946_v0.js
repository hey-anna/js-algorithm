// 최종 답안 풀이

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input[0]); // 테스트케이스 수 (몇 번 반복할지)
let idx = 1; // 현재 인덱스 (지원자 수 줄부터 시작)
let result = ""; // 최종 결과를 담는 문자열

// 1. 바깥 for문은 T (테스트케이스 수 ≤ 20) → 많아봐야 20번
// 2. 안쪽 for문은 N (지원자 수 ≤ 100,000) → 데이터 입력용
// 독립적인 for문
// 예를 들어, T=2, N=100,000이면 총 2번 x 100,000번 = 200,000번 실행

// 테스트케이스 수만큼 반복
for (let t = 0; t < T; t++) {
  const N = Number(input[idx]); // 이번 테스트 케이스의 지원자 수
  const applicants = []; // 지원자 정보 저장용 배열 - [서류 등수, 면접 등수] 쌍으로 저장할 배열

  // 지원자 정보 입력 (1~N 줄)
  // 지원자 수만큼 다음 줄에서 (서류 등수, 면접 등수)를 읽어옴
  for (let i = 1; i <= N; i++) {
    const [paper, interview] = input[idx + i].split(" ").map(Number);
    applicants.push([paper, interview]); // [서류 등수, 면접 등수] 형식으로 저장
  }

  // 1. 서류 등수 기준으로 오름차순 정렬
  // 하위 배열 의미 a[0] a[1]
  applicants.sort((a, b) => a[0] - b[0]);

  // 2. 면접 등수 최소값 갱신하며 선발
  // 최소 면접 등수 기준으로 합격자 카운트
  let count = 1; // 선발된 인원 수, 첫 번째는 무조건 뽑힘
  // 서류 등수 1등을 여기에 넣는다, index 0
  let minInterview = applicants[0][1]; // 첫 번째 지원자의 면접 등수를 기준으로 시작

  // 두 번째 지원자부터 확인 시작
  for (let i = 1; i < N; i++) {
    if (applicants[i][1] < minInterview) {
      count++;
      minInterview = applicants[i][1];
    }
  }

  result += count + "\n";
  idx += N + 1; // 다음 테스트 케이스로 이동
}

console.log(result.trim());
