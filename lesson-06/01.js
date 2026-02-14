/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

let favouriteBooks = [
  {
    id: 1,
    title: 'Head First JavaScript Project',
    author: 'Eric Freeman',
    price: 29.99,
    genre: 'Programming'
  },
  {
    id: 2,
    title: 'Head First JavaScript Project',
    author: 'Kylie Simpson',
    price: 39.99,
    genre: 'Programming'
  },
  {
    id: 3,
    title: 'JavaScript: The Defenitive Guide',
    author: 'David Flanagan',
    price: 49.99,
    genre: 'Programming'
  },
]

let filter = favouriteBooks.filter((element, index) => element.price > 30)
