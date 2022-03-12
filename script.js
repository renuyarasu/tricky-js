// Tricky JS Program
console.clear();

// 7 Killer One-Liners in JavaScript
// Shuffle Array
const shuffle_array = (arr) => arr.sort(() => Math.random() - 0.5);
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let result = shuffle_array(arr);
console.log(result);