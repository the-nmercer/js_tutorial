// // PART 1

// // function declaration
// // function greet(){
// //   console.log('hello there');
// // }

// // // function expression
// // const speak = function(){
// //   console.log('good day');
// // };

// // greet();
// // greet();
// // greet();

// // speak();
// // speak();
// // speak();

// // PART 2

// // arguments and parameters
// // const speak = function(name = 'luigi', time = 'night'){
// //   console.log(`good ${time} ${name}`);
// // };

// // speak('nick', 'day');

// // PART 3

// // returning values
// // const calcArea = function(radius){
// //   return 3.14 * radius**2;
// // };

// // const area = calcArea(5);
// // console.log(area);

// // PART 4

// // regular function
// // const calcArea = function(radius){
// //   return 3.14 * radius**2;
// // };

// // arrow function
// // const calcArea = radius => 3.14 * radius**2;

// // const area = calcArea(5);
// // console.log('area is: ', area);

// // const greet = () => 'hello, world';
// // console.log(greet())

// // const bill = (products, tax) => {
// //   let total = 0;
// //   for(let i =0; i < products.length; i++){
// //     total += products[i] + products[i] * tax;
// //   }
// //   return total;
// // }

// // console.log(bill([15,10,30], 0.2))

// // PART 5

// const name = 'shaun';

// // functions
// const greet = () => 'hello';
// let resultOne = greet();
// console.log(resultOne);

// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

//PART 6

// callbacks and foreach
const myFunc = (callbackFunc) => {
  let value = 50;
  callbackFunc(value);
}

myFunc(value => {
  console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`)
}

people.forEach(logPerson)

people.forEach((person, index) => console.log(index, person));