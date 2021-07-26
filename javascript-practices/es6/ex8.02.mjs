/**
 * unamed export(default)
 * 
 * 이름 없는 객체 하나를 exports 하는 것이다.
 * 따라서 module.exports(CommonJS)
 * 
 */

export default {
    add: function(a, b) {
        return a + b;
    },

    subtract: function(a, b) {
        return a - b;
    }
}