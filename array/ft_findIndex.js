// _.findIndex(array, [predicate=_.identity], [fromIndex=0])
// Этот метод подобен _.findIndex, за исключением того, что он возвращает индекс первого элемента, предикат возвращает true вместо самого элемента.

function ft_findIndex(array, predicate, fromIndex = 0) {
  if (array.length === 0)
    return -1;

  for (fromIndex; fromIndex < array.length; fromIndex++) {
    if (predicate(array[fromIndex], fromIndex, array)) {
      return fromIndex;
    }
  }

  return -1;
}

export {ft_findIndex}
