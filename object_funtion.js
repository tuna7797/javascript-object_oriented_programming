var kim = {name:'kim', first:10, second:20}
var lee = {name:'lee', first:10, second:10}
lee.__proto__ = kim
function sum(prefix){
    return prefix+(this.first+this.second);
}
// sum();
console.log("sum.call(kim)", sum.call(kim, '=> '));  //apply
console.log("sum.call(lee)", sum.call(lee, ': ')); 
var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());

//call은 실행되는 함수의 this값을 원하는 객체로 바꿔서 실행할 수 있게 해준다. 
//bind는 실행되는 함수의 this값을 원하는 객체로 고정시키는 새로운 함수를 만들어낸다