class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first + this.second; 
    }
}
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third; 
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}


var kim = new PersonPlus('kim', 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());

// 1. super()와 super. 의 차이
// - super()시 부모 클래스의 생성자 호출. 필요한 인자를 넘겨줘야함
// - super. 사용시 부모 클래스의 속성값에 접근하는 용도로 사용.

// 2. super가 없다면?
// - 부모 클래스에서 기능을 추가하고 싶을 때 필요한 코드를 자식 클래스에서 중복 작성해야한다.
// - 자식 클래스에서 부모 클래스의 속성값에 접근하지 못한다.