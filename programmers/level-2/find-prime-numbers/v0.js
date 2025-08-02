function solution(numbers) {
  const numArr = numbers.split(""); // 각 숫자를 배열로 변환
  const numberSet = new Set(); // 중복 제거를 위한 Set

  // 모든 자리수 조합을 만들기 위한 순열 함수
  // arr: 사용할 숫자 배열
  // selectNum: 몇 개를 선택할 건지
  // current: 현재까지 이어 붙인 숫자 문자열

  // Set()으로 처리되는 즉식 담아주고 더이상 처리할게 없으면 0 이면 문자열을 숫자형으로 저장하는거?
  // Set()으로 조합이 완성될 때마다 즉시 담아주고,
  // 더 이상 선택할 숫자가 없을 때 (selectNum === 0),
  // 지금까지 만든 문자열(current)을 숫자형으로 변환해서 Set에 저장하는 거예요.

  // **조합(완성된 숫자)**은 selectNum === 0이 되는 재귀의 가장 깊은 단계에서 만들어지고,
  // 그 순간에 Set.add()로 저장됩니다.

  // 즉, for 문을 끝내고 조합을 저장하는 게 아니라,
  // selectNum - 1로 내려간 재귀가 호출된 그 안쪽에서
  // selectNum === 0이 되면 그때 저장해요.

  // 흐름 정리
  // for (...) 안에서 하나를 선택하고 (picked)
  // 그걸 current에 누적해서 재귀 호출
  // → 이때 selectNum이 계속 줄어듦 (-1)
  // → 드디어 selectNum === 0이 되는 순간!
  // ✅ 그 순간이 조합이 완성된 시점이자 Set에 저장되는 시점

  // -1이 반복되다가 selectNum이 0이 되는 그 재귀 호출 안에서만
  // 조합이 완성되어 Set에 저장됩니다.

  const getPermutations = (arr, selectNum, current = "") => {
    // 3)
    if (selectNum === 0) {
      numberSet.add(Number(current)); // 문자열을 숫자로 변환하여 Set에 저장 - ✅ 조합 완성: 여기서 Set에 저장
      return;
    }

    // 2)
    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr]; // 현재 배열 복사
      const picked = rest.splice(i, 1); // i번째 요소를 선택하고 배열에서 제거
      getPermutations(rest, selectNum - 1, current + picked); // 선택한 걸 이어붙이며 재귀 호출 -  🔁 조합을 만드는 과정
      // 아 set에서 반복제거하면 개수가 나오는데 그 개수가 첨에 3개니간 조합하고 2개조합하고 1개 조합 커렌트에 조합한값을 넣어주는건가
    }
  };

  // 1)
  // 여기서 i는 조합(순열)으로 만들 숫자의 길이
  // i = 1이면 → 한 자리 숫자 조합
  // i = 2면 → 두 자리 숫자 조합
  // i = 3면 → 세 자리 숫자 조합
  // 1자리부터 전체 자리수까지 조합 생성

  for (let i = 1; i <= numArr.length; i++) {
    getPermutations(numArr, i); // "전체 숫자 중 i개를 골라서 모든 순열을 만들어라"
    // getPermutations(["1", "2", "3"], i);
  }

  // 소수 판별 함수
  const isPrime = (num) => {
    if (num < 2) return false; // 0 1 은 소수가 안되기 때문에 미리 false

    // 숫자 2부터 시작 숫자 제곱근만큼 반복 해준다임?

    // 36의 제곱근 6이니깐 2 ~ 6까지 에서 검열하는거고,
    // 그중에서 0으로 떨어지는거는 소수가 아니라서 false임?
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 소수 개수 세기
  // 중복을 제거한 숫자를 number 변수에 담아서
  // 만약에 소수이면 카운트 해준다.
  let count = 0;
  for (const number of numberSet) {
    if (isPrime(number)) count++;
  }

  return count;
}

console.log(solution("17")); // ➜ 3 (7, 17, 71)
console.log(solution("011")); // ➜ 2 (11, 101)

// Set에 조합된 모든 숫자
//        ↓
//    하나씩 꺼내서
//        ↓
//    소수인지 검사 (isPrime)
//        ↓
//    소수라면 count++
