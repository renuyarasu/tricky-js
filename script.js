// Tricky JS Program
console.clear();

// 6 Killer Functions in JavaScript that Made My Life Easier
// https://tapajyoti-bose.medium.com/6-killer-utility-functions-in-javascript-86d52af43cd3

// 01. Check if an element is visible in the viewport
// 02. Detect device
// 03. Hide elements
// 04. Get the parameters from the URL
// 05. Deep copy an object with ease
// 06. wait function


// 6. wait function
// JavaScript does ship with a setTimeout function, but it does not return a Promise object, making it hard to use in async functions. So we have to write our own wait/sleep function.

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const asyncFunc = async () => {
    await wait(1000);
    console.log("async");
};
asyncFunc(); // async