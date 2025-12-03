// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае
let num = Math.ceil(Math.random() * 10);
console.log(num);

function isEven(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

isEven(num);

