// _.drop(array, [n=1])
// Создает срез массива, в котором с самого начала удалены n элементов.
// создать массив - цикл по n - просто пропустить элементы или просто отрезать через слайс

function ft_drop(array, start = 1) {
  return array.slice(start);
}

export {ft_drop}
