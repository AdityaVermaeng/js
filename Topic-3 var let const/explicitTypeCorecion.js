
//Number to string conversion
const  a =10;
const b = String(a);
console.log(b,typeof b)

//String to number

const p='10';
const t='10pq'
const q= Number(p);
const u=Number(t)
console.log(q,typeof q);
console.log(u,typeof u);


//Boolean

//some false values are 0, -0, 0.0, null, undefined, NaN, empty string('') ,0n
//some true values are 1, -1, 0.1, '0', 'false', 'true', ' ', [], {}, function(){}, Infinity, -Infinity, 1n

const x=10;
const y=Boolean(x);
console.log(y,typeof y);

// input

const username=prompt("Enter full name");//prompt basically user for take input from user in console or browser
// const age=Number(prompt("Enter your age"));//ES-6 replace Number() with +;
const age = +prompt("Enter your age");
console.log(username,typeof username);