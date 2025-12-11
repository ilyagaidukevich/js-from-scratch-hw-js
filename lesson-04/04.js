/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

let string = 'bum';
console.log(string.length)

function doubleEachCharacter(string) {
    let doubleString = [];
    for (let i = 0; i < string.length; i++) {
        doubleString.push(string[i] + string[i])
    }
    return doubleString.join('')
}

console.log(doubleEachCharacter(string))
