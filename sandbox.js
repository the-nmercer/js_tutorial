// PART 1

// function declaration
// function greet(){
//   console.log('hello there');
// }

// // function expression
// const speak = function(){
//   console.log('good day');
// };

// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

// PART 2

// arguments and parameters
const speak = function(name = 'luigi', time = 'night'){
  console.log(`good ${time} ${name}`);
};

speak('nick', 'day');