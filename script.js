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


// 3. Hide elements
// You can just toggle the visibility of an element using the style.visibility property and in case you want to remove it from the render flow, you can use the style.display property.

const hideElement = (element, removeFromFlow = false) => {
  removeFromFlow
    ? (element.style.display = "none")
    : (element.style.visibility = "hidden");
};