/**
 * Objects inbuild methods
 * 1.Object.keys()
 * 2.Object.values()
 * 3.Object.entries()// gives nested array with key value pair
 * 4.Object.fromEntries()// objects from array
 * 5.Object.assign()
 * 6.Object.
 * 5.Object.freez()
 */

const obj={
	fullname:"Aditya",
	age:23,
	isLoggedIn:true,
	gender:"male"
}

const k=Object.keys(obj);
console.log("keys",k);

const v=Object.values(obj);
console.log("values",v);

const arr=Object.entries(obj);
console.log(arr);

const newObj=Object.fromEntries(arr);
console.log(newObj);


const Company={
	companyname:"xyz infotech",
	comapnyAddress:"B-45 sector-3"
}
const hiring={
	salary:30000,
	degi:"Fullsatck AI Engineer"
}
const user={
	fullname:"Nishant",
	address:"mai ni bataunga"
}

const emp=Object.assign({},Company,hiring,user);
console.log(emp);


