/** ЗАДАЧА 65 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

str.split('').forEach((el)=>{
    if(vowels.indexOf(el) != -1)
        vowelsCount++
})

console.log(vowelsCount)
// 9
