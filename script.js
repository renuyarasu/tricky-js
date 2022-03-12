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


// 05. Scroll To Top
// Beginners very often find themselves struggling with scrolling elements into view properly. The easiest way to scroll elements is to use the scrollIntoView method. Add behavior: "smooth" for a smooth scrolling animation.

const scrollToTop = (element) => element.scrollIntoView({ behavior: "smooth", block: "start" });