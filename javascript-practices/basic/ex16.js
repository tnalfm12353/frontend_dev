/**
 * function 타입의 객체 (함수)
 * 
 */

// 함수를 생성하는 방법1
function f1(a , b){
    return a + b;
}
console.log(typeof(f1), f1(10, 20));

// 함수를 생성하는 방법2 : 함수 리터럴 사용
var f2 = function(a, b) {
    return a + b;
}

console.log(typeof(f2), f2(10, 20));

// 함수를 생성하는 방법3 : new 연산자와 함께 Function() 생성자 함수를 사용하는 방법
var f3 = new Function("a", "b", "return a + b;");
console.log(typeof(f3), f3(10, 20));


// 함수를 생성하는 방법4 : 익명(Annonymous) 함수
setTimeout(function(){
    console.log("time out!");
}, 1000);


// 즉시 실행 하는 함수
var s = (function(a, b){
    return a + b;
})(10, 20);

console.log(s);

// 가변 파라미터 함수 

var sum = function() 
{   
    var s = 0;
    // arguments는 Array가 아니다. 유사 Array이다.
    // console.log(arguments instanceof Array);
    // console.log(arguments);
// 구현 1
    // for(var i = 0; i < arguments.length;  i++){
    //     s += arguments[i];
    // }

// 구현 2 (Array.prototype.forEach + caller 바꾸기)
    Array.prototype.forEach.call(arguments, function(e){
        s += e;
    })

    return s;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6));