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

// const password = '12345@';

// if(password.length >= 12 && password.includes('@')){
//   console.log('that password is mighty strong')
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
//   console.log('that password is strong enough');
// } else {
//   console.log('password is not strong enough');
// }

// PART 7

// logical NOT
// let user = false;

// if(!user){
//  console.log('you must be logged in to continue');
// }

// console.log(true);
// console.log(false);
// console.log(!true);
// console.log(!false);

// PART 8

// break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++){
//   if(scores[i] === 0){
//     continue;
//   }

//   console.log('your score: ', scores[i])

//   if(scores[i] === 100){
//     console.log('congrats, you got the top score!!');
//     break;
//   }
// }

// PART 9

// // switch statements
// const grade = 'B';

// switch(grade){
//   case 'A':
//    console.log('you got an A!');
//    break;
//   case 'B':
//     console.log('you got an B!');
//     break;
//   case 'C':
//    console.log('you got an C!');
//    break;
//   case 'D':
//    console.log('you got an D!');
//    break;
//   case 'E':
//     console.log('you got an E!');
//     break;
//   default:
//     console.log('not a valid grade');
// }

// PART 10

// variables and block scope
let age = 30;

if(true){
  let age = 40;
  let name = 'shaun';
  console.log ('inside 1st code block: ', age, name);

  if(true){
    let age = 50;
    console.log('inside 2nd code block', age);
  }

  if(true){
    console.log('inside 3rd code block', age);
  }
}

console.log('outside code block: ', age, name);