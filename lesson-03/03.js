// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.
let num1 = Math.ceil(Math.random() * 10) // 8
let num2 = Math.ceil(Math.random() * 10) // 8
let num3 = Math.ceil(Math.random() * 10) // 5
console.log(num1, num2, num3)

function findLargest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else if (num3 > num1 && num3 > num1) {
        return num3
    } else {
        return num1 
    }
}

findLargest(num1, num2, num3)
