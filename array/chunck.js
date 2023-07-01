// _.chunk(array, [size=1])
// Создает массив элементов, разбитых на группы по длине. Если массив не может быть разделен равномерно, последним фрагментом будут оставшиеся элементы.

function chunk(array, size = 1) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    const arr = array.slice(i, i + size);
    result.push(arr);
  }
  
  return result;
}

// const test = [1, 2, 3, 4, 5, 6];
// console.log(chunk(test)); // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ] ]
// console.log(chunk(test, 4)); // [ [ 1, 2, 3, 4 ], [ 5, 6 ] ]
// console.log(chunk(test, 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
// console.log(chunk(test, 8)); // [ [ 1, 2, 3, 4, 5, 6 ] ]
