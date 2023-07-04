// _.flatten(array)
// Выравнивает массив на один уровень в глубину.
// _.flatten([1, [2, [3, [4]], 5]]);
// // => [1, 2, [3, [4]], 5]

function ft_flatten(array) {
  const result = [];

  for(const element of array) {
      if (Array.isArray(element)) {
          result.push(...element);
      } else {
          result.push(element);
      }
  }

  return result;
}

export {ft_flatten}
