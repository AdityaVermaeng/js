/**
* !Array Inbuild methods
*shift() - Removes the first element from an array and returns that removed element. This method changes the length of the array.
*unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
*push() - Adds one or more elements to the end of an array and returns the new length of the array.
*pop() - Removes the last element from an array and returns that element. This method changes the length of the array.
reverse() - Reverses the order of the elements of an array in place. (The first array element becomes the last, and the last array element becomes the first.)
indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
includes() - Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
 */


/**
 * ! unshift(): Add new value to the starting index
 * ! shift(): Remove value from the starting index
 */

const arr =[10,10,20,30,40];
const x=arr.unshift(5,6);//return updated length
console.log(arr);


const arr1=[10,10,20,30,40];
const y=arr1.shift();//return removed value
console.log(y);


const arr2=["hello","dev",10,20,30,40];
const p=arr2.shift();
const q=arr2.shift();
console.log(p);
console.log(q);
console.log(arr2);