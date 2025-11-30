// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое
let num1 = Math.ceil(Math.random() * 10)
console.log(num1);
let num2 = Math.ceil(Math.random() * 10)
console.log(num2);
function calculateAverage(num1, num2) {
  return (num1 + num2) / 2
}
calculateAverage(num1, num2)
