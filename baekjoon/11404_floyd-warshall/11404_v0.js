// 최종 답안 풀이

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// n: 도시 개수 (행/열 수)
// m: 버스 정보 개수 (간선 수)

const n = Number(input[0]);
const m = Number(input[1]);

//

// Infinity : 비교용 초기값 됨
// - 처음에는 어떤 값이든 Infinity보다 작으므로 갱신
// - 이후부터는 계속 더 0에 가까운 값만 갱신됨

// 거리 행렬 초기화 (1-indexed)
// dist[i][j]: 도시 i에서 도시 j로 가는 최소 비용
// 처음엔 모두 Infinity로 초기화 (도달 불가 의미)
// 자기 자신에게 가는 비용은 항상 0

// @
// 도시 번호가 1부터 시작하기때문에 랭쓰 1부터 시작 그래서
// 0 1 2 3 4
// 0 1 2 3 4 5
// 나중에 0은 사용하지 않음

// [
//   // 인덱스 0은 사용하지 않음
//   [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity], // dist[0] (무시)

//   // 아래부터 도시 1 ~ 5의 거리 정보
//   [Infinity,    0, Infinity, Infinity, Infinity, Infinity], // dist[1]
//   [Infinity, Infinity,    0, Infinity, Infinity, Infinity], // dist[2]
//   [Infinity, Infinity, Infinity,    0, Infinity, Infinity], // dist[3]
//   [Infinity, Infinity, Infinity, Infinity,    0, Infinity], // dist[4]
//   [Infinity, Infinity, Infinity, Infinity, Infinity,    0], // dist[5]
// ]

// [
//   [∞, ∞, ∞, ∞, ∞, ∞],  // dist[0] ❌ 사용하지 않음
//   [∞, ∞, ∞, ∞, ∞, ∞],  // dist[1]
//   [∞, ∞, ∞, ∞, ∞, ∞],  // dist[2]
//   [∞, ∞, ∞, ∞, ∞, ∞],  // dist[3]
//   [∞, ∞, ∞, ∞, ∞, ∞],  // dist[4]
//   [∞, ∞, ∞, ∞, ∞, ∞]   // dist[5]
// ]

const INF = Infinity;
const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

// [
//   [∞, ∞, ∞, ∞, ∞, ∞],  // dist[0] ❌
//   [∞,  0, ∞, ∞, ∞, ∞],  // dist[1]
//   [∞, ∞,  0, ∞, ∞, ∞],  // dist[2]
//   [∞, ∞, ∞,  0, ∞, ∞],  // dist[3]
//   [∞, ∞, ∞, ∞,  0, ∞],  // dist[4]
//   [∞, ∞, ∞, ∞, ∞,  0]   // dist[5]
// ]

for (let i = 1; i <= n; i++) dist[i][i] = 0;

//

// 버스 정보 정리
// 중복 간선은 최소 비용만 유지
// 버스 정보는 a → b로 가는 비용 c
// 같은 출발-도착 쌍의 버스가 여러 개일 수 있으므로 가장 저렴한 것만 유지

// input[0] → 도시 수 n
// input[1] → 버스 노선 수 m
// input[2] ~ input[2 + m - 1] → m개의 버스 노선 정보

// 도시 수: 5 (n)
// 버스 노선 수: 14 (m)

// input[0] → "5"
// input[1] → "14"
// input[2] → 첫 번째 노선
// ...
// input[15] → 14번째 노선

// for (let i = 2; i < 2 + 14; i++) // 즉, i = 2 to 15

// 총 16

const START_INDEX = 2;
const END_INDEX = START_INDEX + m; // 예시 16

for (let i = START_INDEX; i < END_INDEX; i++) {
  const [a, b, c] = input[i].trim().split(/\s+/).map(Number);
  if (c < dist[a][b]) dist[a][b] = c;
}

// [
//   [∞, ∞, ∞, ∞, ∞, ∞],  // dist[0] (사용 안 함)
//   [∞,  0, 2, 3, 1, 10], // dist[1]
//   [∞, ∞, 0, ∞, 2, ∞],   // dist[2]
//   [∞, 8, ∞, 0, 1, 1],   // dist[3]
//   [∞, ∞, ∞, ∞, 0, 3],   // dist[4]
//   [∞, 7, 4, ∞, ∞, 0]    // dist[5]
// ]

// [a, b, c] 구조 분해 할당
// trim()으로 앞뒤 공백 제거
// split(/\s+/)으로 "1 2 2" → ["1", "2", "2"] 분리

// 그래서 만약에 현재 a b 가 의 거리가 c 보다 작을때
// 새로운 c 값으로 갱신해주는거네,
// 지금 이코드는 거리 입력밧을 구조분해할당해서 배열로 정리해줄뿐만 아니라,
// 최소 값 갱신해주는거네?

// 요약 정리
// input[i] = "1 2 7" 같은 문자열
// .split(/\s+/) → ["1", "2", "7"]
// .map(Number) → [1, 2, 7]
// [a, b, c] = [1, 2, 7] 으로 바로 분해

//

// 플로이드-워셜: k(경유) → i(출발) → j(도착)

// 삼중 포문
// 중간 도시 k를 경유해서 갈 수 있다면, 그 경로가 더 짧은지 확인
// 즉, i → k → j 경로가 기존 i → j보다 짧은지 비교
// 모든 i, j, k 조합을 순회해서 업데이트

// ① 경유지 k 설정
// ② 출발지 i
// i→k 거리 (출발→경유)
// i→k 길 없으면 건너뜀
//  ③ 도착지 j
// i→k→j 경유 거리
// 기존 i→j 거리보다 짧으면
// 갱신

// -

// 1)
// 여기서 0은 버림
// 1, 2, 3, 4, 5 까지 도는데

// 2)
// 모든 i→j 경로에서 1번 도시를 경유하면 더 짧아질까? 검사
for (let k = 1; k <= n; k++) {
  // 출발 도시
  // i → k로 가는 첫 번째 구간 거리를 확인함 → dist[i][k]
  for (let i = 1; i <= n; i++) {
    const dik = dist[i][k];
    // 출발(i)에서 경유(k)까지 거리
    // 이게 Infinity면 갈 수 없는 거니까 continue로 스킵함
    if (dik === INF) continue; // i→k가 불가하면 스킵

    // 도착 도시
    // 지금 경유지를 거쳐서 가는 경로: i → k → j
    // 그 거리: via = dist[i][k] + dist[k][j]
    for (let j = 1; j <= n; j++) {
      const via = dik + dist[k][j];
      // 기존 i → j 거리보다 i → k → j 경로가 더 짧으면 업데이트
      if (via < dist[i][j]) dist[i][j] = via;
    }
  }
}

// 예를 들어 1 → 4 로 가는 거리를 찾고 싶은데,
// 직행으로는 15원이 걸려.
// 근데 1 → 2 (5) + 2 → 4 (3) = 8원이면?
// if (5 + 3 < 15) dist[1][4] = 8;

//

// 출력
// 인덱스 0을 버리고 1부터 시작

// INF인 경우는 도달 불가이므로 0 출력
// 각 도시 i → j까지 최소 비용을 출력
// 출력 형식은 n x n 행렬 형태 (공백 구분)

let out = [];
for (let i = 1; i <= n; i++) {
  let row = [];
  for (let j = 1; j <= n; j++) {
    row.push(dist[i][j] === INF ? 0 : dist[i][j]); // 출력시 인피니트면 0으로 처리
  }
  out.push(row.join(" ")); // row 배열을 공백으로 연결된 문자열로 변환해서 out 배열에 추가 [0, 2, 5, 0] → "0 2 5 0"
}

console.log(out.join("\n"));
