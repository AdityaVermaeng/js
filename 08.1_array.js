//loop in array
// let num = [10, 12, 20, 23, 45, 46, 47]
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);

//Arrow function use for access the array element
let num1 = [10, 12, 20, 23, 45, 46, 47]
num1.forEach((val, index) => {
    console.log(val + "  " + index)
})