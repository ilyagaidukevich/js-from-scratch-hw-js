/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

let string = 'pussy';

function doubleEachCharacter(string) {
    stringArray = string.split('');
    let newArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        newArray.push(stringArray[i] + stringArray[i])
    }
    doubleStringArray = newArray.join('');
    return doubleStringArray
}

console.log(doubleEachCharacter(string))
