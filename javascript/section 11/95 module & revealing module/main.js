// (function () {
//     //This is a private function or variable

//     return {
//         //This is a public function or variable
//     }
// })();

(function () {
    var text = 'hello this is Patterns';

    var h1 = document.querySelector('h1');
    return {
        show: function () {
            h1.innerText = text;
        }
    }
})().show();


const patt = (function () {
    const list1 = [];

    function add(value) {
        list1.push(value);
    }

    function get(ind) {
        return list1[ind - 1];
    }
    return {
        a: add,
        g: get
    }
})();

patt.a(10);
patt.a('hello');

console.log(patt.g(2));