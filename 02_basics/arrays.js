const myArr1 = [0,1,2,3,4,5]
// const myHero = ["batman","spiderman","deadpool"]
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr1[0]);

// myArr1.push(6,7)
// console.log(myArr1);

// myArr1.pop()
// console.log(myArr1);

// myArr1.unshift(-1)
// console.log(myArr1);

// myArr1.shift()
// console.log(myArr1);

// console.log(myArr1.includes(4));

// const myArr = myArr1.join()

// console.log(myArr1);
// console.log(myArr);

/*
slice doesnt manuplate the array

splice manupilates the orignal array
*/

const marvelHeroes = ["spiderman","deadpool","wolverien"]
const dc = ["joker","deathstoke","batman"]

// marvelHeroes.push(dc)

// console.log(marvelHeroes[3][1]);

// const all = marvelHeroes.concat(dc)

// console.log(all);

// const all = [...marvelHeroes,...dc]
// console.log(all);

const another_arr = [1,2,[3,4,[5,6]]]
const real_arr = another_arr.flat(Infinity)

// console.log(real_arr);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

 


