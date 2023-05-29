//영상 24

//이벤트를 발생시킬때 추가정보를 함께 전달하는 방법

const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// myEmitter.on("test", () => {
//   console.log("성공");
// });

// myEmitter.emit("test");

//ex 기존코드에서 과일이름들을 전달하려고함

//콜백에서 추가정보를 받기
myEmitter.on("test", (arg1, arg2, arg3, arg4) => {
  console.log(arg1);
  console.log(arg2);
  console.log(arg3);
  console.log(arg4);
});

//전달하고 싶은 내용을 인자로 추가
myEmitter.emit("test", "apple", "banana", "peer");

//콜백에서 보내주는 인자보다 더 많은 인자를 받으려고 하면 undefined가 발생
//적게받아도 상관X

//실무적으로는 여러 정보를 담고있는 객체 하나만 전달하는것이 더 깔끔하다
const obj = { type: "text", data: "hello", date: "20230529" };
myEmitter.on("test1", (info) => {
  console.log(info);
});
myEmitter.emit("test1", obj);
