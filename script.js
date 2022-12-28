//Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArguments() {
    console.log(arguments.length)
}
countArguments(1, 2, 3, 4)

//Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function compareNumbers(first, second) {
    if (first > second) {
        return 1
    }
    if (second > first) {
        return -1
    }
    if (second === first) {
        return 0
    }
}
console.log(compareNumbers(1, 2))

//Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}
console.log(factorialize(4))

//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function mergeNumbers(num1, num2, num3) {
    console.log(`${num1}${num2}${num3}`)
}
mergeNumbers(1, 4, 9)

//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function calculatePerimeter(length, width) {
    if (width === undefined) {
        return length * 4
    } else {
        return (length + width) * 2
    }
}
console.log(calculatePerimeter(3, 5))

//Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function isPerfectNumber(number) {
    var temp = 0;
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("It is a perfect number.");
        return true
    } else {
        console.log("It is not a perfect number.");
        return false
    }
}
isPerfectNumber(497)

//Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.
function findPerfectNumberInRange(rangeStart, rangeEnd) {
    let perfectNumbersInRange = []
    for (let index = rangeStart; index <= rangeEnd; index++) {
        if (isPerfectNumber(index)) {
            perfectNumbersInRange.push(index)
        }

    }
    console.log(perfectNumbersInRange)
}
findPerfectNumberInRange(1, 500)