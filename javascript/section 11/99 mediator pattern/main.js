const User = function (nuser) {
    this.name = nuser;
    this.chatroom = null;
}

User.prototype = {
    send: function () {
        this.chatroom(this, message, to);
    },
    recive: function (message, from) {
        console.log(`${this.name} to ${from.name}: ${this.message}`);
    }
}

const chatroom = function () {
    let users = {};

}