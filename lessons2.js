(function greetUser() { // Задание 1
    // Спросим у пользователя его возраст
    var age = prompt("Ваш возраст");
    // Выведем возраст на экран
    alert("Вам " + age + " лет");

    // Спросим у пользователя его имя
    var name = prompt("Как вас зовут?");
    // Приветствуем пользователя
    alert("Добро пожаловать на сайт, " + name);
})();

// Задание 2
let a = 13; // Объявление переменной a
let b = 5;
let remainder = a % b;
console.log(remainder); // Вывод: 3

alert(a); // Теперь a определена
alert('abc' * 3); // Вывод: NaN
alert(1 / 0); // Вывод: Infinity
alert(-1 / 0); // Вывод: -Infinity
alert('2' * '3'); // Вывод: 6

// Задание 3
let x = '2';
let y = '3';

// Использование операторов для сложения чисел
let sum = parseFloat(x) + parseFloat(y); // Теперь конвертируем строки в числа
console.log("Сумма чисел равна:", sum); // Теперь результат будет правильным, ожидаем: "Сумма чисел равна: 5"

let result = sum; // Переменная result теперь определена
console.log(result); // Теперь все правильно

// Запрашиваем у пользователя числа
let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));

// Выводим результаты с использованием шаблонных строк
console.log(`Сумма чисел равна: ${num1 + num2}`);
console.log(`Разность чисел равна: ${num1 - num2}`);
console.log(`Произведение чисел равно: ${num1 * num2}`);
console.log(`Частное чисел равно: ${num1 / num2}`);
console.log(`Остаток от деления чисел равен: ${num1 % num2}`);

// Задание 4
// 1. Преобразование булевого значения в строку
console.log(String(true)); // Вывод: true

// 2. Конкатенация строки и булевого значения
console.log('a' + true); // Вывод: atrue

// 3. Преобразование булевого значения в число
console.log(Number(true)); // Вывод: 1

// 4. Сложение булевого значения и числа
console.log(true + 1); // Вывод: 2

// 5. Сложение двух булевых значений
console.log(true + true); // Вывод: 2

// 6. Вычитание двух булевых значений
console.log(true - true); // Вывод: 0

// 7. Конкатенация строки и числа
console.log(String(true) + Number(true)); // Вывод: true1 (булевое значение true преобразуется в строку "true", а также в число 1)

// Задание 5
const number = prompt("Введите число:"); // Ввод числа с клавиатуры
const numValue = Number(number);

if (numValue > 5) {
    console.log("Число больше 5");
} else if (numValue < 5) {
    console.log("Число меньше 5");
} else {
    console.log("Число равно 5");
}

const test1 = prompt("Введите значение для test1:");
const test2 = prompt("Введите значение для test2:");

if (test1 === test2) {
    console.log("Значения равны");
} else {
    console.log("Значения не равны");
}

const firstNumber = Number(prompt("Введите первое число:"));
const secondNumber = Number(prompt("Введите второе число:"));

if (firstNumber < secondNumber) {
    console.log(`Минимальное число: ${firstNumber}`);
} else if (firstNumber > secondNumber) {
    console.log(`Минимальное число: ${secondNumber}`);
} else {
    console.log("Оба числа равны");
}

const numToCheck = Number(prompt("Введите число:"));

if (numToCheck > 0 && numToCheck < 15) {
    console.log("Число больше нуля и меньше 15");
} else {
    console.log("Число не соответствует условиям");
}

// Задание 6
// Ввод значений с клавиатуры
const numVal1 = Number(prompt("Введите значение для num1:"));
const numVal2 = Number(prompt("Введите значение для num2:"));

// Проверка условий
if (numVal1 <= 1 && numVal2 >= 3) {
    console.log("num1 меньше или равно 1, а num2 больше или равно 3");
} else {
    console.log("Условия не выполнены");
}

// Задание 7
let testVar = true;

if (testVar === true) {
    console.log('+++');
} else {
    console.log('---');
}

// Задание 8
let day = 17; // Тут можно задать любое число от 1 до 31

if (day >= 1 && day <= 10) {
    console.log('Первая декада месяца');
} else if (day >= 11 && day <= 20) {
    console.log('Вторая декада месяца');
} else if (day >= 21 && day <= 31) {
    console.log('Третья декада месяца');
} else { 
    console.log('Некорректное число. День должен быть от 1 до 31.');
}

// Задание 9
// Запрашиваем у пользователя число
let number = parseInt(prompt("Введите положительное целое число:"));

// Определяем количество сотен, десятков и единиц
let hundreds = Math.floor(number / 100) % 10; // Сотни
let tens = Math.floor(number / 10) % 10;      // Десятки
let units = number % 10;                       // Единицы

// Выводим результат
console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);
