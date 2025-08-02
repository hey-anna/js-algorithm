function solution(numbers) {
  const numArr = numbers.split(""); // 1. 입력 문자열을 문자 배열로 변환
  const numberSet = new Set(); // 2. 중복 제거용 Set

  // 3. 순열 생성 함수
  const getPermutations = (arr, selectNum, current = "") => {
    if (selectNum === 0) {
      numberSet.add(Number(current)); // ➤ 완성된 숫자를 Set에 추가
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr]; // ➤ 배열 복사
      const picked = rest.splice(i, 1); // ➤ i번째 요소 선택 및 제거
      getPermutations(rest, selectNum - 1, current + picked); // ➤ 다음 단계 재귀 호출
    }
  };

  // 4. 1자리부터 전체 길이까지 모든 순열 생성
  for (let i = 1; i <= numArr.length; i++) {
    getPermutations(numArr, i);
  }

  // 5. 소수 판별 함수
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 6. Set에서 소수 개수 세기
  let count = 0;
  for (const number of numberSet) {
    if (isPrime(number)) {
      count++;
    }
  }

  // 7. 결과 반환
  return count;
}
