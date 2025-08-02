```js
const numberSet = new Set(); // 1. 전역 선언

const getPermutations = (...) => {
  // 2. 숫자 조합을 만들면서 여기에 저장해줌
  numberSet.add(Number(current));
};

for (let i = 1; i <= numArr.length; i++) {
  getPermutations(numArr, i); // 3. 이 과정에서 numberSet이 채워짐
}

// 4. 이제 완성된 numberSet을 꺼내서 하나씩 isPrime으로 검사
for (const number of numberSet) {
  if (isPrime(number)) count++;
}
```
