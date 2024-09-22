//Immediately Innvoked Funtion Expression

//Named iife
(function chai() {
  console.log(`db Connected`);
})();

// using arrow funtion for iife
((name) => {
  console.log(`db connected two ${name}`);
})("Rahul");
