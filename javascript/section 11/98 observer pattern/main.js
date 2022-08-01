function funObserver() {
    this.observer = [];
}

funObserver.prototype = {
    subscribe: function (fn) {
        this.observer.push(fn);
        console.log(`You have subscribbed to the ${fn.name}`);
    },

    unSubscribe: function (fn) {
        this.observer = this.observer.filter(function (item) {
            if (item !== fn) {
                return item
            }
        })
        console.log(`You have Unsubscribbed to the ${fn.name}`);
    },

    fire: function () {
        this.observer.forEach(function (i) {
            i.call();
        })
    }
}

var obj = new funObserver();

document.querySelector('.sub-ms').addEventListener('click', function () {
    obj.subscribe(getMSecond);
});
document.querySelector('.unsub-ms').addEventListener('click', function () {
    obj.unSubscribe(getMSecond);
});

document.querySelector('.sub-s').addEventListener('click', function () {
    obj.subscribe(getsecond);
});
document.querySelector('.unsub-s').addEventListener('click', function () {
    obj.unSubscribe(getsecond);
});

document.querySelector('.fire').addEventListener('click', function () {
    obj.fire();
});

const getMSecond = function () {
    console.log(`Current Millisecond is: ${new Date().getMilliseconds()}`);
}

const getsecond = function () {
    console.log(`Current Millisecond is: ${new Date().getSeconds()}`);
}


