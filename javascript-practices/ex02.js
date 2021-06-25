/*
    변수와 데이터 타입

    [기본타입(primitive type)]
    1. number
    2. boolean
    3. string
    4. undefined

    [객체 1] - Objcet Type
    1. new 생성자 함수() 사용해서 생성, 
        Number()        --> object type 객체 생성
        Boolean()       --> object type 객체 생성
        String()        --> object type 객체 생성
        Object()        --> object type 객체 생성
        Array()         --> object type 객체 생성
    2. null
        null            --> object type 객체 생성
    3. [] -> 배열 리터럴
    4. {} -> 객체 리터럴, Json

    [객체 2] - function type
    1. new 생성자 함수() 사용해서 생성, 
        Function() -> function type 객체가 생성.
    2. function(...) {......} (함수 리터럴)

*/
/*
    자바 스크립트의 객체를 구분하는 또 다른 방법
    1. 내장(Built-In, Native) 객체
        자바스크립트 엔진 안에 미리 내장되어 있는 객체
        Number, Boolean, Date, RegExp ... 생성자 함수 객체
        ParseInt, setTimeout, setInterval 와 같은 일반 함수 객체
        window 객체(browser의 전역객체)

    2. 호스트 객체
        자바스크립트 엔진이 임베디드된 호스트의 객체 (자바스크립트 접근 가능)
        browser (document, location, XmlHttpRequest, ...)

    3. 사용자 객체
        자바스크립트 코드가 엔진에서 실행되면서 생성되는 객체들...

*/
console.log("===================== 원시타입 ====================");

var u; // var u = undefined; 와 동일 자바스크립트 선언;
var i = 10;
var b = true;
var s = "HelloWorld";

console.log("u :" + typeof(u));
console.log("i :" + typeof(i));
console.log("b :" + typeof(b));
console.log("s :" + typeof(s));




console.log("===================== [객체1] : object type ====================");


var i2 = new Number(10);
var b2 = new Boolean(true);
var s2 = new String("Hello World");
var o = new Object(true);
var a = new Array();


console.log("i2 :" + typeof(i2));
console.log("b2 :" + typeof(b2));
console.log("s2 :" + typeof(s2));
console.log("o :" + typeof(o));
console.log("a :" + typeof(a));

var n = null;
var o2 = {};
var a2 = [];


console.log("n :" + typeof(n));
console.log("o2 :" + typeof(o2));
console.log("a2 :" + typeof(a2));




console.log("===================== [객체2] : function type ====================");

var f = new Function("a", "b", "return a + b;" );
var f2 = function(a,b) { return a+b ;}
var f3 = (a,b) =>{ return a+b; }

console.log("f :" + typeof(f));
console.log("f2 :" + typeof(f2));
console.log("f3 :" + typeof(f3));




console.log("===================== 원시타입과 원시타입을 Wrapper 객체는 구분없이 사용가능하다. ====================");

console.log(i + i2);
console.log(s + s2);


// 원시 타입의 메소드가 호출될 때.
// 임시 Wrapper 객체가  만들어 져서 메소드 호출이 일어난 뒤 사라진다.
console.log("===================== 원시타입도 메소드 호출이 가능하다. ====================");

console.log(s.toUpperCase());
console.log(new String(s).toUpperCase());
console.log(b.valueOf());
console.log(b2.valueOf());