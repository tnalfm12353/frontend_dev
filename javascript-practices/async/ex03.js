const ex02 = require("./ex02");
const ex03 = async function(param) {
    try{
        const res = await ex02(param);

        console.log(res);
    } catch(error) {
        console.log(error.message);
    }
}

if(require.main == module ){
    // test01
    ex03("param-data");

    // test02
    ex03("param.error")

    console.log("......waits");
} else {
    module.exports = ex03;
}