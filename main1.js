//코어 모듈
//코어모듈은 경로설정할 필요X 이름만 써주면됨

//file system준말로 파일이나 디렉토리 작업을 할때 필요한 모듈
//디렉토리 생성 및 삭제할때 필요

// const fs = require("fs");
// let fileList = fs.readdirSync(".");
// console.log(fileList);
//readdirSync 특저어 디렉토리 안에 있는 파일 목록들을 배열형식으로
//리턴하는 함수

//new라는 파일에 Hello Node.js!라는 내용을 쓰는 함수
// fs.writeFileSync("new", "Hello Node.js!");
//-------------------------------------------------------

//Operating system의 준말로, 운영체제라는 뜻의 코어모듈
//운영체제에 관련된 정보들을 가져올 수 있다.
// const os = require("os");

//현재컴퓨터 cpu정보 출력해보기
// console.log(os.cpus());

// 코어모듈종류는 공홈을 통해 살펴보기
// https://nodejs.org/dist/latest-v12.x/docs/api/

//(참고) electron프레임워크 => node위에서 실행되는 pc용프로그램 제작가능
//vscode도 electron으로 만들어짐

//개발팁!
//특정 브라우저가 js의 표준 문법 중에서 어디까지 지원하는지 확인하는것이 중요
// 각 브라우저별 자바스크립트 표준 구현 현황: https://kangax.github.io/compat-table/es6/

//서드파티(3rd party)모듈이란?
//다른 개발자나 회사들이 만들어서 인터넷상의 공개 저장소에 제공하는 모듈

//서드파티 모듈 가져와서 사용해보기
//cowsay [npm install cowsay] 설치
//npm(Node Package Manager) => 서드파티 모듈에 관한 작업을 할 때 필요한 프로그램

//서드파티 모듈도 경로 표시없이 사용가능
// const cowsay = require("cowsay");
// console.log(
//   cowsay.say({
//     text: "I love js",
//   })
// );

//비동기 프로그래밍

const fs = require("fs");

// 동기실행
// console.log("Start");

//두번쨰 인자는 파일을 어떤방식으로 읽을지 지정하는 인코딩

//readFileSync가 동기실행..되는부분
// let content = fs.readFileSync("./new", "utf-8");
// console.log(content);

// console.log("finish");

//--------------------------------------------
//위와 출력결과물이 살짝 바뀜

// 비동기실행(특정 작업이 완료 되었을때 실행할 콜백을 등록해두고, 바로 다음코드로 실행을 넘기는것)
console.log("Start");

//readFile은 비동기 함수, 콜백함수 등록(error 부터)
fs.readFile("./new", "utf-8", (error, data) => {
  console.log(data);
});

console.log("finish");
