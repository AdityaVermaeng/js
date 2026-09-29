const result= (function (x,y){
	const sum=x+y;
	return sum;
})(19,23);
console.log(result)


//Arrrow function

//Explicite Return type arrow function

const add =(a,b)=>
{
	const total=a+b;
	return total;
}


const result1=add(10,20);
console.log(result1);


//Implicit Return type arrow function
const square=(a)=> a*a;
const result2=square(5);
// square(5)
console.log(square) // give the function that is  (a)=> a*a;
console.log(result2);