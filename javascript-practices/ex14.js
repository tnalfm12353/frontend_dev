// URL 문자열 다루기

var url = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape : url을 전부다 encoding, (X), deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURI : parameter 만 encoding, (O)
var url3 = encodeURI(url);
console.log(url3);


// 3. encodeURIComponent : value만 encoding해야 하는 경우 -> value만 있는 경우
// bad Ex
var url4 = encodeURIComponent(url); 
console.log(url4);
// good Ex
// 만들어야 할 URL
// http://mysite.com/user?no=10&name=홍&email=hong@naver.com

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + encodeURIComponent(o[prop]));
    }

    return qs.join("&");
}


// Object.prototype.toQueryString2 = function() {
//     var qs = [];
//     for(prop in this) {
//         qs.push(prop + "=" + encodeURIComponent(this[prop]));
//     }

//     return qs.join("&");
// }

var url = "http://mysite.com/user";
var param = {
    no : 1,
    name : "홍",
    email : 'hong@naver.com'
}

var url5= url + "?" + toQueryString(param);
console.log(url5);
// var url6 = url + "?" + param.toQueryString2();
// console.log(url6);