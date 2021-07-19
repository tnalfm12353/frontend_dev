const ex02 = function (param) {
    return new Promise(function (resolve, reject) {

        // 비동기 코드
        setTimeout(function() {
            if(param == 'param-data') {
                resolve(null, "ok");
            } else {
                reject(new Error("fail"));
            }
        }, 1000);
    });
}

module.exports = ex02;

if(require.main == module) {
    
    // test01 : success
    ex02("param-data").then((res) => {
        console.log(res);
    })
    
    
    // test02 : fail
    ex02("param-error").then((err) => {
        console.error(err.message);
    })
    
    console.log("waits.....");
} else {
    module.exports = ex02;
}