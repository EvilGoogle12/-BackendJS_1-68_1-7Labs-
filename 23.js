/** ЗАДАЧА 23 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

cars = [
    {
        carBrand: "car_1",
        price: 1000000,
        isAvailableForSale: true
    },
    {
        carBrand: "car_2",
        price: 2000000,
        isAvailableForSale: true
    },
    {
        carBrand: "car_3",
        price: 3000000,
        isAvailableForSale: true
    },
]
cars.push({
    carBrand: "car_4",
    price: 4000000,
    isAvailableForSale: false
})

console.log(cars)