const ex01 = function(param, callback) {
    // 비동기 코드
    // ex) 파일시스템 접근, 네트워크 통신, SQL to DB, setTimeout

    setTimeout(function() {
        if(param == 'param-data') {
            callback(null, "ok");
        } else {
            callback(new Error("fail"));
        }
    }, 1000);
}
if(require.main == module) {
    // test01
    ex01("param-data", function(error, res) {
        if(error) {
            console.error(error);
        } else {
            console.log(res);
        }
    });
    
    // test02
    ex01("param-error", function(error, res) {
        if(error) {
            console.error(error.message);
        } else {
            console.log(res);
        }
    });
    
    console.log("waits....");
} else {
    module.exports = ex01;
}