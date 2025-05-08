//PART 1

// for loops
// for(let i = 0; i < 5; i++){
//   console.log('in loop:', i);
// }

// console.log("loop finished");

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//   console.log(names[i]);
// }

// for(let i = 0; i < names.length; i++){
//   let html = `<div>${names[i]}</div>`
//   console.log(html);
// }

// PART 2

// while loops
// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while(i < names.length){
//   console.log(names[i]);
//   i++;
// }

// PART 3

// do while loops
// let i = 3;
// do{
//   console.log('val of i is: ', i)
//   i++
// } while(i < 5);

// PART 4

// if statements
// const age = 25;

// if(age > 20){
//   console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//   console.log("that's a lot of ninjas");
// }

// const password = 'p@ssword';

// if(password.length >= 8){
//   console.log('that password is long enough')
// }

// PART 5

// else if statements
// const password = 'paasasdfasdfsword';

// if(password.length >= 12){
//   console.log('that password is mighty strong')
// } else if(password.length >= 8){
//   console.log('that password is long enough');
// } else {
//   console.log('password is not long enough');
// }

// PART 6

// logical operators OR || and AND &&

const password = '12345@';

if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong')
} else if(password.length >= 8 || password.includes('@') && password.length > 5){
  console.log('that password is strong enough');
} else {
  console.log('password is not strong enough');
}