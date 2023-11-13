//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
/*const currentDate = new Date();
console.log(currentDate);*/

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
/*const currentYear = new Date();
console.log(currentYear.getFullYear());*/

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
/*const currentMonth = new Date;
console.log(currentMonth.getMonth());*/

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
/*const currentDay = new Date();
console.log(currentDay.getDate());*/

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
/*const birthday = new Date("2023-02-25");
console.log(birthday);*/

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
/*const futureDate = new Date("2024-02-25");
console.log(futureDate);*/

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
/*const futureDate = new Date(Date.parse("2024-01-01"));
const currentDate = Date.now();
const tillNewYear = Math.floor((futureDate - currentDate) / (1000 * 60 * 60 * 24));
console.log("До нового года: " + tillNewYear + " дня(дней)!"); */

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
/*const pastDate = new Date("2023-09-01");
console.log(pastDate);*/

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
/*const pastDate = new Date(Date.parse("2023-09-01"));
const currentDate = Date.now();
const daysPased = Math.floor((currentDate - pastDate) / (1000 * 60 * 60 * 24));
console.log("С начала учебного года прошло: " + daysPased + " дня(дней)!");*/

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
/*const nextWeek = new Date("2023-10-05")
console.log(nextWeek);*/

//Задание 11
// Выведите в консоль день недели для nextWeek
/*const nextWeek = new Date("2023-10-05")
console.log(nextWeek.getDay());*/

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
/*const futureYear = new Date().getFullYear() + 5;
console.log(futureYear);*/

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
/*const futureDateInFutureYear = new Date("2024-02-25");
console.log(futureDateInFutureYear);*/

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
/*const currentYear = new Date().getFullYear()
const futureYear = new Date("2024-02-25").getFullYear();
const diffYears = futureYear - currentYear;
console.log(diffYears);*/

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
/*const strDate = '2023-06-15T08:30:00.000Z';
const date = new Date(Date.parse(strDate));
console.log(date);*/
/*const strDate = '2023-06-15T08:30:00.000Z';
const date = new Date(strDate);
console.log(date);*/

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
/*const strDate = '2023-06-15T08:30:00.000Z';
const date = Date.parse(strDate);
console.log(date);*/

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
/*const date = '2023/06/15';
const wrongDate = new Date(Date.parse(date));
if (wrongDate === NaN) {
  console.log('Неправильный формат даты!!!')
} else {
  console.log('Правильный формат даты!');
}*/

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
/*const number = 231;
if (number > 0) {
  console.log("Число положительное");
} else if (number < 0) {
  console.log("Число отрицательное");
} else {
  console.log("Число нейтральное");
}*/

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
/*const number = 231;
if (number % 2 === 0) {
  console.log("Число чётное");
}  else {
  console.log("Число нечётное");
}*/

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
/*const number = 231;
if (number % 3 === 0) {
  console.log("Число кратно 3");
}  else {
  console.log("Число не кратно 3");
}*/

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
/*const number = 231;
if (number >=0 && number <=9) {
  console.log("Число однозначное");
}  else {
  console.log("Число не является однозначным");
}*/

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
/*const number = 231;
if (number >=10 && number <=99) {
  console.log("Число двузначное");
}  else {
  console.log("Число не является двузначным");
}*/

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
/*const number = 0;
if (number > 0) {
  console.log("Число положительное");
} else if (number < 0) {
  console.log("Число отрицательное");
} else {
  console.log("Число нейтральное");
}*/

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
/*const number = 375;
if (number % 5 === 0 || number % 7 === 0) {
  console.log("Число кратно 5 или 7");
} else {
  console.log("Число не является кратным ни 5, ни 7");
}*/

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
/*const number = -1;
if (number > 0) {
  console.log("Число положительное");
} else if (number < 0) {
  console.log("Число отрицательное");
} else {
  console.log("Число равно нулю");
}*/

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
/*const number = 231;
if (number >=100 && number <=999) {
  console.log("Это трёхзначное положительное число");
}  else {
  console.log("Число не является трёхзначным");
}*/

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
/*let day = 7;
switch (day) {
  case 0:
    day = "Воскресенье";
    break;
  case 1:
    day = "Понедельник";
    break;
  case 2:
    day = "Вторник";
    break;
  case 3:
    day = "Среда";
    break;
  case 4:
    day = "Четверг";
    break;
  case 5:
    day = "Пятница";
    break;
  case 6:
    day = "Суббота";
    break;
  default:
    day = "Неизвестный день недели";
}
console.log( "Сегодня " + day.toLowerCase() + ".");*/

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
/*let direction = 'W';
switch (direction) {
  case 'N':
    direction = 'Север';
    break;
  case 'S':
    direction = 'Юг';
    break;
  case 'E':
    direction = 'Восток';
    break;
  case 'W':
    direction = 'Запад';
    break;
  default:
    direction = 'Неизвестное направление';
}
console.log( "Это " + direction.toLowerCase() + ".");*/
