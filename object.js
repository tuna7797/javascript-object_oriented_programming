//배열과 객체를 만들고, 값을 읽는 법
var memberArray = ["egoing", "graphittie", "leezhce"];
console.log("memberArray[2]", memberArray[2]);

var memberObject = {
  manager: "egoing",
  developer: "graphittie",
  designer: "leezhce",
};
memberObject.designer = "leezche";
//객체의 값을 수정
console.log("memberObject.designer", memberObject.designer);
console.log("memberObject['designer']", memberObject["designer"]);
delete memberObject.manager;
//객체의 값을 삭제
console.log("after delete memberObject.manager", memberObject.manager);
