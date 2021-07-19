# 테스트  

## JavaScript 단위 테스트 도구  

1. 자바스크립트 단위 테스트 도구는 20여가지가 넘게 있다.  
2. Java : Junit == JavaScript : JSUnit(개발 중지, 2009년)  
3. JSUnit 프로젝트 ---> Jasmine (2010년 ~ 현재)  
    - 자체 assertion을 가지고 있다.
    - BDD 기반의 개발의 표준 테스팅에 맞는 문법을 작성할 수 있다.
4. DOM 직접 조작 어플리케이션 (jQuery 기반) -> QUnit
    - 세팅하기 쉽고 간편하게 테스트  
    - Promise 기반 비동기 테스트  
5. Node 기반 백엔드 어플리케이션 테스트 -> Mocha
    - Promise 기반 비동기 테스트
    - 자체 Assertion이 없다.
    - 대신, Node 코어 모듈 중에 assert 모듈 뿐 만 아니라  
         다양한 외부 assertion 라이브러리 다양하게 지원한다 (chai, should.js, expect.js)
    - 유연하고 확장성이 좋다.
6. Jasmine, QUnit, **Mocha**, Jest(React 개발 테스트 도구)  

## Mocha 설치

``` 
 - bash -
    $ npm i -D mocha
    $ npx mocha --version
        -> 9.0.2
```

## Mocha 테스트 케이스 모듈(.js, .esm) 작성  

[ex01.js]
```
 - Javascript -
    exports hello = () => "Hello World";
```

[test/ex01.js]
```
 - Javascript -

const assert = require("assert");
const { hello } = require("../ex01");


describe("hello()", ()=>{
    it("'Hello World' 문자열을 반환해야 함 ", ()=>{
        assert.strictEqual( hello(), "Hello World")
    })
})
```

태스트 수행 1
```
 - bash -
    $ npx mocha test/ex01
```

테스트 수행 2
```
 - bash -
    $ npx mocha
```

테스트 수행 3

1. package.json 에 scripts test stage를 추가  

```
 - pacakge.json -
  .
  .
  .

    "scripts": {
    "test": "npx mocha"
  },
  .
  .
  .
```
2. 테스트 수행

```
  - bash - 
  $ npm test
```

## Assertion 기초

[ex02.js]
```
 - Javascript -

    exports.add = (a, b) => a + b;
    exports.na = () => [2, 4, 6];
    exports.X = function() {    
    
    }
```

[ex02.test01.js]
```
 - Javascript -

const assert = require("assert");
const { add } = require("../ex02");

try{
    assert.equal(add(10,20)/* actual */, "30" /* expect */);          // ==
    assert.strictEqual(add(10,20)/* actual */, "30" /* expect */);    // ===
    console.log("ok");
} catch (err) {
    console.log('fail : ', err.message);
}
```

Strict Mode(===, !== 객체 동일성)로 assertion 하여야 한다.  

1. eqaul(deprecteds) -> strictEqual
2. notEquaul(deprecteds) -> strictNotEqual
3. deepEqaul(deprecteds) -> strictDeepEqual
4. notDeepEquaul(deprecteds) -> notStrictDeepEqual