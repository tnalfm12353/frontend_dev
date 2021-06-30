console.log("================ global =================");
global.name1 = "둘리"; // var name = "둘리";
console.log(name1, global.name1);
var email = "dooly@gmail.com";
console.log(email, global.email);

console.log("================ function 객체 메서드 apply =================");
var f1 = function() {
    console.log(this);
}

f1();

// this 바꾸기
var o = {
    name: "마이콜"
}

f1.apply(o);

console.log("================ function 객체 메서드 call =================");
var f2 = function(s) {
    console.log(s + " " + this.name);
}

f2.call(o,"hi"); // 호출과 동시에 this binding