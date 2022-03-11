// Tricky JS Program
console.clear();

// Understand BigInt in JavaScript ES2020-21

let num = Number.MAX_SAFE_INTEGER;

console.log('Number_01: ', num); // 9007199254740991
console.log('Number_02: ', ++num); // 9007199254740992
console.log('Number_03: ', ++num); // 9007199254740992
console.log('Number_04: ', ++num); // 9007199254740992
console.log('Number_05: ', ++num); // 9007199254740992

let new_num = 9007199254740992n;

console.log('New Number_01: ', new_num); // 9007199254740992n
console.log('New Number_02: ', ++new_num); // 9007199254740993n
console.log('New Number_03: ', ++new_num); // 9007199254740994n
console.log('New Number_04: ', ++new_num); // 9007199254740995n
console.log('New Number_05: ', ++new_num); // 9007199254740996n
