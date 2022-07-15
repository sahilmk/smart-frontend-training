var city = 'rajkot';
var state = 'gujarat';
var country = 'india';
var content;

// content = '<ul>' +
//     '<li>' + city + '</li>' +
//     '<li>' + state + '</li>' +
//     '<li>' + country + '</li>' +
//     '</ul>';


content = `
    <ul>
        <li>${city}</li>
        <li>${state}</li>
        <li>${country}</li>        
    </ul>
`


document.body.innerHTML = content;
// console.log('sahil' + 'kanjariya');
