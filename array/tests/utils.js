const delimetr = (function_name) => console.log(`============================${function_name}============================`);

const ARRAYS = [
  [1, 2, 3, 4, 5, 6],
  ["first", "second", "third", 4, 5, 6],
  ["first", "undefined", "null", undefined, null, 0, 4, 9, undefined, 3, "", "hello", false],
  [5, 6, 7, 2, 0, 1]
];

const message_results = (numberResultTrue, numberResultFalse) => {
  console.log(`Number of tests with TRUE results = ${numberResultTrue}`);
  console.log(`Number of tests with FALSE results = ${numberResultFalse}`);
}

export {delimetr, ARRAYS, message_results}