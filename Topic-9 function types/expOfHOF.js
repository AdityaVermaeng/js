// Write a HOF taht takes 3 arguments first Name and rest 2 are callbacks;
//first callback prints Hello Aditya
//second call prints Namaste Aditya

const greet=(name,cb1,cb2)=>{
	console.log("start");
	const callback1=cb1(name);
	console.log(callback1)
	const callback2=cb2(name);
	console.log(callback2)

}
// function hello=> `Hello ${name}`
function hello(name){
	// console.log(`Hello ${name}`)
	return `Hello ${name}`;
}
function namaste(name){
// console.log(`Namste ${name}`)
return `Namste ${name}`;
}
greet("Aditya",hello,namaste)

