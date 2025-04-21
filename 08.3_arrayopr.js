// if else in filter method
// let num = [30, 20, 40, 50, 60, 70]
// let a = num.filter((val, ind, arr) => {
//     if (val > 10 && val < 60)
//         return val;

// })
// console.log(a);

//findindex and findlastindex method
let num = [12, 23, 45, 67, 34, 43, 12]
let a = num.findIndex((val) => {
    return val == 12;
})
console.log(a)
let b = num.findLastIndex((val) => {
    return val == 12;
})
console.log(b)

//forin and forof method
let num1 = [12, 23, 45, 67, 34, 43, 14]
for (ar in num1) {
    console.log(ar); //use to print index of arr
    console.log(num1[ar]) // index with value
}
for (ar of num1) {
    console.log(ar) //array's elemnets
}