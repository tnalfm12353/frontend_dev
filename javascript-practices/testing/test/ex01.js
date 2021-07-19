const assert = require("assert");
const { hello } = require("../ex01");


describe("hello()", ()=>{
    it("'Hello World' 문자열을 반환해야 함 ", ()=>{
        assert.strictEqual( hello(), "Hello World")
    })
})