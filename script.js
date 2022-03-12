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


// 02. Copy to Clipboard

const copyToClipboard = (text) => navigator.clipboard?.writeText && navigator.clipboard.writeText(text);

let result = copyToClipboard("Hello World!");
console.log(result);
