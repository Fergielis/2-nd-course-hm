// hw 2-2

// 1
// let a = 10;
// alert(a);
// a = 20;
// alert(a);

// 2
// const iphoneYear = String(2007);
// alert(iphoneYear);

// 3
// const creatorJs = "Brendan Eich";
// alert(creatorJs);

// 4
// let b = 10;
// let c = 2;
// let result1 = b + c;
// let result2 = b - c;
// let result3 = b * c;
// let result4 = b / c;
// alert(`${result1},${result2},${result3},${result4}`);

// 5
// let result = 2**5;
// alert(result);

// 6
// let a6 = 9;
// let b6 = 2;
// let result6 = a % b;
// alert(result6);

// 7
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);

// 8
// let age = Number(prompt("Сколько вам лет?"));
// alert(age);

// 9
// let user = {
//     name: "Babulya Raskol'nikova",
//     age: 217,
//     "isAdmin": false
// }

// 9.1
// user["city of residence"] = 'Saint-Petersburg';

// 9.2
// user.age = 60;

// 9.3
// delete user["city of residence"];

// 9.4
// let info = prompt("Какую информацию хотите узнать о пользователе?");
// alert(user[info]);

// 10
// let yourName = prompt("write your name, please:)");
// alert(`Hello, ${yourName} !`);

// hw 2-3
// 1
// let password = 'пароль';
// let answer = String(prompt('Введите пароль'));
// if (answer === password) {
//     alert('Пароль введен верно'); 
// } else {
//     alert('Пароль введен неправильно');
// }

// 2
// let c = 18;
// if (c > 0 && c < 10) {
//     alert('Верно');
// } else {
//     alert('Неверно');
// }

// 3
// let d = 33;
// let e = 85;
// if (d > 100 || e > 100) {
//     console.log('right');
// } else {
//     console.log('wrong');
// }

// 4
// let a = "2";
// let b = "3";
// alert(Number(a) + Number(b));

// 5
// let monthNumber = 12;
// switch (monthNumber) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("winter");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("autumn");
//     break;
//   default: monthNumber >= 13;
//     console.log("wrong number of month");
//     break;
// }

// 6
// done

// 7
// let a = prompt("Пожалуйста, введите любое число");
// if (isNaN(a)) {
//     console.log('not a number')
// } else {
//     console.log('is number')
// }
// if (a % 2 === 0) {
//     alert('четное')
// } else {
//     alert('нечетное');  
// }

// 8
// let clientOS = prompt("Введите цифру вашей операционной системы 0 — iOS, 1 — Android");
// if (clientOS == 0) {
//     console.log("Установите версию приложения для iOS по ссылке");
// } else {
//     console.log("Установите версию приложения для Android по ссылке");
// }

// 9
// let clientOS = prompt("Введите цифру вашей операционной системы 0 — iOS, 1 — Android");
// let clientDeviceYear = prompt('Год выпуска вашей операционной системы ранее 2015 года? 0 - да, 1 - нет')

// if (clientOS == 0) {
//     if (clientOS == 0 && clientDeviceYear == 1) {
//       console.log("Установите версию приложения для iOS по ссылке");
//     } else {
//       console.log("Установите облегченную версию приложения для iOS по ссылке");
//     }
// } else {
//     if (clientOS == 1 && clientDeviceYear == 1) {
//         console.log("Установите версию приложения для Android по ссылке");
//     } else {
//         console.log("Установите облегченную версию приложения для Android по ссылке");
//     }
    
// }


// hw 2.4
// practice
// Напишите программу, которая будет выводить в консоль сообщения пользователя, введенные через prompt, пока пользователь не введет break. Если пользователь введёт в prompt continue, то в консоль ничего не нужно выводить, а пользователь должен продолжить вводить сообщения.

// while (true) {
//     const msg = prompt('write your message')
//     if (msg === 'continue') {
//         continue;
//     }
//     console.log(msg);
//     if (msg === 'break') {
//         break;
//     }
// }

// 1
// let a = 0;
// while (a < 2) {
//     console.log('hello');
//     a++;  
// }

// 2
// let b = 1;
// while (b < 6) {
//     console.log(b);
//     b++;
// }

// 3
// let c = 7;
// while (c < 23) {
//     console.log(c);
//     c++;
// }

// 4
// const obj = {
//     Коля: '200',
//     Вася: '300',
//     Петя: '400',
// }
// for (const name in obj) {
//     console.log(`${name} - зарплата ${obj[name]} долларов`)
// }

// 5
// let n = 1000;
// let num = 0;
// while(n >= 50) {
//     n = n/2;
//     num++;
// }
// console.log(`количество итераций ${num}`);

// 6
// let friday = 5;
// for (let dayNumber = 1; dayNumber <= 31; dayNumber++) {
//   if (dayNumber % 7 == 5) {
//     console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
//   }
// }
// Где использовать friday? я не понимаю в целом решение этой задачи

// hw-5
// practice
// const user = {
//     name: 'Li',
//     age: 28,
//     city: 'Toronto',
// 
//     getInfo() {
//         return `пользователь ${user.name}, возраст ${user.age}, проживает в городе ${user.city}`;
//     }
// }
// console.log(user.getInfo());


// function getRectangleArea() {
//     return this.width * this.height;
// } 
// function getRectanglePerimeter() {
//     return this.width * 2 + this.height * 2;
// }
// const square1 = {
//     width: 40,
//     height: 15,
//     getRectangleArea: getRectangleArea,
//     getRectanglePerimeter: getRectanglePerimeter,
// };
// const square2 = {
//     width: 60,
//     height: 38,
//     getRectangleArea: getRectangleArea,
//     getRectanglePerimeter: getRectanglePerimeter,
// };
// console.log(square1.getRectangleArea());
// console.log(square1.getRectanglePerimeter());
// console.log(square2.getRectangleArea());
// console.log(square2.getRectanglePerimeter());

// 1
// function getLessNumber(a, b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// console.log(getLessNumber(8, 4));
// console.log(getLessNumber(6, 6));

// 2
// function checkNumber(a) {
//     if (a % 2 == 0) {
//         return "even";
//     } else {
//         return "uneven";
//     }
// }
// 
// console.log(checkNumber(9));

// 3
// function calc(a) {
//     let exp = a ** 2;
//     console.log(`${exp}`);
// }
// calc(5);

// function exp2(b) {
//     return b ** 2;
// }
// let result2 = exp2(8);
// console.log(result2);

// 4
// let age = prompt('how old are you?');

// function checkAge(age) {
//     if (age < 0) {
//         alert("wrong number");
//     } else if (age >= 0 && age <= 12) {
//         alert("hello friend");
//     } else {
//         alert("welcome");
//     };
// };
// checkAge(age);

// 5
// let userNum = prompt('write number');
// let userNum2 = prompt('write second number');
// function mult(userNum, userNum2) {
//     if (isNaN(userNum) || isNaN(userNum2)) {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return userNum * userNum2;
//     }
// }
// console.log(mult(userNum, userNum2));

// function mult2(a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return a * b;
//     }
// }
// console.log(mult2(5, 'р'));


// 6
// function cubeNumber() {
//     let answer = prompt("write any number");
//     if (answer == NaN) {
//         return "Переданный параметр не является числом";
//     } else { 
//         return `${answer} в кубе равняется ${answer ** 3}`
//     }
// }
// console.log(cubeNumber());

// 7
// function getArea() {
//     console.log(`${this.radius ** 2 * 3.14}`);
// }
// function getPerimetr() {
//     console.log(`${this.radius * 2 * 3.14}`);
// }

// let circle1 = {
//     radius: 83,
//     getArea: getArea,
//     getPerimetr: getPerimetr,
// }
// let circle2 = {
//     radius: 19,
//     getArea: getArea,
//     getPerimetr: getPerimetr,
// }

// circle1.getArea();
// circle2.getArea();
// circle1.getPerimetr();
// circle2.getPerimetr();

// 8
// function time() {
//     let monthNumber = Number(prompt("Введите число от 1 до 12"));
//     switch (monthNumber) {
//       case 1:
//       case 2:
//       case 12:
//         console.log("winter");
//         break;
//       case 3:
//       case 4:
//       case 5:
//         console.log("spring");
//         break;
//       case 6:
//       case 7:
//       case 8:
//         console.log("summer");
//         break;
//       case 9:
//       case 10:
//       case 11:
//         console.log("autumn");
//         break;
//       default:
//         monthNumber >= 13;
//         console.log("wrong number of month");
//         break;
//     }
// }
// 
// или

// function timeOfYear() {
//     let monthNumber = prompt("Введите число от 1 до 12");
//     if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
//         alert('зима');
//     } else if (monthNumber >= 3 && monthNumber <= 5) {
//         alert("весна");
//     } else if (monthNumber >= 6 && monthNumber <= 8) {
//         alert("лето");
//     } else if (monthNumber >= 9 && monthNumber <= 11)
//     {
//         alert("осень");
//     } else {
//         alert("неправильное число");
//     }
// };









// 2.6
// практика
// const newspaper = {
//     sports: {
//         title: "ARod Hits Home Run",
//         sportsWriters: ["Miramon Nuevo", "Rick Reilly", "Woddy Paige"],
//     },
//     business: {
//         title: "GE Stock Dips Again",
//         businessWriters: ["Adam Smith", "Albert Humphrey", "Charles Handy"],
//     }
//     movies: {
//         title: "Superman Is A Flop",
//         moviesWriters: ["Rogert Ebert", "Andrew Sarris", "Wesley Morris"],
//     }
// };

// newspaper.sports.title; 
// ARod Hits Home Run
// newspaper.business.writers[0]; 
// Adam Smith
// newspaper['movies']['title']; 
// Superman Is A Flop



// 1
// let a = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//     if (a[i] == 10) break;
// }

// 2
// let b = [1, 5, 4, 10, 0, 3];
// b.forEach ((el,index) => {
//     if (el == 4) {
//        console.log(`${el} : ${index}`); 
//     }
// });

// 3
// let c = [1, 3, 5, 10, 20];
// c = c.join(' ');
// console.log(c);

// 4
// let d = [];
// for (let i = 0; i < 3; i++) {
//     d[i] = [];
//     for (let j = 0; j < 3; j++) {
//         d[i].push(1);
//     } 
// }
// console.log(d);

// 5
// let e = [1, 1, 1];
// e.push(2, 2, 2);
// console.log(e);

// 6
// let f = [9, 8, 7, "a", 6, 5];
// f = f.sort();
// let newArray = f.filter(item => Number(item));
// console.log(newArray);

// 7
// let g = [9, 8, 7, 6, 5];
// let userNumber = Number(prompt('Введите числоот 1 до 10'));
// let search = g.includes(userNumber);
// console.log(search);

// 8
// let h = 'abcdef';
// h = h.split('').reverse().join('');
// console.log(h);

// 9
// let k = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// k = k.join(',').split();
// console.log(k);

// 10
// let l = [8, 3, 7, 1, 5, 9, 2, 4, 6];
// for (let i = 0; i < l.length - 1; i++) {
//     let sum = l[i] + l[i+1];
//     console.log(sum);
// };

// 11
// const m = [ 85, 9, 63, 4, 7, 20, 15];
// let result = m.map(item => (item**2));
// console.log(result);

// 12
// const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// const lengthWords = getLengthWords.map(getLengthWords => getLengthWords.length);
// console.log(lengthWords);

// 13
// function filterPositive(array) {
//     let result = array.filter(item => item < 0);
//     return result;
// };
// console.log(filterPositive([-1, 0, 5, -10, 56]));
// console.log(filterPositive([-25, 25, 0, -1000, -2]));

// 14











// 2-7
// пример
// const currentDate = new Date();
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(currentDate.toLocaleDateString('ru-RU', options)); 


// let currentDate = new Date();
// console.log(currentDate.toLocaleTimeString("ru-RU"));

// 1
// let lowerCase = 'js';
// let upperCase = lowerCase.toUpperCase();
// console.log(upperCase);

// 2
// const things = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = 'ко';
// let arr = [];
// things.forEach((things) => {
//     if (things.toLowerCase().startsWith(search.toLowerCase())) {
//         arr.push(things);
//     }
// });
// console.log(arr);

// функция

const myArr = ["Кошка", "Кит", "Комар", "Носорог"];
const string1 = 'ко';
let arr = [];

function words(arr, slog) {
  return arr.toLowerCase().startsWith(string.toLowerCase());
}
let result = words(myArr, string1);
console.log(result)




// const myArr = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const filteredArr = words(myArr, "ко");
const string = 'ко';


function words(arr, string) {
    const filteredArr = arr.filter(item => item.startsWith(string));
    return filteredArr;
};
const filteredArr = words(myArr, "ко");
console.log(filteredArr);


// 3
// let number = '32.58884';
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.round(number));

// 4
// console.log(Math.max(52, 53, 49, 77, 21, 32));
// console.log(Math.min(52, 53, 49, 77, 21, 32));

// 5
// function getRandomInt(minValue, MaxValue) {
//     return Math.round(Math.random() * (MaxValue - minValue)) + minValue;
// };
// console.log(getRandomInt(1, 10));

// 6
// function getRandomArrNumbers(n) {
//     const result = [];
//     const length = Math.floor(n / 2);

//     for (let i = 0; i < length; i++) {
//         result.push(Math.round(Math.random() * (n + 1)));
//     }

//     return result;
// }
// console.log(getRandomArrNumbers(7));

// 7
// function getNumber(firstNumber, secondNumber) {
//     return Math.round(Math.random() * (firstNumber - secondNumber) + secondNumber);
// }

// console.log(getNumber(85, 52));

// 8
// let currentDate = new Date();
// console.log(currentDate);

// 9
// let currentDate = new Date();
// let futureDate = currentDate;
// futureDate.setDate(currentDate.getDate() + 73);
// console.log(futureDate);

// 10
// const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
// const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// let myDate = new Date();
// let ruDate = 'Дата: ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' - это ' + days[myDate.getDay()];
// let time = 'Время: ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();
// console.log(ruDate);
// console.log(time);

// или с функцией

// let myDate = new Date();

// function ruDate(myDate) {

//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

//     let date = "Дата: " + myDate.getDate() +
//     " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " +
//     days[myDate.getDay()];

//     let time = "Время: " + myDate.getHours() +
//     ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

//     return date + time;
// }
// console.log(ruDate);
// как вывести в консоль корректно функцию?

// 11
// let words = ["Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];

// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// let list = ["Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];
// list = list.sort(() => Math.random() - 0.5);

// console.log(list);

// prompt("Какой фрукт был первым?");
// prompt("Какой фрукт был последним?");
// "Поздравляю, Вы ответили верно!"
// "Вы были близки к победе!"
// "Вы ответили неверно:("

function rememberWords() {
    let list = ["Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];
    list = list.sort(() => Math.random() - 0.5);

    alert(list);

    let firstWord = prompt("Какой фрукт был первым?");
    let secondWord = prompt("Какой фрукт был последним?");
    
    if (list[0].toLocaleLowerCase === firstWord.toLocaleLowerCase() && list[6].toLocaleLowerCase === secondWord.toLocaleLowerCase()) {
    alert("Поздравляю, Вы ответили верно!")
    } else if (list[0].toLocaleLowerCase === firstWord.toLocaleLowerCase() || list[6].toLocaleLowerCase === secondWord.toLocaleLowerCase()) {
    // alert("Вы были близки к победе!");
    console.log("Вы были близки к победе!");
    } else {
    // alert("Вы ответили неверно:(");
    console.log("Вы ответили неверно:(");
  }
};
// почему у меня не работает?




// 2.8
// практика
// const fibonacci = [1, 1, 2, 3, 5, 8];
// // TODO: Допишите код, чтобы в консоль ниже выводились правильные значения

// // Используйте метод map, чтобы получить массив fibonacci, в котором все числа умножены на 2
// const multipleByTwoFib = fibonacci.map(item => (item * 2));
// console.log(multipleByTwoFib);
// // Используйте метод map, чтобы получить массив fibonacci, в котором к каждому числу добавили 10
// const plusTenFib = fibonacci.map(item => (item +10));
// // Используйте метод filter, чтобы получить массив, в который входят числа Фибоначчи больше 3
// const onlyBigFib = fibonacci.filter(item => item > 3);

// console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib); // => [5, 8]

// const fibonacci = [1, 1, 2, 3, 5, 8];

// const multipleByTwoFib = fibonacci.map((number) => number * 2);
// const plusTenFib = fibonacci.map((number) => number + 10);
// const onlyBigFib = fibonacci.filter((number) => number > 3);

// console.log(multipleByTwoFib); // => [2, 2, 4, 6, 10, 16]
// console.log(plusTenFib); // => [11, 11, 12, 13, 15, 18]
// console.log(onlyBigFib); // => [5, 8]


// с помощью callback
// console.log(map([1, 1, 2, 3, 5, 8], (number) => number * 2)); // => [2, 2, 4, 6, 10, 16]
// console.log(map([1, 1, 2, 3, 5, 8], (number) => number + 10)); // => [11, 11, 12, 13, 15, 18]

// function callbackWithArrayLength(arr, callback) {
//   console.log(arr);
//   /* Писать код тут */
//   callback(arr.length);
// }

// callbackWithArrayLength([1], (length) => {
//   console.log(length);
// });

// callbackWithArrayLength([1, 1], (len) => {
//   console.log(len);
// });
// callbackWithArrayLength([1, 1, 1, 1, 1], (l) => {
//   console.log(l);
// });


// function log(arrItem) {
//   console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);

// ловушки

// function square(number) {
//   return number * number;
// }

// function map(arr, ruleFunction) {
//   const output = [];

// 	// Добавил в консоль лог для отладки
// 	console.log('ruleFunction', ruleFunction);

//   for (let i = 0; i < arr.length; i++) {
//     output.push(ruleFunction(arr[i]));
//   }

//   return output;
// }

// // ОШИБКА: написано square() вместо square
// console.log(map([1, 4, 9, 16], square())); // => Uncaught TypeError: ruleFunction is not a function

// Убрали скобки
// console.log(map([1, 4, 9, 16], square)); // => [ 1, 16, 81, 256 ]


// function add(number1, number2) {
//   return number1 + number2;
// }

// function map(arr, ruleFunction) {
//   const output = [];

//   // Добавил консоль лог для отладки
//   console.log("ruleFunction", ruleFunction);

//   for (let i = 0; i < arr.length; i++) {
//     output.push(ruleFunction(arr[i]));
//   }

//   return output;
// }
// // Функция map вызывает колбэк с одним аргументом, получается вызов add(arr[i]),
// // Такой вызов вернет NaN, потому что попытается сложить число с undefined
// console.log(map([1, 4, 9, 16], add)); // => [ NaN, NaN, NaN, NaN ]
// // Такая же проблема, как в предыдущей ошибке
// console.log(map([1, 4, 9, 16], add(10))); // => Uncaught TypeError: ruleFunction is not a function

// Добавим функцию-обертку, которая «синхронизирует» функцию add с колбэком, который ожидает map-функция
// console.log(
//   map([1, 4, 9, 16], (item) => {
//     return add(10, item);
//   })
// ); // => [ 11, 14, 19, 26 ]



// 2-8

// 1
// const people = [
//   { name: "Глеб", age: 29 },
//   { name: "Анна", age: 17 },
//   { name: "Олег", age: 7 },
//   { name: "Оксана", age: 47 },
// ];

// people.sort(function (a, b) {
//   return a.age - b.age;
// });
// console.log(people);

// сравнивает соседние элементы
// или

// function compareAge(a, b) {
//   return a.age - b.age;
// }
// console.log(people.sort(compareAge));

// 2
// function isPositive(number) {
//   if (number > 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const people = [
//   { name: "Глеб", gender: "male" },
//   { name: "Анна", gender: "female" },
//   { name: "Олег", gender: "male" },
//   { name: "Оксана", gender: "female" },
// ];

// function isMale(gender) {
//   if (gender == "male") {
//     return true;
//   } else {
//     return false;
//   }
// };


// function filter(arr, ruleFunction) {
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     const isValidEl = ruleFunction(arr[i]);
//     if (isValidEl) {
//       output.push(arr[i]);
//     } 
//   }
//   return output;
// }


// console.log(filter([3, -4, 1, 9], isPositive)); 

// console.log(filter(people, isMale));

// arr[i] это элемент массива
// is возвращает true or false
 

// 3
// let currentDate = new Date();

// let timerId = setInterval(() => {
//   alert(currentDate);
// }, 3000);

// setInterval(() => {
//   clearInterval(timerId);
//   alert("30 секунд прошло");
// }, 30000);


// 4
// function delayForSecond(callback) {
//   setTimeout(callback, 10000);
// }

// delayForSecond(function() {
//   console.log("Привет, Глеб!");
// });


// 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	
          cb(); 
        }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi("Глеб"));


