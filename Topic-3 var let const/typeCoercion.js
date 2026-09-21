// Implicit type coercion

const a=10;
const b="6";
 console.log(a-b); // output=4; // here string is converted to number


 const p=10;
 const q='6pqr';
 console.log(p-q); // output=NaN; // here string is converted to number but it is not a valid number so output is NaN
 console.log(typeof(NaN));