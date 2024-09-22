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
