/** ЗАДАЧА 27 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

function printMessage(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
        console.log(`Сообщение номер ${current}`);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 2000);
  }
  
  printMessage(1, 5);

