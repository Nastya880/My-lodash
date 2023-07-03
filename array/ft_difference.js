// _.difference(array, [values])
// Создает массив значений массива, не включенных в другие заданные массивы, используя SameValueZero для сравнения на равенство. Порядок и ссылки значений результата определяются первым массивом.
// If Type(x) is different from Type(y), return false.
// If Type(x) is Number, then
// If x is NaN and y is NaN, return true.
// If x is +0 and y is -0, return true.
// If x is -0 and y is +0, return true.
// If x is the same Number value as y, return true.
// Return false.
// Return SameValueNonNumber(x, y).
// создать массив -> пройтись по массиву: если элемент не включен в исходник, то добавить в новый, иначе - игнор
// сравнивает два или более массива и возвращает разницу между ними
function ft_difference(array, values) {
  const result = [];

  for (const element of array) {
    if (!(values.includes(element))) {
      result.push(element);
    }
  }

  return result;
}

export {ft_difference}
