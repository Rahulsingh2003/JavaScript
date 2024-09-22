// // //singleton

// // //object literals
// // // object.create()

// // console.log(JsUser.email);
// // console.log(JsUser["email"]); //sometime good practice
// // console.log(JsUser[mySym])

// // JsUser.email = "LOAM@GMAIL.COM"
// // // console.log(JsUser.email);
// // // Object.freeze(JsUser)

// // console.log(JsUser);

// // JsUser.greeting = function(){
//     //     console.log("hello js user ");

//     // }
//     const mySym = Symbol("key1")

//     const JsUser = {
//         name: "Rahul",
//         [mySym]: "key10",
//         age: 21,
//         location: "kota",
//         email: "Rahul@gmail.com",
//         isLoggedIn: false,
//         lastLoginDays: ["monday","sunday"]

//     }

// JsUser.greeting = function() {
//     console.log(`hello js user ${this.name}`);
// }

// JsUser.greeting();

// const tinderUser = new Object() //singleton object
const tinderUser = {}; // non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Jiji";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "som@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Rahul",
      lastname: "Singh",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const Users = [
  {
    id: 1,
    email: "ccc@gmail.com",
  },
  {},
  {},
  {},
];

Users[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
  courseName: "Js",
  price: "999",
  courseInstructor: "Rahul",
};

// course.courseInstructor

const { courseInstructor: Instructor } = course;
console.log(Instructor);

// const navbar = ({company}) => {

// }                          //in react

// navbar(company = "Rahul")

// {
//     "name": "Rahul",
//     "course": "Js",    json
//     "price": "free",
// }
