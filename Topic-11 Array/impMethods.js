//High order methods


/**
 * sort()
 * const products=[
	{id:101, item:"iphone 18 pro",price:200000},
	{id:102, item:"mackbook m5",price:140000},
	{id:103, item:"samsung s26",price:90000},
	{id:104, item:"google pixel 10",price:80000}
]
	products.sort((a,b)=>a.price-b.price)

 */

	//forEach()- executes a provided function once for each array element.
/**
	const arr=[10,20,30,40,50];
	const x=arr.forEach((value,index)=>{
		arr.push(element*10)
	}
	)
	console.log(arr);
	console.log(x);
*/


//const output =[11,12,13,14,15] || [1,4,9,16,25];

/**
 * const arr= [11,12,13,14,15];
 arr.forEach((element,index)=>{
	const x= (element-10);
	arr.push(x*x);
 })
 console.log(arr);


 //map()

 const arr7=[10,23,14,23,33,65];

 const newArr=arr7.map(element=>{

 	// element*2;
	return element*2;
 })
console.log(newArr)


//disadvantage of map

const numArr=[12,23,40,45,30];
const only=numArr.map(element=>{
	if(element>30){
		return element;
	}
})
console.log(only);//it store undefined for the elements which are not greater than 30. So, it is not a good practice to use map in this case. Instead, we can use filter method.



* ! filter()

const numArr1=[10,20,12,30,34,45,67];
const modify=numArr1.filter(element=>{
	if(element>30){
		// return element;
		return true; //it will return only the elements which are greater than 30. So, it is a good practice to use filter in this case.
	}
})
console.log(modify);//it will return only the elements which are greater than 30. So, it is a good practice to use filter in this case.


const arr =[1,2,3,0,-4,7];
const x=arr.filter(element=>{
	if(element>=0){
		// return element;//[1,2,3,7] it skips 0 cause it only store the truthy value but 0 is falsy
		return true;
	}
})
console.log(x);//[1,2,3,7] it skips 0 cause it only store the truthy value but 0 is falsy
*/

const products=[
	{id:101, item:"iphone 18 pro",price:200000},
	{id:102, item:"mackbook m5",price:151000},
	{id:103, item:"samsung s26",price:90000},
	{id:104, item:"google pixel 10",price:80000}
];
const find=products.filter(element=>{
	if(element.price>150000){
		return true;
	}
})
console.log(find)
