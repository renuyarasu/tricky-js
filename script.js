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


// 1. Check if an element is visible in the viewport
// IntersectionObserver is a great way to check if an element is visible in the

const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // `entry.target` is the dom element
        console.log(`${entry.target.id} is visible`);
      }
    });
  };
  const options = {
    threshold: 1.0,
  };
  const observer = new IntersectionObserver(callback, options);
  const btn = document.getElementById("btn");
  const bottomBtn = document.getElementById("bottom-btn");
  observer.observe(btn);
  observer.observe(bottomBtn);