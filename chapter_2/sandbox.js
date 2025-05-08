// PART 1

// alert('hello, world');
// console.log(1);
// console.log(2);

// let age = 25;
// console.log(age);
// let year = 2025;
// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;

// console.log(points);
// // points = 50;
// // console.log(points);

// var score = 75;
// console.log(score);

// // strings
// console.log('hello, world');

// let email = 'mario@mariomario.mario'
// console.log(email);

// // string concatenation
// let firstName = 'Brandon';
// let lastName = 'Sanderson';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[2]);

// // string length
// console.log(fullName.length);

// // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLocaleLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// PART 2 (UNCOMMENT ONE PART AT A TIME)

// common string methods

// let email = 'mario@thenetninja.co.uk';
// let result = email.lastIndexOf('n');
// console.log(result);

// result = email.slice(0, 5);
// console.log(result);

// result = email.substr(4, 10);
// console.log(result);

// result = email.replace('m', 'w');
// console.log(result);

// result = email.replace('n', 'w');
// console.log(result);

// PART 3

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// // math operators +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// console.log(result);

// result = pi * radius**2;

// console.log(result);

// // order of operation - B I D M A S

// result = 5 * (10-3)**2;
// console.log(result);

// let likes = 10;
// likes++;

// console.log(likes);

// likes--;
// console.log(likes);

// likes += 10;
// console.log(likes);

// likes -= 5;
// console.log(likes);

// likes *= 2;
// console.log(likes);

// likes /= 2;
// console.log(likes);

// // NaN - not a number

// //console.log(5 / 'hello');

// result = 'The blog has ' + likes + ' likes.';
// console.log(result);

// PART 4

// template strings
const title = 'Best reads of 2025';
const author = 'Mario';
const likes = 30;

// concatenation way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);

// template string way
result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes}</span>
`;

console.log(html);