// PART 1

// const para = document.querySelector('p');
// const para = document.querySelector('.error');
// const para = document.querySelector('div.error');
const para = document.querySelector('body > h1');

console.log(para);

const paras = document.querySelectorAll('p');

paras.forEach(para => {
  console.log(para);
});

console.log(paras);
console.log(paras[1]);

const errors = document.querySelectorAll('.error');
console.log(errors);