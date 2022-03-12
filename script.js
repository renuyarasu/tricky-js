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


// 06. Scroll To Bottom
// Just like the scrollToTop method, the scrollToBottom method can easily be implemented using the scrollIntoView method, only by switching the block value to end.

const scrollToBottom = (element) =>  element.scrollIntoView({ behavior: "smooth", block: "end" });