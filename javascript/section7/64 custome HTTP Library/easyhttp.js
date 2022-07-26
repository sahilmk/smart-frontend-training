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

easyHTTP.prototype.post = function (url, data, callback) {
    this.xhr.open('POST', url, true);
    this.xhr.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.xhr.onload = function () {
        callback(self.xhr.responseText);
    }

    this.xhr.send(JSON.stringify(data));
}

easyHTTP.prototype.put = function (url, data, callback) {
    this.xhr.open('PUT', url, true);
    this.xhr.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.xhr.onload = function () {
        callback(self.xhr.responseText);
    }

    this.xhr.send(JSON.stringify(data));
}

easyHTTP.prototype.delete = function (url, callback) {
    this.xhr.open('DELETE', url, true);

    let self = this;
    this.xhr.onload = function () {
        if (self.xhr.status === 200) {
            callback('Data is deleted');
        } else {
            callback('Error: ' + self.xhr.status);
        }
    }

    this.xhr.send();
}

