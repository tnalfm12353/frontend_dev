/**
 *  mixed with named & unnmaed(default)
 *  
 */

const add = function(a, b) {
    return a + b;
}

const subtract = function (a, b){
    return a - b;
}

export {add, subtract};

// Enhanced Object Literal을 사용해서 unnamed export를 하였다.
// 14번 라인과 차이점을 이해하면 ES6 모듈 시스템 지원의 export, import는 끝..
// export default { add, subtract };
export default { add: add, subtract : subtract };
