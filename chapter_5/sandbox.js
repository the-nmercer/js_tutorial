// // // PART 1

// // // object literals
// // let user = {
// //   name: 'crystal',
// //   age: '30',
// //   email: 'crystal@thenetninja.co.uk',
// //   location: 'berlin',
// //   blogs: ['why mac n cheese rules', '10 things to make with marmite']
// // };

// // console.log(user);
// // console.log(user.name);

// // user.age = 35;

// // console.log(user.age);

// // const key = 'location';
// // console.log(user[key]);

// // console.log(user['name']);
// // user['name'] = 'chun-li';
// // console.log(user['name']);

// // console.log(typeof user);

// // PART 2

// // object literals
// // let user = {
// //   name: 'crystal',
// //   age: '30',
// //   email: 'crystal@thenetninja.co.uk',
// //   location: 'berlin',
// //   blogs: ['why mac n cheese rules', '10 things to make with marmite'],
// //   login: function(){
// //     console.log('the user logged in');
// //   },
// //   logout: function(){
// //     console.log('the user logged out');
// //   },
// //   logBlogs: function(){

// //   }
// // };

// // user.login();
// // name.toUpperCase();

// // PART 3
// let user = {
//   name: 'crystal',
//   age: '30',
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: ['why mac n cheese rules', '10 things to make with marmite'],
//   login(){
//     console.log('the user logged in');
//   },
//   logout(){
//     console.log('the user logged out');
//   },
//   logBlogs(){
//     console.log('this user has written the following blogs:')
//     this.blogs.forEach(blog => {
//       console.log(blog)
//     });
//   }
// };

// user.logBlogs();

// PART 4
// const blogs = [
//   { title: 'why mac n cheese rules', likes: 30},
//   { title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs);

let user = {
  name: 'crystal',
  age: '30',
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    { title: 'why mac n cheese rules', likes: 30},
    { title: '10 things to make with marmite', likes: 50}
  ],
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logBlogs(){
    console.log('this user has written the following blogs:')
    this.blogs.forEach(blog => {
      console.log(blog.title, blog.likes);
    });
  }
};

user.logBlogs();