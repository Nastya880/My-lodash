// _.differenceWith(array, [values], [comparator])
// Этот метод подобен _.difference, за исключением того, что он принимает компаратор, который вызывается для сравнения элементов массива со значениями. Порядок и ссылки значений результата определяются первым массивом. Компаратор вызывается с двумя аргументами: (arrVal, othVal).

function ft_differenceWith(array = [], values = [], comparator) {
  const result = [];

  for (const element of array) {
    const check = values.some(value => comparator(element, value));

    if (check === false) {
      result.push(element);
    }
  }

  return result;
}

export {ft_differenceWith}
