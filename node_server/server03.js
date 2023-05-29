// 라우팅하기(클라이언트의 요청에 대해 서버가 그 URL을 보고 적절하게 분기하여 처리하여 주는 것을 라우팅이라고 한다.)

// url에 따라 서버가 다른응답하게 만들어보기

const http = require("http");

users = ["Tom", "Andy", "Jessica", "Paul"];
// let server = http.createServer((request, response) => {
//   //   response.end("<h1>hello</h1>");
//   //   console.log(request.url);

//   if (request.url === "/") {
//     response.end("<h1>Welcome</h1>");
//   } else if (request.url === "/users") {
//     response.end("<h1>" + users + "</h1>");
//   } else {
//     response.end("<h1>Page Not Available</h1>");
//   }
// });

// server.listen(3000);

// 클라이언트가 요청한 url정보 가져오기 console.log(request.url);
// url 정보는 객체 속성으로 들어온다.

//http모듈로 라우팅할 때의 불편함

//각각의 회원 이름을 조회하는 URL에 대해 라우팅하기
let server = http.createServer((request, response) => {
  //   response.end("<h1>hello</h1>");
  //   console.log(request.url);

  if (request.url === "/") {
    response.end("<h1>Welcome</h1>");
  } else if (request.url === "/users") {
    response.end(`<h1>${userName}</h1>`);
  } else if (request.url.split("/")[1] === "users") {
    //url : users/1, users/2
    //repl모드에서(터미널에서 node로 입장가능, 쪼개진걸 미리 확인가능)
    //'/users/1'.split('/') 치면 배열이 리턴, 문자열을 '/' 기존으로 쪼개고, 쪼개진 조각들로 배열을 만듬

    let userIdx = request.url.split("/")[2];

    //알맞은 회원이름 가져오기
    let userName = users[userIdx - 1]; //배열은 0부터 시작함으로 원래값에서 -1해줘야함

    response.end(`<h1>${userName}</h1>`);
    console.log(request.url);
  } else {
    response.end("<h1>Page Not Available</h1>");
  }
});
server.listen(3000);

// 권장되는 스타일 코드

// 1. 함수를 Arrow Function 형태
// 2. 변수는 가능하다면 최대한 상수로 바꾸기
// 나중에 다시 새로운 것을 대입할 일이 없는 것들은 변수보다는 상수로 설정
// 생각보다 많은 경우에 변수(let)보다는 상수(const)로 나타내는 것이 더 낫다.

// 3. 변수가 섞인 문자열은 + 기호보다는 템플릿 문자열 사용하기
// 위의 코드 response.end('<h1>' + userName + '</h1>'); 부분은
// response.end(`<h1>${userName}</h1>`);형태로 사용하기

//템플릿 문자열은 전체 문자열을 작은따옴표가 아닌 백틱(`)으로 감싸주고 그 안에 등장하는 변수는 ${ } 기호 안에 넣음으로써 원하는 문자열을 나타낸다.

// 4. 기타

//문자열은 double-quote(")가 아닌 single-quote(')로 나타내야 함 : "http" -> 'http'로 수정
//주석 내용은 스페이스 하나를 두고 시작해야 함 : //url : ~ -> // url : ~ 로 수정
//- 기호 앞 뒤로 스페이스가 필요함 : users[userIdx-1] -> users[userIdx - 1] 로 수정

//https://github.com/airbnb/javascript 스타일 가이드 참고
