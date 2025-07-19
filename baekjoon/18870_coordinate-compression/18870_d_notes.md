## JavaScript `Map` 쉽게 이해하기 + `for...in` / `for...of` 비교

### 📌 Map이란?

> `Map`은 **key-value(키-값)** 형태로 데이터를 저장하는 자료구조.  
> 객체 `{}`처럼 보이지만, 더 유연하고 강력한 기능을 제공함.

---

### ✅ Map은 이런 점에서 유리함

| 항목         | `Map`                                    | 객체 `{}`                                         |
| ------------ | ---------------------------------------- | ------------------------------------------------- |
| 키 타입      | **숫자, 문자열, 객체 등 모든 타입 가능** | 문자열 또는 심볼만 가능                           |
| 키 순서      | **삽입 순서 보장**                       | 보장되지 않음 (ES6 이후 보장되는 듯하지만 명확 X) |
| 키 충돌 위험 | 없음                                     | 내장 키(`toString`, `__proto__`) 충돌 가능        |
| 크기 확인    | `.size` 속성 사용                        | `Object.keys(obj).length` 필요                    |
| 반복 방법    | `for...of`, `.forEach()` 사용 쉬움       | `for...in`은 키만 순회                            |

---

### 📍 예시 - 전화번호부

```js
const phoneBook = new Map();

phoneBook.set("나나", "010-1234-5678");
phoneBook.set("하하", "010-5678-1234");

console.log(phoneBook.get("나나")); // 👉 "010-1234-5678"
```

---

### 📍 좌표 압축에서 Map 사용 이유

```js
const coordinateToIndex = new Map();
coordinateToIndex.set(-10, 0);
coordinateToIndex.set(2, 1);
coordinateToIndex.set(4, 2);

console.log(coordinateToIndex.get(2)); // 👉 1
```

- 압축된 인덱스를 숫자 키로 매핑
- 빠르게 값을 조회하고, 자료를 깔끔하게 관리 가능

---

### 🔄 `for...in` vs `for...of` 차이점

#### ❗ 객체 `{}`와 `for...in`

```js
const obj = {};
obj[-10] = 0;
obj[2] = 1;

for (let key in obj) {
  console.log(typeof key); // 항상 string
}
```

- 숫자로 넣어도 key는 **문자열로 강제 변환됨**
- 키 순서가 불안정하거나, 문자열 키 충돌 가능성 있음

---

#### ✅ Map과 `for...of`

```js
const coordinateToIndex = new Map();
coordinateToIndex.set(-10, 0);
coordinateToIndex.set(2, 1);

for (let [key, value] of coordinateToIndex) {
  console.log(typeof key); // number
  console.log(key, value);
}
```

- 키 타입이 **원래 타입 그대로 유지됨**
- `[key, value]` 구조로 깔끔하게 순회 가능

---

### ✅ 결론 요약

> **`Map`은 숫자·객체 등 모든 타입을 키로 쓸 수 있고, 안정성/성능/순회 편의성 면에서 객체보다 더 나음.**  
> 특히 **좌표 압축처럼 "숫자 → 값" 형태 매핑이 중요한 문제**에서는 `Map`을 쓰는 게 훨씬 좋음!
