let score = "33"
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof(valueInNumber));



/*
if you convert a string which mean abc to number it will give 
datatype of number and if we see what it holds it will
show NaN

if we store null and convert it to number it will show
0

if we store undefined and convert it to number it will
show NaN

if boolean false -> 0
           true -> 1



*/


//about boolean

let loggedIn = 1
let booleanloggedIn = Boolean(loggedIn)
console.log(booleanloggedIn);

/*
1 -> true
0-> false
"" -> false
"rahul" -> true

*/

let someNumber = 22
let stringNum = String(someNumber)
console.log(stringNum);
console.log(typeof(stringNum))