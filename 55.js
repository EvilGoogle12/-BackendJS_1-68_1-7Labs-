/** ЗАДАЧА 55 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */
//ответ: secondFunction будет являться константой и его уже не переопредлить

function firstFunction(a, b) {
  return a + b
}

const secondFunction = function (a, b) {
  return a + b
}

console.log(firstFunction(1, 2))
console.log(secondFunction(1, 2))
firstFunction = 10
console.log(firstFunction)
//secondFunction = 10 - нелтя возникнет ошибка

