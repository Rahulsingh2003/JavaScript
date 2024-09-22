const user = {
  userName: "Rahul",
  price: 1234,

  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to website`);
  },
};

// user.welcomeMessage();

//if you this in console in a broser it will show window globel obj

// function chai() {
//   console.log(this);
// }

// chai();

// const chai = function () {
//   let username = "rahul";
//   console.log(this.username);
// };
// chai();

const chai = () => {
  let username = "rahul";
  console.log(this);
  console.log(this.username);
};
// chai();

//arrow funtion
/*
() => {}
*/
//normal funtion
/*
funtion(){
}
*/

// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => ({username:"Rahul"});

// console.log(addTwo(3, 4));
