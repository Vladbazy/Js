console.log("Задание №1");
let a = 1, b = "Vlad", c = true, d = null, e;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log("___________________________");

console.log("Задание №2");
let x = 10, y = 5;
console.log(x == y);
console.log(x < y);
console.log(x <= y);
console.log(x > y);
console.log("___________________________");

console.log("Задание №3");
a = false, b = null, c = undefined;
console.log(a, b, c);
console.log("___________________________");

console.log("Задание №4");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");
console.log("1" - 2);
console.log("1" + -2);
console.log("1" + "1" - "1");
console.log("foo" + -"bar");
console.log(0 == "0");
console.log(0.5 + 0.1 == 0.6);
console.log(0.1 + 0.2 == 0.3);
console.log(true + true + true == 3);
console.log(true == 1);
console.log(true === 1);
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
console.log(9007199254740991 + 1 == 9007199254740991 + 2);
console.log(Math.sqrt(-1) == Math.sqrt(-1));
console.log("______________________________");

console.log("Задание №5");
let str1, str2, str3, concatination;
str1 = "Кто ";
str2 = "ты ";
str3 = "такой?";
concatination = str1 + str2 + str3;
console.log(concatination);
console.log("_________________________________");

console.log("Задание №6");
let str = 20;
a = 5;
console.log(str + a);
console.log(str - a);
console.log(str * "2");
console.log(str / 2);
console.log("_______________________");

console.log("Задание №7");
a = 12;
b = 7.15;
let ost;
ost = a % b;
console.log(Math.round(ost));
console.log("_______________________");

console.log("Задание №8");
let X = 4;
const up = X ** 2 - 7 * X + 10;
const down = X ** 2 - 8 * X + 12;
const result = up / down;
console.log(result);
console.log("__________________");

console.log("Задание №9");
let email = "testemail.com";
let symbol = "@";
if (!email.includes(symbol)) {
    console.log("Предупреждение: Отсутствует символ '@'");
}
console.log("______________________");

console.log("Работа с потоками");
console.log("______________________");

console.log("Задание №1");
let age = 32;
if (age >= 18 && age <= 30) {
    console.log("Для молодежи");
}
else if (age >= 1 && age <= 17) {
    console.log("Для детей");
}
else {
    console.log("Для всех возрастов");
}
console.log("________________________");

console.log("Задание №2");
let a2 = 10, b2 = 5;
let max = a2 > b2 ? a2 : b2;
console.log(max);
console.log("__________________________");

console.log("Задание №3");
let number = 3;
let end;
switch (number) {
    case 1:
        end = "ворона";
        break;
    case 2:
    case 3:
    case 4:
        end = "вороны";
        break;
    default:
        end = "ворон";
        break;
}
console.log(`На ветке сидит ${number} ${end}`);
console.log("_______________________________");

console.log("Задание №4");
console.log("Цикл while:");
let num = 0;
while (num <= 50) {
    if (num % 2 != 0) {
        console.log(num);
    }
    num++;
}
console.log("Цикл for:");
for (let num2 = 0; num2 <= 50; num2++) {
    if (num2 % 2 != 0) {
        console.log(num2);
    }
}
console.log("___________________________");

console.log("Задание №5");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 7 || arr[i] == 5) {
        continue;
    }
    sum += arr[i];
}
console.log(sum);
console.log("_______________________");

console.log("Задание №6");
x = 2;
y = 3;
let counter = 0;
let res = 1;
while (counter < y) {
    res *= x;
    counter++;
}
console.log(res);