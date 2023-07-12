// _.defaults(object, [sources])
// Назначает собственные и унаследованные перечисляемые строковые свойства исходных объектов целевому объекту для всех свойств назначения, которые разрешаются в значение undefined. Исходные объекты применяются слева направо. После установки свойства дополнительные значения того же свойства игнорируются.

function ft_defaults(...input) {
  const result = {};

  for (const val of input) {
    const keys = Object.keys(val);
    if (result[keys[0]] === undefined) {
      result[keys[0]] = val[keys[0]];
    }
  }

  return result;
}

export {ft_defaults}
