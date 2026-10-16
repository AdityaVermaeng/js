// This keyword
/**
 * 1.this in GEC
 */
console.log("This keyword in GEC:",this);
/**
 * 2.This keyword in regular function
 */
function greet(){
	console.log("Hello from regular Function:",this)
}
greet();
/**
 * 3.THis from Arrow function
 */
const hii=()=>{
	console.log("Hii from Arrow function",this);
}
hii();

/**
 * 4
 */