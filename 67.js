/** ЗАДАЧА 67 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}

// Создайте функцию здесь
sumObjectValues = (obj)=>{
  sum = 0;
  for(i in obj){
    if(typeof obj[i] == 'number')
      sum += obj[i];
  }
  return sum
}

const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
