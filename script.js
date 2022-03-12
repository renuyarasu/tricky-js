// Tricky JS Program
console.clear();

// 7 Killer One-Liners in JavaScript
// 01. Shuffle Array
// 02. Copy to Clipboard
// 03. Unique Elements
// 04. Detect Dark Mode
// 05. Scroll To Top
// 06. Scroll To Bottom
// 07. Generate Random Color


// 03. Unique Elements (Set)
// Every language has its own implementation of Hash List, in JavaScript, it is called Set. You can easily get the unique elements from an array using the Set Data Structure.

let unique_elements = (arr) => [...new Set(arr)]

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];

let result = unique_elements(arr);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]