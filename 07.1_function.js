//local and global variables
// let a = 6; //global variable
// function local(b) {
//     var c = 3;
//     console.log(b);
//     console.log(a);
// }
// local()
// console.log(a);
// console.log(c);


//different types of functions
// 1. Anonymous function
// fuctuion() {
//     console.log("hello"); //syntax error 

// }

//solution 

// let fun = function() {
//     console.log("hello");
// }

// fun()

// 2. Immediate invoke  function
// (function() {
//     console.log("hello Mr. Bruce");
// })()

// 3. Arrow function
// without Arrow function

// let a = (a, b) =>
//     console.log(a + b);
// a(3, 6)
let a = function(a, b) {
    return (a + b);
}
console.log(a(2, 3)); // Output: 5