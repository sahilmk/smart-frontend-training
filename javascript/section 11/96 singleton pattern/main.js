const bo = (function () {
    let value1;

    function init() {
        const obj = new Object('Hello');
        return obj;
    }

    return {
        showvalue: function () {
            if (!value1) {
                value1 = init();
            }
            return value1;
        }
    }
})();

var object1 = bo.showvalue();
console.log(object1);