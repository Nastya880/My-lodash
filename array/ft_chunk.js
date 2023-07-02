// _.chunk(array, [size=1])
// Создает массив элементов, разбитых на группы по длине. Если массив не может быть разделен равномерно, последним фрагментом будут оставшиеся элементы.

function ft_chunk(array, size = 1) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    const arr = array.slice(i, i + size);
    result.push(arr);
  }

  return result;
}

export {ft_chunk}
 
