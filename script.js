// Tricky JS Program
console.clear();

// expression is valid or not in JavaScript

let expression_01 = '(a)';
let expression_02 = '((b))';
let expression_03 = '(a(b))';
let expression_04 = '(b)';
let expression_05 = '(b';

const is_valid = (expression) => {
    let characters = expression.split("");
    let stack = [];
    for (let i = 0; i < characters.length; i++) {
        let c = characters[i];
        if (c !== '(' && c !== ')') continue;
        else if (c === '(') stack.push(c);
        else if (c === ')') {
            if (stack.length === 0) return false;
            else stack.pop();
        }
    }
    return stack.length === 0;
};

let one = is_valid(expression_01) ? `${expression_01} currect expression` : `${expression_01} incurrect expression`;
let two = is_valid(expression_02) ? `${expression_02} currect expression` : `${expression_02} incurrect expression`;
let three = is_valid(expression_03) ? `${expression_03} currect expression` : `${expression_03} incurrect expression`;
let four = is_valid(expression_04) ? `${expression_04} currect expression` : `${expression_04} incurrect expression`;
let five = is_valid(expression_05) ? `${expression_05} currect expression` : `${expression_05} incurrect expression`;

console.log(one); // currect expression
console.log(two); // currect expression
console.log(three); // currect expression
console.log(four); // currect expression
console.log(five); // incurrect expression
