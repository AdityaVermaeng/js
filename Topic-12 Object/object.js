/*
const user={
	fullname:"Aditya",
	age:23,
	gender:"male",

	greet: function(){
		console.log("Good Morning");
	}

}
console.log(user);
console.log(user.fullname);
// console.log(user.greet());
user.greet();


const obj={
	fullname:"Aditya",
	state:"haryana"
}
//insertion
obj.age=23;
obj.gender="male";
obj.city="Noida";
//Updation
obj.state="UP"

//deletion
delete obj.city;
//find
console.log("country" in obj);
console.log(obj);
*/

const user={
	fullname:"Aditya",
	age:23,
	isLoggedIn:true,
	gender:"Male"
}

//destructuring
const {fullname,age,isLoggedIn,gender}=user;
console.log(fullname);
console.log(age);
console.log(isLoggedIn);
console.log(gender);