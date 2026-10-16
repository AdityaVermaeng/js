const jack={
	bike:"David Putra"
}

const oggy=structuredClone(jack);
oggy.bike="Pink Scooty";//overwrite the bike name of jack means shallow copy4
//to avoid shallow copy we use

console.log("oggy",oggy);//pink scooty
console.log("jack",jack);//pink scooty