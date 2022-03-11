// Tricky JS Program
console.clear();

// How to determine string is unique or not in JavaScript

function unique(str) {
    let values = [];
    for (let letter of str) {
        if (values.indexOf(letter) !== -1) {
            return false // Represent string is unique 
        }
        values.push(letter);
    }
    return true;
}

console.log(unique('abcdef')); // true
console.log(unique('abadea')); // false
