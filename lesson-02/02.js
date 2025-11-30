/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = Math.ceil(Math.random() * 6) // your code
console.log('Первый бросок: ' + dice1)
let dice2 = Math.ceil(Math.random() * 6) // your code
console.log('Первый бросок: ' + dice2)
let isWinningDouble // your code

if (dice1 === 4 && dice2 === 4 || dice1 === 5 && dice2 === 5 || dice1 === 6 && dice2 === 6) {
    isWinningDouble = true
} else {
    isWinningDouble = false
}

if (isWinningDouble === true) {
  console.log('Выигрышный дубль!')
} else {
  console.log('Не выигрышный дубль.')
}
