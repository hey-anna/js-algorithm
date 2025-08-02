function solution(numbers) {
  const numArr = numbers.split(""); // 각 숫자를 배열로 변환
  const numberSet = new Set(); // 중복 제거를 위한 Set

  const getPermutations = (arr, selectNum, current = "") => {
    if (selectNum === 0) {
      numberSet.add(Number(current)); // 문자열을 숫자로 변환하여 Set에 저장
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr];
      const picked = rest.splice(i, 1);
      getPermutations(rest, selectNum - 1, current + picked);
    }
  };

  for (let i = 1; i <= numArr.length; i++) {
    getPermutations(numArr, i);
  }

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let count = 0;
  for (const number of numberSet) {
    if (isPrime(number)) count++;
  }

  return count;
}

console.log(solution("17")); // ➜ 3 (7, 17, 71)
console.log(solution("011")); // ➜ 2 (11, 101)
