/** ЗАДАЧА 68 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Создайте функцию "sumPositiveNegative" здесь
sumPositiveNegative = (n)=>{
    return {
        positive: (()=>{
            sum = 0
            n.forEach((el)=>{
                if(el > 0)
                    sum += el
            })
            return sum
        })(),
        negative: (()=>{
            sum = 0
            n.forEach((el)=>{
                if(el < 0)
                    sum += el
            })
            return sum
        })(),
    }
}

const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }
