function solution(n) {
  const ternary = n.toString(3);

  const reversed = ternary.split("").reverse().join("");

  const result = parseInt(reversed, 3);

  return result;
}

// 1단계: 숫자 n을 3진법 문자열로 변환 (예: 45 → "1200")

// 2단계: 3진법 문자열을 뒤집기 위해
// split('')으로 문자 하나하나를 배열로 쪼갠 후 reverse()로 뒤집고,
// join('')으로 다시 문자열로 붙임 → "0021"

// 3단계: 뒤집힌 3진법 문자열을 10진법 숫자로 변환
// parseInt(reversed, 3): "0021"을 3진법으로 해석해서 10진법 정수로 반환 → 7
