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
// 'use strict';
// let age = prompt('How old are you?');
// let printMessage;
// if (age < 0) {
//     function printMessage() {
//         alert('wrong number');
//     }
// } else if (age >= 0 && age <= 12) {
//     function printMessage() {
//         alert('Hello, friend!');
//     }
// } else {
//     function printMessage() {
//         alert('Welcome!');
//     }
// }
// printMessage();
// почему не работает код выше?

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
//     if (isNaN(userNum) && isNaN(userNum2)) {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return userNum * userNum2;
//     }
// }
// console.log(mult(userNum, userNum2));

// function mult2(a, b) {
//     if (isNaN(a) && isNaN(b)) {
//         return "Одно или оба значения не являются числом";
//     } else {
//         return a * b;
//     }
// }
// console.log(mult2(5, р));
// почему не работает с буквенным значением в этом варианте?

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

function timeOfYear() {
    let monthNumber = prompt("Введите число от 1 до 12");
    if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
        console.log('зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        console.log('весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        console.log('лето');
    } else if (monthNumber >= 9 && monthNumber <= 11)
    {
        console.log('осень');
    } else {
        console.log('неправильное число');
    }
}





