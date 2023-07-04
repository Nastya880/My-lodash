const delimetr = (function_name) => console.log(`============================${function_name}============================`);

const ARRAYS = [
  [1, 2, 3, 4, 5, 6],
  ["first", "second", "third", 4, 5, 6],
  ["first", "undefined", "null", undefined, null, 0, 4, 9, undefined, 3, "", "hello", false],
  [5, 6, 7, 2, 0, 1],
  [1.3, 2.5, 3.8, 4.4, 5.7, 6.3],
  ["first", "second", "third", 4.6, 5.2, 6.98],
  [1, 2],
  [],
  [1, [2, [3, [4]], 5]]
];

const message_results = (numberResultTrue, numberResultFalse) => {
  console.log(`Number of tests with TRUE results = ${numberResultTrue}`);
  console.log(`Number of tests with FALSE results = ${numberResultFalse}`);
}

export {delimetr, ARRAYS, message_results}
