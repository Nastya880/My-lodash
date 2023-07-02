// _.concat(array, [values])
// Создает новый массив, объединяющий массив с любыми дополнительными массивами и/или значениями.
// создать массив -> проверить остаточные параметры: значение это массив или нет ->  запушить значение 

function ft_concat(...values) {
  const result = [];

  // result.push(array);
  for (const element of values) {
    if (Array.isArray(element))
      result.push(...element);
    else
      result.push(element);
  }
  
  return result;
}

export {ft_concat}
