const userEmail = "Rahul@gmail.com";
const lame = "";
if (userEmail) {
  console.log("got user email");
} else {
  console.log("dont have user email");
}

if (lame) {
  console.log("got user email");
} else {
  console.log("dont have user email");
}

/*
falsy value

false, 0, -0, BigInt 0n, "",null,undefiend, NaN

truely values
all other then falsy values
"0",'false'," ",[],{},function(){}

*/

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
