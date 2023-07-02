import {chunk} from "./chunk.js";

const test1 = [1, 2, 3, 4, 5, 6];

// console.log(chunk(test)); // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ] ]
// console.log(chunk(test, 4)); // [ [ 1, 2, 3, 4 ], [ 5, 6 ] ]
// console.log(chunk(test, 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
// console.log(chunk(test, 8)); // [ [ 1, 2, 3, 4, 5, 6 ] ]
// console.log(chunk("test"));
console.log(`Test chunk in array ${test1} is ${_.isEqual(chunk(test1), _.chunk(test1))}`);
