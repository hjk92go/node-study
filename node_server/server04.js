//좀더 편하게 라우팅하기

//express라고 하는 서드 파티 모듈 사용하기
//npm install express 설치

const http = require("http");

//express 모듈 불러오기
const express = require("express");
const port = 3000;
//express 모듈 객체 만들기
//보통 app 이라는 이름을 사용하지만 다른이름을 써도됨
const app = express();

const users = ["Tom", "Andy", "Jessica", "Paul"];

//app이라는 객체에 get 메소드를 써서
//첫번째 인자로 /가 들어올때, 두번째 인자로 이 / 경로에 대한 요청이 들어올 때 실행될 함수
app.get("/", (request, response) => {
  response.end("<h1>Welcome Express</h1>");
});

app.get("/users", (request, response) => {
  response.end(`<h1>${users}</h1>`);
});

// :id위치에 오는 값을 id라는 속성에 담으라는 express만의 표기법
app.get("/users/:id", (request, response) => {
  //   console.log(request.params);
  const userName = users[request.params.id - 1];
  response.end(`<h1>${userName}</h1>`);
});

// 그 밖에 모든 경로를 의미 (*는 모든 path를 의미)
app.get("*", (request, response) => {
  response.end("<>Page Not Available</>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
//(1) /,
//(2) /users,
//(3) /users/:id,
//(4) *
//차례대로 처리 되기때문에 그밖에 모든 경로 처리는 제일 마지막에 해야한다.
