const fullName="Aditya Verma";
const age=23;
const team="RCB";
//setItem to localStorage
localStorage.setItem("name",fullName);
localStorage.setItem("age",age);
localStorage.setItem("Team",team);

//getItem from localStorage
const x= localStorage.getItem("age");
console.log(x);//23 String

//removeItem from localStorage
// const a=localStorage.removeItem("Team");
// const p=localStorage.removeItem("age");


//clear all values from localStorage
const b=localStorage.clear();
