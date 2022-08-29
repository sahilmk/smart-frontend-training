//Type of variable
const a: string = 'sahil';

//Return type of function and typeof parameter
const showOutput = (a: string): string => {
    return 'hello this is first typescript program written by ' + a;
    // return true;
}

console.log(showOutput(a));

//Interface
interface personObjectInterface {
    uname: string;
    surname: string;
    age: number | string;
    showMessage?(): string;
}

//Object
let obj: personObjectInterface = {
    uname: 'Person',
    surname: 'Surname1',
    age: '100',
    showMessage() {
        return `Hello ${obj.uname} ${obj.surname} how are you.`;
    }
}

console.log(obj);

//Union operator