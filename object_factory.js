function Person(name, first, second, third){
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function(){
    return this.first + this.second; 
  }
}

var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

// constructor 생성자. 객체를 찍어내는 공장.