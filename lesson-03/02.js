// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае
let num = Math.floor(Math.random() * 10);
if (num === 0) {
    num = -Math.ceil(Math.random() * 10)
}

console.log(num);

function isEven(num) {
    if (num % 2 === 1) {
        return false
    } else {
        return true
    }
}

console.log(isEven(num));
