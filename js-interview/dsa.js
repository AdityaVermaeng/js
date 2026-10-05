// const twoSum=(nums,target)=>{
// 	const n=nums.length;
// 	for(let i=0;i<n;i++){
// 		for(let j=i+1;j<n;j++){
// 			if(nums[i]+nums[j]===target){
// 				return [i,j];
// 			}
// 	}

// }
// return[];
// }
// const nums=[2,7,6,9,11,15];
// const target=17;
// const result=twoSum(nums,target);
// console.log(result);

// const isPalendrome=(x)=>{
// 	// if(x<0) return false;
// 	let rev=0;
// 	let num=x;
// 	while(num>0){
// 		rev=rev*10+num%10;
// 		num=Math.floor(num/10);
// 	}
// 	return rev===x;

// }
//  let x=-121;
// const result=isPalendrome(x);
// console.log(result);

const threeSum=(nums)=>{
	let n=nums.length;
	for(let i=0;i<n-2;i++){
		for(let j=i+1;j<n-1;j++){
			for(let k=j+1;k<n;k++){
				if(nums[i]+nums[j]+nums[k]===0){
					return [nums[i],nums[j],nums[k]];
				}
			}
		}
}
return [];
}
const nums=[-1,0,1,2,-1,-4,4];
const result=threeSum(nums);
console.log(result);
