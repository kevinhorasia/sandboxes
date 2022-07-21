// const para = document.querySelector('body > div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error')

// console.log(paras[2]);
// console.log(errors);

// // Get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);

// // Get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors); // can't use foreach in HTMLCollection
// console.log(errors[0]);

// // Get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'nice weather!';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += '<h2> This is a new h2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// });

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const msg = document.querySelector('body > p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green;');

const title = document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';

// Change class
// const content = document.querySelector('body > p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');
// content.classList.toggle('success');
// content.classList.toggle('success');

const paras = document.querySelectorAll('body > p');

// innerText vs textContent: show hidden text
paras.forEach(p => {
    if (p.textContent.includes('error')) 
        p.classList.add('error'); 
    if (p.textContent.includes('success'))
        p.classList.add('success');
});