// let obj = {
//     name: "john doe",
//     age: 30,
//     city: "new york",
//     country: "usa",
//     "latest city": "los angeles",
// }
// console.log(obj);
// console.log(obj.country);
// console.log(obj["latest city"]);

//Function in Object
let obj = {
    fun: function() {
        console.log("hello");
    }
};

obj.fun(); // Outputs: hello