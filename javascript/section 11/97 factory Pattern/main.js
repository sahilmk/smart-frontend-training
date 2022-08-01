function defineMember() {
    this.createMember = function (name, type) {
        let member;

        if (type === 'simple') {
            member = new simpleMember(name);
        } else if (type === 'standard') {
            member = new standardMember(name);
        } else if (type === 'super') {
            member = new superMember(name);
        }

        member.type = type;
        member.show = function () {
            console.log(`${member.name} (${member.type}): ${member.cost}`);
        }

        return member;
    }
}

function simpleMember(name) {
    this.name = name;
    this.cost = '$5';
}

function standardMember(name) {
    this.name = name;
    this.cost = '$10';
}

function superMember(name) {
    this.name = name;
    this.cost = '$20';
}

var defuser = new defineMember();
const user1 = defuser.createMember('sahil', 'super');
const user2 = defuser.createMember('jack', 'simple');
const user3 = defuser.createMember('John', 'standard');
const user4 = defuser.createMember('Max', 'super');

user1.show();
user2.show();
user3.show();
user4.show();
