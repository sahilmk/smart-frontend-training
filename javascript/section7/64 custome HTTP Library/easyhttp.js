function easyHTTP() {
    this.xhr = new XMLHttpRequest();
}

easyHTTP.prototype.get = function (url, callback) {
    this.xhr.open('GET', url, true);

    let self = this;
    this.xhr.onload = function () {
        if (self.xhr.status === 200) {
            callback(null, self.xhr.responseText);
        } else {
            callback('Error: ' + self.xhr.status);
        }
    }

    this.xhr.send();
}

easyHTTP.prototype.post = function () {

}

easyHTTP.prototype.put = function () {

}

easyHTTP.prototype.delete = function () {

}

