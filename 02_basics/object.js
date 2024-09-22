// //singleton

// //object literals
// // object.create()


// console.log(JsUser.email);
// console.log(JsUser["email"]); //sometime good practice
// console.log(JsUser[mySym])


// JsUser.email = "LOAM@GMAIL.COM"
// // console.log(JsUser.email);
// // Object.freeze(JsUser)

// console.log(JsUser);

// JsUser.greeting = function(){
    //     console.log("hello js user ");
    
    // }
    const mySym = Symbol("key1")
    
    
    
    const JsUser = {
        name: "Rahul",
        [mySym]: "key10",
        age: 21,
        location: "kota", 
        email: "Rahul@gmail.com",
        isLoggedIn: false,
        lastLoginDays: ["monday","sunday"]
    
    }


JsUser.greeting = function() {
    console.log(`hello js user ${this.name}`);
}

JsUser.greeting();





