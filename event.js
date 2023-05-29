//EventEmitter 객체의 다른 메소드들도 추가

//1. on 메소드
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("test", () => {
  console.log("Success!");
});

myEmitter.emit("test");

//이벤트 핸들러를 설정하는 메소드 & on 메소드와 같은 용도를 가진 addListener라는 메소드도 있다.

//2. emit 메소드
//emit 메소드는 인위적으로 이벤트를 발생시키기 위해 쓰는 메소드
// emit 메소드는 on 메소드와 한 쌍을 이루는 메소드
//실질적으로 사용하는 일은 드물다.

//3. once 메소드
//once 메소드는 특정 이벤트에 대한 이벤트 핸들러를 등록한다는 점에서 on 메소드와 유사한 메소드
//딱 한번만 반응해서 실행된다.

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

myEmitter.once("test", () => {
  console.log("Success!");
});

myEmitter.emit("test");
myEmitter.emit("test");
myEmitter.emit("test");

//위와 같이 3번실행시켜도 한번만 출력되는것을 확인할수 있음

//4. listeners 메소드
//특정 이벤트에 대한 이벤트 핸들러들을 출력해주는 메소드

myEmitter.once("test", () => {
  console.log("A");
});

myEmitter.once("test", () => {
  console.log("B");
});

myEmitter.once("test", () => {
  console.log("C");
});

console.log(myEmitter.listeners("test"));

//코드를 작성하다가 특정 이벤트에 지금 어떤 이벤트 핸들러들이 설정되어 있는지 조회하는경우에 주로 사용

//5. off 메소드 _ 이벤트 핸들러를 해제하는 메소드
//off 메소드를 사용할 때는 주의_ 해제할 이벤트 핸들러를 정확히 지정해야함
// const myEmitter = new EventEmitter();

myEmitter.on("test", () => {
  // --- (A)
  console.log("Success!");
});

myEmitter.off("test", () => {
  // --- (B)
  console.log("Success!");
});

myEmitter.emit("test");
//이 코드를 실행하면 Success!가 출력된다
//(A) 이벤트 핸들러와 (B) 이벤트 핸들러는 똑같이 생겼지만 서로 다른 함수이기 때문

//off 메소드를 사용하려면 아래 코드와 같이
// const myEmitter = new EventEmitter();

const callback = () => {
  console.log("Success!");
};

myEmitter.on("test", callback);

myEmitter.off("test", callback);

myEmitter.emit("test");

//이벤트 핸들러를 나중에 off 메소드에서도 참조할 수 있도록 변수에 할당해주거나,
//여러 개의 이벤트 핸들러인 경우 배열에 넣어서 관리해줘야 합니다.

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

const cbArr = [];

cbArr[0] = () => {
  console.log("A");
};

cbArr[1] = () => {
  console.log("B");
};

//위의 코드를 실행하면, 이벤트 발행X 이벤트가 해제 되었음을 알수있다.

//공식문서
//https://nodejs.org/api/events.html#events_class_eventemitter
