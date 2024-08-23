//1. Meaning of Array
// answer
// An array in Javascript is a list that can hold multiple items. It is a way to store multiple values in a single variable. Arrary can hold different types of data such as numbers, strings, objects or even other arrarys.

//2. Five types of array method
// *filter()
// *push()
 //*pop()
//  includes()
// slice()

// 3. Create a dummy data and apply the five array method listed above

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter() method: returns a new array with all elements that pass the test implemented by the provided function
let filteredData = data.filter(num => num % 2 === 0);
console.log(filteredData); // Output: [2, 4, 6, 8]

// push() method: adds one or more elements to the end of an array and returns the new length of the array
data.push(10);
console.log(data); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// pop() method: removes the last element from an array and returns that element
let poppedElement = data.pop();
console.log(poppedElement); // Output: 10
console.log(data); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// includes() method: returns true if an element exists in an array, false otherwise        
console.log(data.includes(5)); // Output: true

// slice() method: returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
let slicedData = data.slice(2, 6);
console.log(slicedData); // Output: [3, 4, 5, 6]
