/**
fetch("https://dummyjson.com/products")
.then((response)=>{
	// const res=response.json();
	// console.log("Response",res);
	return response.json();
})
.then((data)=>{
	console.log("Data",data)
})
.catch(err=>{
	console.log("Error",err)
})

const url="https://dummyjson.com/products";
fetch(url)
.then(resp=>  resp.json())
.then(data=> console.log("Data",data))
.catch(err=>console.log(err));
*/

/** async await keyword */
const getProducts = async()=>{
	try{
		const response= await fetch("https://dummyjson.com/products")
	console.log("response",response);
	const data= await response.json();
	console.log(data);
	}
catch(error){
console.log(error)
}

}
const x=getProducts();
console.log("Return value of x",x);
