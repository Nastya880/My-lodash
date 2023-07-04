// _.dropRight(array, [n=1])
// Создает срез массива, в котором с конца удалены n элементов.

function ft_dropRight(array, n = 1) {
  const result = [];

  for(let i = array.length - 1; i < n; i--) {
    if (array[i])
    	result.push(array[i]);
  }

  return result;
}

export {ft_dropRight}
