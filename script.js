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


// 4. Get the parameters from the URL
// JavaScript makes fetching the parameters from any address a walk in the park using the URL object.

const url = new URL(window.location.href);
const paramValue = url.searchParams.get("paramName");
console.log(paramValue);