// // // // // PART 1

// // // // // object literals
// // // // let user = {
// // // //   name: 'crystal',
// // // //   age: '30',
// // // //   email: 'crystal@thenetninja.co.uk',
// // // //   location: 'berlin',
// // // //   blogs: ['why mac n cheese rules', '10 things to make with marmite']
// // // // };

// // // // console.log(user);
// // // // console.log(user.name);

// // // // user.age = 35;

// // // // console.log(user.age);

// // // // const key = 'location';
// // // // console.log(user[key]);

// // // // console.log(user['name']);
// // // // user['name'] = 'chun-li';
// // // // console.log(user['name']);

// // // // console.log(typeof user);

// // // // PART 2

// // // // object literals
// // // // let user = {
// // // //   name: 'crystal',
// // // //   age: '30',
// // // //   email: 'crystal@thenetninja.co.uk',
// // // //   location: 'berlin',
// // // //   blogs: ['why mac n cheese rules', '10 things to make with marmite'],
// // // //   login: function(){
// // // //     console.log('the user logged in');
// // // //   },
// // // //   logout: function(){
// // // //     console.log('the user logged out');
// // // //   },
// // // //   logBlogs: function(){

// // // //   }
// // // // };

// // // // user.login();
// // // // name.toUpperCase();

// // // // PART 3
// // // let user = {
// // //   name: 'crystal',
// // //   age: '30',
// // //   email: 'crystal@thenetninja.co.uk',
// // //   location: 'berlin',
// // //   blogs: ['why mac n cheese rules', '10 things to make with marmite'],
// // //   login(){
// // //     console.log('the user logged in');
// // //   },
// // //   logout(){
// // //     console.log('the user logged out');
// // //   },
// // //   logBlogs(){
// // //     console.log('this user has written the following blogs:')
// // //     this.blogs.forEach(blog => {
// // //       console.log(blog)
// // //     });
// // //   }
// // // };

// // // user.logBlogs();

// // // PART 4
// // // const blogs = [
// // //   { title: 'why mac n cheese rules', likes: 30},
// // //   { title: '10 things to make with marmite', likes: 50}
// // // ];

// // // console.log(blogs);

// // let user = {
// //   name: 'crystal',
// //   age: '30',
// //   email: 'crystal@thenetninja.co.uk',
// //   location: 'berlin',
// //   blogs: [
// //     { title: 'why mac n cheese rules', likes: 30},
// //     { title: '10 things to make with marmite', likes: 50}
// //   ],
// //   login(){
// //     console.log('the user logged in');
// //   },
// //   logout(){
// //     console.log('the user logged out');
// //   },
// //   logBlogs(){
// //     console.log('this user has written the following blogs:')
// //     this.blogs.forEach(blog => {
// //       console.log(blog.title, blog.likes);
// //     });
// //   }
// // };

// // user.logBlogs();

// // PART 5

// // math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 4.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));

// PART 6

// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values
const userOne = { name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);