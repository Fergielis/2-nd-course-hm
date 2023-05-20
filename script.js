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
let password = 'пароль';
let answer = String(prompt('Введите пароль'));
if (answer === password) {
    alert('Пароль введен верно'); 
} else {
    alert('Пароль введен неправильно');
}

// 2
let c = 18;
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 3
let d = 33;
let e = 85;
if (d > 100 || e > 100) {
    console.log('right');
} else {
    console.log('wrong');
}

// 4
let a = "2";
let b = "3";
alert(parseInt(a) + parseInt(b));

// 5
let monthNumber = 12;
switch (monthNumber) {
  case 1:
    console.log("winter");
    break;
  case 2:
    console.log("winter");
    break;
  case 3:
    console.log("spring");
    break;
  case 4:
    console.log("spring");
    break;
  case 5:
    console.log("spring");
    break;
  case 6:
    console.log("summer");
    break;
  case 7:
    console.log("summer");
    break;
  case 8:
    console.log("summer");
    break;
  case 9:
    console.log("autumn");
    break;
  case 10:
    console.log("autumn");
    break;
  case 11:
    console.log("autumn");
    break;
  case 12:
    console.log("winter");
    break;
  default: monthNumber >= 13;
    console.log("wrong number of month");
    break;
}

// 6
// done

// 7
let a = prompt("Пожалуйста, введите любое число");
if (isNaN(a)) {
    console.log('not a number')
} else {
    console.log('is number')
}
if (a % 2 === 0) {
    alert('четное')
} else {
    alert('нечетное');  
}

// 8
let clientOS = prompt("Введите цифру вашей операционной системы 0 — iOS, 1 — Android");
if (clientOS == 0) {
    console.log("Установите версию приложения для iOS по ссылке");
} else {
    console.log("Установите версию приложения для Android по ссылке");
}

// 9
let clientOS = prompt("Введите цифру вашей операционной системы 0 — iOS, 1 — Android");
let clientDeviceYear = prompt('Год выпуска вашей операционной системы ранее 2015 года? 0 - да, 1 - нет')

if (clientOS == 0) {
    if (clientOS == 0 && clientDeviceYear == 1) {
      console.log("Установите версию приложения для iOS по ссылке");
    } else {
      console.log("Установите облегченную версию приложения для iOS по ссылке");
    }
} else {
    if (clientOS == 1 && clientDeviceYear == 1) {
        console.log("Установите версию приложения для Android по ссылке");
    } else {
        console.log("Установите облегченную версию приложения для Android по ссылке");
    }
    
}



























