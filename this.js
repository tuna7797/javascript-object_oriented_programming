var kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
//this: 특정 객체에 속해있는 method가 자신이 속한 객체를 가리키기 위해 사용하는 특수한 키워드
//console.log(kim.sum(kim.first, kim.second));
console.log("kim.sum(kim.first, kim.second", kim.sum());
