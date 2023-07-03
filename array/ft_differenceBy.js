// _.differenceBy(array, [values], [iteratee=_.identity])
// Этот метод подобен _.difference, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента массива и значений для создания критерия, по которому они сравниваются. Порядок и ссылки значений результата определяются первым массивом. Итерация вызывается с одним аргументом:
// (value).

//последним аргументом он принимает дополнительные параметры критерия, по которому переданные массивы будут сравниваться
// _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]
// _.differenceBy([{ ‘x’: 2 }, { ‘x’: 1 }], [{ ‘x’: 1 }], ‘x’);
// => [{ ‘x’: 2 }]

// Создать массив -> применить итерационную функцию к values -> в цикле по исходнику проверить включено ли значение (к которому применена итерационная функция)

function ft_differenceBy(array, values = [], iteratee = () => {}) {
  const result = [];
  const modifiedArray = values.map(iteratee);

  for (const element of array) {
    if (!(modifiedArray.includes(iteratee(element))))
      result.push(element);
  }

  return result;
}

export {ft_differenceBy}
