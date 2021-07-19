const req01 = function(url, callback) { // req01: db.query, $.ajax 와 유사
    console.log('req01 [' + url + ']');
    setTimeout(() => {
        const resp = {
            data: "Hello World"
        }

        callback(resp);
    }, 1000);
}

const req02 = function(url) { // req02: db.query, $.ajax Promise 객체를 리턴하는 promise화 된 함수다.
    console.log('req02 [' + url + ']');
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const resp = {
                data: "Hello World"
            }
            
            resolve(resp);
            // error
            // reject('fails: req02');
        }, 1000);
    });
}

// req01("http://www.hong.com/api", function(response){
//     console.log(response);
// });

// req02("http://www.hong.com/api")
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.error(error);
//     });

const fetch = async function(url) { // ex) model.findAll, model.insert ...
    try{
        console.log('fetch [' + url + ']');
        const response = await req02(url);
        console.log(response);
        return response;
    } catch(error) {
        console.log(error);
    }
    
}

fetch();

console.log("do Something");