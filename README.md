# My-lodash
[Lodash](https://lodash.com/docs/4.17.15) methods for practice

## Array
### chunk(array, [size=1])
Создает массив элементов, разбитых на группы по длине. Если массив не может быть разделен равномерно, последним фрагментом будут оставшиеся элементы.

### compact(array)
Создает массив, в котором удалены все ложные значения. Значения false, null, 0, "", undefined и NaN являются ложными.

### concat(array, [values])
Создает новый массив, объединяющий массив с любыми дополнительными массивами и/или значениями.

### difference(array, [values])
Создает массив значений массива, не включенных в другие заданные массивы, используя SameValueZero для сравнения на равенство. Порядок и ссылки значений результата определяются первым массивом.

### differenceBy(array, [values], [iteratee=_.identity])
Работает схоже с difference, за исключением того, что последним аргументом он принимает дополнительные параметры критерия, по которому переданные массивы будут сравниваться.
