/** ЗАДАЧА 43 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */

sortProductsByPrice = (products) => {
  count = 0
  result = products
  while(true){
    for(i in result){
      if(i == 0)
        continue
      if(result[i].price < result[i-1].price){
        temp = result[i]
        result[i] = result[i-1]
        result[i-1] = temp
        count += 1
      }
    }
    if(count == 0)
      break
    count = 0
  }

  return result
}

const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

const sortedProducts = sortProductsByPrice(inputProducts)

console.log(sortedProducts) // Массив отсортированных товаров

//console.log(inputProducts) // Оригинальный массив не должен измениться
