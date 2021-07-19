const assert = require("assert").strict;
const { X } = require("../ex02");

try{
    const a = new X();
    const b = new X();
    const c = a;

    assert.equal(a, c, 'fail : a === c');
    // assert.equal(a, b, 'fail : a === b');
    assert.deepEqual(a, c, 'fail : deepEqual 1');
    assert.deepEqual(a, b, 'fail : deepEqual 2');

    b.bar = 'foo';
    assert.notDeepEqual(a, b, 'fail : notDeepEqual 1');

    console.log("ok");
} catch (err) {
    console.log('fail : ', err.message);
}
