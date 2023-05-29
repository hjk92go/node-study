//Node.js의 이벤트는 어떤 일이 발생했음을 알리는 신호

//event라는 코어모듈을 가져옴 이 모듈은 클래스하나를 외부에 공개함
//EventEmitter는 이벤트 발송기나, 전파기라는 의미
//EventEmitter클래스가 있어야 이벤트를 사용할 수 있다.
const EventEmitter = require("events");

//EventEmitter클래스로 myEmitter라는 객체 생성.
//EventEmitter는 자체는 단지 클래스이기 때문에 객체를 생성해줘야 사용가능
const myEmitter = new EventEmitter();

//myEmitterr객체의 두 가지 메소드를 호출 -> on과 emit
//on메소드는 어떤 이벤트가 발생했을때, 실행할 콜백함수를 등록하는 메소드

//아래는 test라는 이름의 이벤트가 발생했을때 success라는 문자열이 출력되도록 콜백을 등록한것
myEmitter.on("test", () => {
  console.log("Success!");
});

//emit은 우리말로 발송, 전파하다는 뜻을 가짐
//emit메소드는 이벤트를 발생시키는 메소드정도로 생각하면 된다.

//아래는 test라는 이벤트를 직접 발생시키는것
myEmitter.emit("test");

//node에서 코어모듈에서 가져다 쓸 다양한 함수들이 이벤트 기반으로 동작하도록 설계되어있음
//콜백을 리스너라고도 함

//하나의 이벤트에대해 여러개의 콜백을 설정할수 잇고, 순서대로 진행된다.
myEmitter.on("test1", () => {
  console.log("1");
});
myEmitter.on("test1", () => {
  console.log("2");
});
myEmitter.on("test1", () => {
  console.log("3");
});

myEmitter.emit("test1");

//myEmitter2라는 객체를 추가한경우에 실행하면
const myEmitter2 = new EventEmitter();

//아래의 이벤트는 출력안됨. 이벤트의 이름이 같더라도 다른 객체이기떄문에
//반응하지 않는다.

myEmitter2.on("test1", () => {
  console.log("4");
});

//아래와 같이 같은 객체로 해야 반응함
//myEmitter2.emit("test1");
