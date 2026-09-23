console.log('start');
var a=10;
let b=20;
const c=30;
{
	var a=100;
  let b=200;
  const c=300;
	console.log("inside the block");
	console.log("a",a);
  console.log("b",b);
  console.log("c",c);

}
console.log("Outside the block");
console.log("a",a);
console.log("b",b);
console.log("c",c);
console.log("end");