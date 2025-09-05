// Type conversion
// result = '3' + 'hello';
// result = '3' + null;
// result = '3' - null;
// result = '3' - 2;
// result = '3' - false;
// result = '3' - 'hello';
// console.log(result);
// console.log(typeof result);

// Explicite
// result = "hello";
result = 30.333;
// result = String(result);
// vresult = Boolean(result);// not working
// result = parseInt(result);
result = parseFloat(result);

console.log(result);
console.log(typeof result);