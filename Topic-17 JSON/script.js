//JSON-JavaScript Object Notation
//JSON.stringify()=> js to JSON
//JSON.parse(): JSON to js

const user={
	 fulllname:"ADitya",
	 age:23,
	 origin:"india"
}
const jsonObj=JSON.stringify(user,null,4);//(object,function,space)
console.log(jsonObj);

const jsonNewObj=JSON.parse(jsonObj);
console.log(jsonNewObj);

console.log(user===jsonNewObj)