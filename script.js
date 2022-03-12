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


// 04. Detect Dark Mode
// With the rising popularity of dark mode, it is ideal to switch your app to dark mode if the user has it enabled in their device. Luckily, media queries can be utilized for making the task a walk in the park.

const isDarkMode  = () => 
window.matchMedia && 
window.matchMedia ('(prefers-color-scheme: dark)').matches;

let result = isDarkMode();
console.log(result); 