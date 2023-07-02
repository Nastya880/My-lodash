// _.compact(array)
// Создает массив, в котором удалены все ложные значения. Значения false, null, 0, "", undefined и NaN являются ложными.

function ft_compact(array) {
  const result = [];
  for (const el of array) {
    if (el && el !== null && el !== 0 && el !== NaN && el !== undefined)
      result.push(el);
  }

  return result;
}

export {ft_compact}
