console.log("Start");

const x=setTimeout(()=>{
	console.log("This is setTimeout")

},2000);

clearTimeout(x);//block the settimeout means it never executes
console.log("x",x);

let count=0;
const y=setInterval(()=>{
	console.log("Hello",count++);

},1000);
console.log("y",y);
// clearInterval(y);
setTimeout(()=>{
	console.log("Timer Stoppeed");
	clearInterval(y);
},3000)

console.log("End")