// Tricky JS Program
console.clear();

// remove duplicate element from an array in JavaScript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Solution 01
/*
    let obj = {};
    for (let i of numbers) {
        obj[i] = true;
    }   
    console.log('Object', obj);

    let obj_keys = Object.keys(obj);
    console.log(obj_keys); // ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    let newArray = obj_keys.map(Number);
    console.log(newArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

// Solution 02

/* let newArray = [];
let array_length = numbers.length;

for (let i = 0; i < array_length; i++) {
    if (newArray.indexOf(numbers[i]) === -1) {
        newArray.push(numbers[i]);
    }
}
console.log(newArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

// Solution 03

console.log('Using Spreed: ', [...new Set(numbers)]); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]