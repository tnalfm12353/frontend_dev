const assert = require("assert").strict;
const { add } = require("../ex02");

try{
    // assert.strict.equal(add(10,20)/* actual */, "30" /* expect */);
    assert.equal(add(10,20)/* actual */, "30" /* expect */);
    console.log("ok");
} catch (err) {
    console.log('fail : ', err.message);
}