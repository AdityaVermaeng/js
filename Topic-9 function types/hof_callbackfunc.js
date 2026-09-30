//Higher order function and callback function

const myName=(name,cb)=>{
	console.log('inside the myName');
	const msg=cb(name);
	return msg;
}
const x=myName("Aditya",(fn)=>`Hello ${fn}`);
console.log(x);


//calculate sum

const calculater=(num1,cb,num2)=>{
	console.log("inside the calc");
	const total=cb(num1,num2);
	// console.log(total)
	return total;

}

const p=calculater(10,(a,b)=> a+b,23);
// calculater(10,(a,b)=> a+b,23);
console.log(p);


//Write a HOF that takes 3 arguments and perform multiplication where user input allow

const mutliply=(x,y,cb)=>{
	console.log("start from here")
	const result=cb(x,y);
	console.log(result);
}
const n1= +prompt("Enter first Number");
const n2= +prompt("Enter second Number");
mutliply(n1,n2,(p,q)=>p*q);