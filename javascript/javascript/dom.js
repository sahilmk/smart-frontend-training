//Documnt Object

// var val
// val = document.all;

// val = document.links

// val = document.title

// val = document.getElementsByClassName('btn')[0].getAttribute('type');
// val = document.getElementsByClassName('btn')[0].value;


// val = document.forms;

// val = document.links[0].className;

// val = document.scripts;

// let sarray = Array.from(val);

// sarray.forEach(sc => {
//     console.log(sc.src);
// });
// console.log(val);



//Multiple selector

let val1 = document.getElementsByClassName('card-action')[0].textContent;
console.log(val1);

// document.getElementsByClassName('card-action')[0].textContent = "hii"
// document.getElementsByClassName('card-action')[0].innerText = "<h6>hii</h6>"

// console.log(document.querySelector('.fa'));
// document.querySelector('li:last-child i').style.fontSize = '50px';

itag = document.getElementsByTagName('i');

itagarr = Array.from(itag);

itagarr.forEach(ci => {
    ci.style.color = 'red';
});

// itagarr.forEach(ci => {
//     ci.style.display = 'none';
// });

li = document.querySelectorAll('li:nth-child(odd)');
lie = document.querySelectorAll('li:nth-child(even)');

liarr = Array.from(li);
liearr = Array.from(lie)
// console.log(li);

for (let i = 0; i < liarr.length; i++) {
    liarr[i].style.background = '#ccc';
}

for (let i = 0; i < liearr.length; i++) {
    liearr[i].style.background = '#999';
}




//Single selector
lbutton = document.getElementById('task-title');
console.log(lbutton.innerText);

document.querySelector('i').style.color = 'blue'



// 1 - Element
// 2 - Attribute(deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


//Child & Children
// ul = document.querySelector('ul');

// ulval = ul.childNodes;
// ulval = ul.childNodes[1].nodeType;
// ulval = ul.childNodes[1].nodeName;
// ulval = ul.childNodes.length;

// ulval = ul.children;
// ulval = ul.children.length;
// ulval = ul.children[0].innerText;
// ul.children[0].innerText = "List Item1"
// ul.children[1].style.color = 'red';

// ul.lastElementChild.style.color = 'coral';
// ul.lastChild.previousSibling.style.color = 'blue';
// ul.firstElementChild.nextElementSibling.nextElementSibling.style.color = 'white';
// console.log(ulval);




//Adding new element to any element
// aul = document.querySelector('ul');

// nli = document.createElement('li');
// nli.className = 'collection-item';
// let ele = document.createTextNode('Extra Eelement');
// nli.appendChild(ele);
// nlo = document.createElement('a');
// nlo.className = 'delete-item secondary-content';
// nlo.innerHTML = '<i class="fa fa-remove"></i>';
// nli.appendChild(nlo);

// aul.appendChild(nli);

// lli = document.querySelectorAll('li');

// llia = Array.from(lli);
// // lli[0].appendChild(div);
// // lli[1].appendChild(div);
// for (let i = 0; i < llia.length; i++) {
//     div = document.createElement('h6');
//     div.innerText = 'After the list element';
//     llia[i].appendChild(div);
// }



//Replace the thing
// head1 = document.createElement('h1');
// head1.innerText = "hello";


// document.getElementsByClassName('card-content')[0].replaceChild(head1, document.getElementsByClassName('card-title')[0]);


// document.querySelector('ul').lastElementChild.remove();

// console.log(document.querySelector('a').className);
// console.log(document.querySelector('a').classList);
// console.log(document.querySelector('a').classList.add('btn-blue'));
// console.log(document.querySelector('a').classList);
// console.log(document.querySelector('a').classList.remove('btn-blue'));
// console.log(document.querySelector('a').classList);

// console.log(document.querySelector('input').value);
// console.log(document.querySelector('input').getAttribute('value'));
// document.querySelector('input').removeAttribute('value')
// console.log(document.querySelector('input').value);
// document.querySelector('input').setAttribute('value', 'Enter Your name')
// console.log(document.querySelector('input').value);



//Even Listner
document.querySelector('.clear-tasks').addEventListener('click', response);

function response(e) {
    document.querySelector('.clear-tasks').classList.remove('black');
    document.querySelector('.clear-tasks').style.display = 'none';
    // console.log(e.offsetX);
    console.log(e.clientX);
}























