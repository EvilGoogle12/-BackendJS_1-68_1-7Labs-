/** ЗАДАЧА 52 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array{
    sum(){
        let i = 0
        this.forEach((el)=>i+=el)
        return i
    }

    onlyNumbers(){
        let num = []
        this.forEach((el)=>{
            if(typeof el == 'number')
                num.push(el)
        })
        return num
    }


}

exA = new ExtendedArray(1,2,3)
console.log(exA.sum())
exA.push('343', '23')
console.log(exA)
console.log(exA.onlyNumbers())