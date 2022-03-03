// Problem 1
let original_array = [1, 2, 3, 4]; // here we are defining the first array 
var dup_array = original_array.slice(); // The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(original_array);
console.log(dup_array);
 
const newArray = original_array.concat(dup_array); // and here we are conactinating the original array and the shallow copy of it 
console.log(newArray); // expected output [1, 2, 3, 4, 1, 2, 3, 4]

// Problem 2


