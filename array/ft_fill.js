// _.fill(array, value, [start=0], [end=array.length])
// Заполняет элементы массива значением от начала до конца, но не включая его.

function ft_fill(array, value, start = 0, end = array.length) {
  for (let i = start; i < end; i += 1) {
    array[i] = value;
  }
  
  return array;
}

export {ft_fill}
