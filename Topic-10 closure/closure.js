// closure when a inner function remember the value of outer function
//higher order function
const outer=()=>{
	console.log("outer function");
	const mobile="Iphone";
	const laptop="macbook";

//Callback funciton
	  const inner=()=>{
		console.log("Mobile:",mobile)
	}
	return inner;
}
const x=outer();
console.log("x:",x);
x();