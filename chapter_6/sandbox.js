// // // // // PART 1

// // // // // const para = document.querySelector('p');
// // // // // const para = document.querySelector('.error');
// // // // // const para = document.querySelector('div.error');
// // // // const para = document.querySelector('body > h1');

// // // // console.log(para);

// // // // const paras = document.querySelectorAll('p');

// // // // paras.forEach(para => {
// // // //   console.log(para);
// // // // });

// // // // console.log(paras);
// // // // console.log(paras[1]);

// // // // const errors = document.querySelectorAll('.error');
// // // // console.log(errors);

// // // // PART 2

// // // // get an element by ID
// // // const title = document.getElementById('page-title');
// // // console.log(title);

// // // // get elements by their class name
// // // const errors = document.getElementsByClassName('error');
// // // console.log(errors);
// // // console.log(errors[1]);

// // // // get elements by their tag name
// // // const paras = document.getElementsByTagName('p');
// // // console.log(paras);
// // // console.log(paras[1]);

// // // PART 3
// // const para = document.querySelector('p');
// // console.log(para.innerText);
// // para.innerText = 'ninjas are awesome';

// // const paras = document.querySelectorAll('p');
// // paras.forEach(para => {
// //   console.log(para.innerText);
// //   para.innerText += ' new text';
// // });

// // const content = document.querySelector('.content');
// // console.log(content.innerHTML);
// // content.innerHTML += '<H2>THIS IS A NEW H2</H2>';

// // const people = ['mario', 'luigi', 'yoshi'];
// // people.forEach(person => {
// //   content.innerHTML += `<p>${person}</p>`;
// // });

// // PART 4
// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'TheNetNinja Website';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// console.log(msg.getAttribute('class'));

// msg.setAttribute('style', 'color: green;')

// PART 5
const title = document.querySelector('h1');
//title.setAttribute('style', 'margin: 50px;');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';