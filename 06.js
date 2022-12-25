/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

output = [
    string = "",
    num = 1,
    boolean = true,
    null_ = null,
    undefi = undefined,
    obj = {
        first : 1,
        second : 2
    },
    arr = [0, 1, 2] 
]
for (i = 0; i < output.length; i++) {
    console.log(typeof output[i])
}