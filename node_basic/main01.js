// 다른 모듈에 존재하는 함수를 사용하려면
// 모듈을 가져와야 하는데 이걸 모듈을 로드(load)한다라고 한다.

//math tools에 add 함수 로드하기
let m = require("./math-tools.js");

// console.log(m.add(1, 2));
// 위와 같은 방법이 하나의 모듈에서 다른모듈을 사용하는 방법!
// 에러발생시 exports 여부 확인
// console.log(m.pi);
// console.log(m.author);
// console.log(m.test.date);
// console.log(m.test.types);

console.log(m.multiply(5, 3));
console.log(m.PI);
console.log(m.add2(1, 2));
console.log(m.divide(1, 2));
console.log(m.subtract(1, 2));

//모듈은 1.내가 직접만든 모듈과
//2. 이미 만들어져 있는 모듈로 나눌수 있고,

//이미 만들어져 있는 모듈은
// 코어 모듈과 서드파티 모듈로 나뉘어 져있다.
//코어모듈은 노드라는 실행프로그램안에 포함되어 있는 모듈을 의미한다.
// 이모듈은 노드개발자들이 필요한기능들을 미리 넣어둔 모듈을 의미함(내장 함수와 비슷함)
//서드파티 모듈은 인터넷에 공개저장소에 제공하는 모듈임
//제3자가 만든 모듈이라는 의미로 서드파티 모듈이라고 부름

// main2.js로 ㄱㄱ
