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


// 07. Generate Random Color
// Does your application rely on random color generation? Look no further, the following snippet got you covered!

const generate_random_hex_color = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
console.log(generate_random_hex_color());