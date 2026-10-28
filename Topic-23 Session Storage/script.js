const naam="Aditya Verma";
const umr=23;
const ghar="Uttar-Pradesh";

sessionStorage.setItem("Name",naam);
sessionStorage.setItem("age",umr);
sessionStorage.setItem("kaha se Ho",ghar);

//getItem


const x=sessionStorage.getItem("kaha se Ho");
console.log(x);

//clear
sessionStorage.clear();
