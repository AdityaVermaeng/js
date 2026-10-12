/*//some()
const arr=[
	{ id:1, name:"John", role:user},
	{ id:2, name:"tom holland", role:user},
  { id:3, name:"hritik", role:user},
  { id:4, name:"marry jane", role:user}
]
const res=arr.some(element=>element.role==="admin");
console.log("res:",res);//return false


//every(callback)

const arr1=[
	{ id:1, name:"John", role:user},
	{ id:2, name:"tom holland", role:user},
  { id:3, name:"hritik", role:user},
  { id:4, name:"marry jane", role:user}
]
const x= arr1.every(element=>element.role==="user");
console.log(x);
*/

//typeof()
//Array.isArray()
//Array.from()
//Exapmle of str
const str="hello world";
const a=Array.from(str);
console.log(a);//['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

//example of obj

// const obj={};
// const b=Array.from(b);
// console.log(b);//Empty array

const obj={
	//key: value
	0:"john",
	1:"cris",
	2:"jade",
	3:"hulk",
	length:4
}
const newArr=Array.from(obj);
console.log(newArr);



