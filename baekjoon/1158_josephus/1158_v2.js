// index-splice

function josephus(n, k) {
  const people = Array.from({ length: n }, (_, i) => i + 1); // [1, 2, ..., n]
  const result = [];

  let index = 0; // 현재 시작 인덱스

  while (people.length > 0) {
    index = (index + k - 1) % people.length; // K번째 사람 찾기
    result.push(people.splice(index, 1)[0]); // 제거하고 결과에 넣기
  }

  return `<${result.join(", ")}>`;
}

// const input = "7 3";
// const [n, k] = input.split(" ").map(Number);
// console.log(josephus(n, k)); // <3, 6, 2, 7, 5, 1, 4>
