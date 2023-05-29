const PI = 3.14;
let author = "codeIt teacher";
const add = (a, b) => a + b;
let test = {
  date: "2023-05-27",
  types: ["safetyTest", "performanceTest"],
  printTypes() {
    for (const i in this.types) {
      console.log(this.types[i]);
    }
  },
};

// exports.add = add;
//외부로 함수를 보내주는 것
//" exports.모듈외부로 공개할 이름 = 모듈 내부에서의 이름 " 의 구성을 가진다.
// exports.프로퍼티 이름 = 프로퍼티 값

//내보내고 싶은것이 여러개면 여러번 써주면 된다
// exports.pi = PI;
// exports.author = author;
// exports.test = test;

// 여러번 쓰는것이 번거롭다면 하나의 객체로 만들고 그 객체를 공개하는 방법이 있다
// 예시는 아래와

let calculator = {
  PI: 3.14,
  add2: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

//객체를 외부로 내보내는 경우에
//"module.exports = 객체명"의 형식을 가짐
module.exports = calculator;
