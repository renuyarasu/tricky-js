// Tricky JS Program
console.clear();

// Split Array into Chunks
const chunk = (myArr, n) => {
    let chunked = [];
    for (let element of myArr) {
        let last = chunked[chunked.length - 1];
        if (!last || last.length === n) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(`Given Array: `, numbers); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 0

console.log(`Chunked Array: `, chunk(numbers, 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 0 ] ]