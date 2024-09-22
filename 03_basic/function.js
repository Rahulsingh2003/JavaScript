function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("H");
  console.log("U");
  console.log("L");
}

// sayMyName();

function addNo(a, b) {
  let c = a + b;
  return c;
}
// console.log(addNo(3, 2));

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("please enter a user name");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Rahul"));

// console.log(loginUserMessage());

function calculateCartPrice(a, b, ...num1) {
  //rest opreater
  return num1;
}
// console.log(calculateCartPrice(200, 300, 440, 500, 600));

const user = {
  userName: "Rahul",
  prices: 2311,
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName} and Price is ${anyObject.price}`
  );
}

handleObject({
  userName: "ram",
  price: 455,
});

const myArr = [1, 2, 3, 4, 5];

function returnSecondValue(getArr) {
  return getArr[1];
}

// console.log(returnSecondValue(myArr));
