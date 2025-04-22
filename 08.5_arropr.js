let arr1 = ["john doe", "jane", 123, "smith"];
let arr2 = arr1
arr2 = arr1.slice(1).concat("hii");
arr2.push("hello");
console.log(arr2);

//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// The slice() method does not change the original array, it returns a new array.

// The slice() method can take two arguments: the start index and the end index. The end index is not included in the new array. If no end index is provided, the slice() method will return all elements from the start index to the end of the array.

//spread method

let arr3 = [123, "hello", "john doe", "jane", 123, "smith"];
let arr4 = [...arr3];
arr4.push("hii");
console.log(arr4);
console.log(arr3);