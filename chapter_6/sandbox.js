// // PART 1

// // const para = document.querySelector('p');
// // const para = document.querySelector('.error');
// // const para = document.querySelector('div.error');
// const para = document.querySelector('body > h1');

// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   console.log(para);
// });

// console.log(paras);
// console.log(paras[1]);

// const errors = document.querySelectorAll('.error');
// console.log(errors);

// PART 2

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[1]);

// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);