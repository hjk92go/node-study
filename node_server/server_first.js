//서버-클라이언트 구조
//서비스에 관한 요청을 보내는 프로그램 또는 컴퓨터를 클라이언트라고한다
//클라이언트는 원하는 서비스를 제공해 주는 서버에 요청을 보냄
//요청을 받은 서버는 그에 맞는 알맞은 응답을 한다.

//----------------------------------------------------------------------------------
//네트워크 지식

// 1. 프로토콜(Protocol)
//http라는 코어 모듈을 로드했는데, 이때 http라는 단어는 클라이언트와 서버 간의 '통신 규약' 혹인 '프로토콜'의 이름이라고 했는데요.
//프로토콜(protocol)이란 '약속', '규약'이라는 뜻의 영어 단어로, 컴퓨터 네트워크에서는 '클라이언트와 서버가 서로 통신하기 위해 사용하는 규약'을 의미
//프로토콜에는 ftp, telnet, ssh, pop3, smtp, http, https 등 다양한 것들이 있는데요. 이 중에서도 웹 개발을 할 때는,
//브라우저 주소창에서 쉽게 볼 수 있는 http, https 라는 프로토콜이 중요하다.
//https는 http보다 좀 더 안전한 방식(s는 secure의 줄임말입니다)의 프로토콜이다.

// 2. 특수한 IP 주소, 127.0.0.1
//이 주소는 외부의 다른 컴퓨터가 아니라 컴퓨터 자기 자신을 나타내는 주소로 특별히 약속된 주소이다.
//이 IP 주소는 외부의 서버와 통신하기 위해 사용되는 것이 아니라
//개발자들이 자신이 만든 서버 프로그램을 테스트하기 위한 용도로 주로 사용된다.
//*참고로 127.0.0.1 자리에 localhost라고 써도 똑같이 내 컴퓨터에 접속할 수 있습니다. 궁금한 분들은 직접 실험해보세요. 간혹 다른 곳에서는 내가 만든 서버 프로그램을 테스트하기 위해 127.0.0.1 말고 localhost를 쓰는 경우도 있다.
//https://ko.wikipedia.org/wiki/Localhost 참고

// 3. 포트(Port) 번호란?
//IP 주소 뒤에 :3000이라고 하는 포트 번호가 붙어있습니다.
//'포트 번호'는 이전 영상에서도 간단하게 언급했는데요.
//포트 번호란 클라이언트가 서버에 요청을 보내려고 할 때,
//서버에서 실행되고 있는 여러 프로그램 중 어느 프로그램과 통신할 것인지를 나타내기 위해 지정하는 번호이다.
//Port_Num 이미지 참고

const http = require("http");

const server = http.createServer(function (request, response) {
  response.end("<h1>Hello World<h1>");
});

server.listen(3000);

//위의 코드에서 server.listen(3000);부분이 server 객체가 3000번 포트를 할당받아 실행되도록 하는 부분이다.

// 4. 종합
//http://127.0.0.1:3000 이 주소는 내 컴퓨터에서(127.0.0.1)
// 3000번 포트 번호를 가지고 실행되고 있던(:3000) 서버 프로그램과 http라는 프로토콜로 통신을 시작하겠다는 뜻이다.
