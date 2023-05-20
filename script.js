// hw 2-2

// 1
let a = 20;
alert(a);
a = 20;
alert(a);

// 2
const firstIphone = String(2007);
alert(firstIphone);

// 3
const creatorJs = "Brendan Eich";
alert(creatorJs);

// 4
let b = 10;
let c = 2;
let result1 = b + c;
let result2 = b - c;
let result3 = b * c;
let result4 = b / c;
alert(`${result1},${result2},${result3},${result4}`);

// 5
let result = 2**5;
alert(result);

// 6
let a6 = 9;
let b6 = 2;
let result6 = a % b;
alert(result6);

// 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// 8
let age = Number(prompt("Сколько вам лет?"));
alert(age);

// 9
let user = {
    name: "Babulya Raskol'nikova",
    age: 217,
    "isAdmin": false
}

// 9.1
user["city of residence"] = 'Saint-Petersburg';

// 9.2
user.age = 60;

// 9.3
delete user["city of residence"];

// 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// 10
let yourName = prompt("write your name, please:)");
alert(`Hello, ${yourName} !`);






















