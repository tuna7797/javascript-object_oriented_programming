console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(3.9));

//객체란 서로 연관된 변수와 함수들을 그룹핑해서 이름을 붙인 것
var MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

var MyMath_PI = Math.PI;
function MyMath_random() {
  return Math.random();
}
function MyMath_floor(val) {
  return Math.floor(val);
}
