// _.compact(array)
// Создает массив, в котором удалены все ложные значения. Значения false, null, 0, "", undefined и NaN являются ложными.

function compact(array) {
  // const result = array.map((el) => {
  //   if (!el || el === null || el === 0 || el === NaN || el === undefined)
  //     return ;
  //   return el;
  // });

  // return result;
  
  const result = [];
  for (const el of array) {
    if (el && el !== null && el !== 0 && el !== NaN && el !== undefined)
      result.push(el);
  }

  return result;
}

test = ["", 1, NaN, null, 4, undefined, "undefined", 0, "some element", 5, "test"];
console.log(test);
console.log(compact(test));
