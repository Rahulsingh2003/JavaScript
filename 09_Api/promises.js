// // fetch('https://somthing.com').then().catch().finally()
// const promiseOne = new Promise(function (resolve, reject) {
//   //do an async task
//   //DB calls, cryptograph,network
//   setTimeout(function () {
//     console.log("async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("async task 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "example@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "rahul",
//         password: "123",
//       });
//     } else {
//       reject("ERROR: SOmetthing occured");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("FInally The promises is resovled ore rejecetd");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let errors = true;
//     if (!errors) {
//       resolve({
//         username: "rahul",
//         password: "123",
//       });
//     } else {
//       reject("ERROR: SOmetthing occured");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (errors) {
//     console.log(errors);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then(() => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
