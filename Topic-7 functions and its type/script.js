/*
function greet(user){
	console.log(`Hello ${user}`)
	return 10;
	// return user;//Arav

}
greet("Aditya");
const res= greet("Arav");
console.log(res);



 */

//write a funcyion in js that takes two arguments and find the sum

/*function findSum(num1,num2){
	const sum=num1+num2;
	return sum;

}
const sum =findSum(10,20);
console.log(sum); */

//write a function in js takes two arguments and return the largest of two number
const num1= +prompt("Enter first number");
const num2= +prompt("Enter second number");

function findBig(a,b){
	// if(num1>num2){
	// 	return num1;
	// }
	// else{
	// 	return "Number is smaller";
	// }
	if(a===b)
	{
		return "Both numbers are equal";
	}

	return (a>b)?a:b; //ternary operator

}

const res=findBig(n1,n2);
console.log(res);

