// _.flattenDeep(array)
// Рекурсивно выравнивает массив на один уровень в глубину.

function ft_flattenDeep(array) {
  const result = [];

  for(const element of array) {
      if (Array.isArray(element)) {
          result.push(...flattenDeep(element));
      } else {
          result.push(element);
      }
  }

  return result;
}

export {ft_flattenDeep}
