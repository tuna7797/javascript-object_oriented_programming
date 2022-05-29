///반복문을 이용해서 객체의 모든 값에 접근하는 방법
var memberArray = ["egoing", "graphittie", "leezche"];
console.group("array loop");
var i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd("array loop");
var memberObject = {
  manager: "egoing",
  developer: "graphittie",
  designer: "leezche",
};
/* 가독성 좋게 보여줌
array loop
  0 egoing
  1 graphittie
  2 leezche
*/
console.group("object loop");
for (var names in memberObject) {
  console.log(names, memberObject[names]);
}
console.groupEnd("object loop");
/*
object loop
  manager egoing
  developer graphittie
  designer leezche
*/
