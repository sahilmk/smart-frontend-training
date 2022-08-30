//Tag 
type tagStr = string;

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
    uname: tagStr;
    surname: string;
    age: Number | string;
    showMessage?(): string;
}

//Object
let obj: personObjectInterface = {
    uname: 'Person',
    surname: 'Surname1',
    age: 100,
    showMessage() {
        return `Hello ${obj.uname} ${obj.surname} how are you.`;
    }
}

const stringArray: tagStr[] = ['Thing1', 'Thing2'];

console.log(stringArray);


//Void and any type
const voidType: void = undefined;
const voidTypeTwo: void = null;

const anyType: any = ['hi', 205, true, null, undefined];


//never, unkonwn
const neverFunctoin = (): never => {
    throw 'never';
}

let unVar: unknown = '10';
const anyVar: any = unVar;

//Type conversion
let st: string = '10';
const num: Number = (st as unknown) as Number;

console.log(typeof num);

//dom
const input = document.getElementById('input') as HTMLInputElement;
console.log(input.value);