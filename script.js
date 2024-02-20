"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("Yes I can drive");

// const interface = "Auido";
// const private = 124;
// const if = "12"

// function logger() {
//   console.log("My name is Tom");
// }
// // calling, running, invoking
// logger();
// logger();
// logger();

// function logger(firstName) {
//   console.log(`My name is ${firstName}`);
// }

// logger("Tom");
// logger("John");
// logger("Bob");

// function logger(firstName, age) {
//   console.log(`My name is ${firstName} and ${age}yoshdaman`);
// }

// logger("Tom", 15, "uzbek");

// function calc(a, b) {
//   return a * b;
// }

// const multipleCalc = calc(5, 6);
// console.log(multipleCalc);
// console.log(calc(5, 6));

// function declaration
// function calcAge1(birthYear) {
//   const age1 = 2024 - birthYear;
//   return age1;
// }
// console.log(calcAge1(2000));
// //function expression
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// console.log(calcAge2(1990));

// arrow function =>
// const calcAge3 = (birthYear) => {
//   return 2024 - birthYear;
// };
// console.log(calcAge3(1999));

// all functions

// function age1() {}
// const age2 = function () {};
// const age3 = () => {};

// const retirementAge = (birthYear) => {
//   const retirement = 65;
//   const age = 2024 - birthYear;
//   return retirement - age;
// };

// const findRetirAge = retirementAge(2009);
// console.log(findRetirAge);

// const cutFruit = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = (apples, oranges) => {
//   const cutApples = cutFruit(apples);
//   const cutOranges = cutFruit(oranges);
//   const juice = `Juice with ${cutApples} piece of apple and ${cutOranges} piece oranges`;
//   return juice;
// };

// console.log(fruitProcessor(4, 3));

//                     homework task 1
// function twoAddNumbers(a, b) {
//   return a + b;
// }
// console.log(twoAddNumbers(4, 11));

//                     homework task 2
// const findHighValue = function (a, b) {
//   if (a > b) {
//     return `${a} katta ${b} dan`;
//   } else {
//     return `${b} katta ${a} dan`;
//   }
// };
// console.log(findHighValue(15, 13));

//                     homework task 3
// const findNumber = (a) => {
//   if (a > 0 && a % 2 === 0) {
//     return `${a} juft son`;
//   } else if (a > 0) {
//     return `${a} toq son`;
//   } else if (a < 0) {
//     return `${a} manfiy son`;
//   }
// };
// console.log(findNumber(-2));

//                     homework task 4
// const fizzBuzz = (a) => {
//   if (a % 3 === 0 && a % 5 === 0) {
//     return "FizzBuzz";
//   } else if (a % 3 === 0) {
//     return "Fizz";
//   } else if (a % 5 === 0) {
//     return "Buzz";
//   } else {
//     return "Error message";
//   }
// };

// console.log(fizzBuzz(20));

// const calcAge = (birthYear) => {
//   return 2024 - birthYear;
// };

// const untilYearsRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return `${firstName} retirs in ${retirement} years`;
//   } else {
//     return `${firstName} is retired with ${retirement}`;
//   }
// };

// console.log(untilYearsRetirement(1950, "Tom"));

// const calcAverage = (a, b, c) => {
//   return (a + b + c) / 3;
// };

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKaolas = calcAverage(23, 34, 27);
// console.log(avgDolphins, avgKaolas);

// const checkWinner = function (avgDolphins, avgKaolas) {
//   if (avgDolphins >= 2 * avgKaolas) {
//     return `Dolphins win 🏆 (${avgDolphins} vs ${avgKaolas})`;
//   } else if (avgKaolas >= 2 * avgDolphins) {
//     return `Kaolas win 🏆 (${avgKaolas} vs ${avgDolphins})`;
//   } else {
//     return "No teams win the game";
//   }
// };

// console.log(checkWinner(avgDolphins, avgKaolas));

// ----------------------------------- Array -----------------------------------

// const friend1 = "Tom";
// const friend2 = "John";
// const friend3 = "Bob";
// const friend4 = "Daniel";

// const friends = ["Tom", "John", "Bob", "Daniel"];
// // const years = new Array(1990, 2000, 2010, 2020);

// // console.log(friends);
// // console.log(friends[1]);
// // console.log(friends.length);
// // console.log(friends[friends.length - 1]);

// // friends[2] = "Ann";
// // console.log(friends);

// const firstName = "Leonel";
// const soccer = [firstName, "Messi", 2024 - 1987, "football player", friends];
// console.log(soccer);
// // console.log(soccer.length);

// function calcAge(birthYear) {
//   return 2024 - birthYear;
// }

// const years = [1990, 2001, 2005, 2010];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const friends = ["Tom", "John", "Bob", "Daniel"];
// console.log(friends);

// const newArr = friends.push("Alibek"); // add value in the end of array
// console.log(friends);

// friends.unshift("Eleven"); // add value in the beginning of array
// console.log(friends);

// const popped = friends.pop(); // remove value in the end of array
// console.log(friends);

// friends.shift(); // remove first element in the array
// console.log(friends);

// const friends = ["Tom", "John", "Bob", "Daniel"];

// // console.log(friends.indexOf("John"));
// // console.log(friends.indexOf("Daniel"));

// console.log(friends.includes("Tom"));

// const bills = [125, 555, 44];

// const caclTrip = (bill) => {
//   const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   return tip;
// };
// const tips = [caclTrip(bills[0]), caclTrip(bills[1]), caclTrip(bills[2])];

// const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(total);

// const bobsArray = [
//   "Bob",
//   "Danil",
//   2024 - 1990,
//   "teacher",
//   "english",
//   1234567,
//   ["Tom", "Ann", "Michael"],
// ];

// const bob = {
//   firstName: "Bob",
//   lastName: "Danile",
//   age: 2024 - 1990,
//   job: "teacher",
//   friends: ["Tom", "Ann", "Michael"],
// };

// console.log(bob.job); // teacher
// console.log(bob["job"]); // teacher
// const keyName = "Name";

// console.log(bob["first" + keyName]); // Bob
// console.log(bob["last" + keyName]); // Daniel

// const interestedIn = prompt("Bob haqida qanday malumotni bilishni hohlaysiz");
// // console.log(bob.interestedIn); // undefined

// if (bob[interestedIn]) {
//   console.log(bob[interestedIn]);
// } else {
//   console.log("Wrong request");
// }

// const bob = {
//   firstName: "Bob",
//   lastName: "David",
//   age: 2024 - 1990,
//   job: "actor",
//   nationality: "english",
//   phone: 123456789,
//   friends: ["Ann", "John", "Tom"],
// };

// bob.location = "Spain";
// bob["hasDriversLicense"] = true;
// // bob.job = "bloger";
// bob["job"] = "bloger";
// console.log(bob);

// Bob has 3 friends, and his best friend is Tom

// console.log(
//   `${bob.firstName} has ${bob.friends.length} friends, and his best friend is ${
//     bob.friends[bob.friends.length - 1]
//   }`
// );

// const bakhriddinArr1 = [
//   "Bakhriddin",
//   "Qurbonov",
//   2024 - 2004,
//   "student",
//   "playing counter strike",
//   ["Michael", "Jone", "Steven"],
//   true,
// ];

// const bakhriddinArr = {
//   firstName: "Bakhriddin",
//   lastName: "Qurbonov",
//   age: 2024 - 2004,
//   friends: ["Michael", "Jone", "Steven"],
//   hasDriversLicense: true,
//   hobbi: "playing counter strike",
// };

// console.log(bakhriddinArr.lastName);
// console.log(bakhriddinArr["firstName"]);

// bakhriddinArr["isMarried"] = false;

// console.log(bakhriddinArr);

// function remain(a, b) {
//   if (a > b) {
//     return b % a;
//   } else if (b > a) {
//     return a % b;
//   } else if (a % b === 0) {
//     return 0;
//   }
// }

// console.log(remain(7, 2));

// 5 * 1 + 1
// 5 * 2 + 1
// 5 * 3 + 1
// 5 * 4 + 1

// function matchHouses(step) {
//   return 5 * step + 1;
// }

// console.log(matchHouses(87));

// const bakhriddin = {
//   firstName: "Bakhriddin",
//   lastName: "Qurbonov",
//   friends: ["Michael", "Jone", "Steven"],
//   hasDriversLicense: true,
//   birthYear: 2004,
//   hobbi: "playing counter strike",
//   phone: 123456789,
//   job: "student",

//   //   calcAge: function (birthYear) {
//   //     console.log(this);
//   //     return 2024 - birthYear;
//   //   },

//   caclAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
// };

// bakhriddin.caclAge();
// console.log(bakhriddin.age);

// // Bakhriddin is 20 years old student, he has a/no driver's license

// console.log(
//   `${bakhriddin.firstName} is ${bakhriddin.age} years old ${
//     bakhriddin.job
//   }, he has ${bakhriddin.hasDriversLicense ? "a" : "no"} driver's license`
// );

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(
//   `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
// );

// console.log("Matemetik raqamlar 1");
// console.log("Matemetik raqamlar 2");
// console.log("Matemetik raqamlar 3");
// console.log("Matemetik raqamlar 4");
// console.log("Matemetik raqamlar 5");
// console.log("Matemetik raqamlar 6");
// console.log("Matemetik raqamlar 7");
// console.log("Matemetik raqamlar 8");
// console.log("Matemetik raqamlar 9");
// console.log("Matemetik raqamlar 10");

// for (let num = 1; num <= 10; num++) {
//   console.log(num);
// }

// const bakhriddinArr = [
//   "Bakhriddin",
//   "Qurbonov",
//   2024 - 2004,
//   true,
//   "student",
//   "playing counter strike",
//   ["Michael", "Jone", "Steven"],
//   false,
// ];

// const types = [];

// for (let i = 0; i < bakhriddinArr.length; i++) {
//   console.log(bakhriddinArr[i]);

//   types.push(typeof bakhriddinArr[i]);
//   //   types[i] = typeof bakhriddinArr[i];
// }

// console.log(types);

// const years = [1990, 1995, 2000, 2005, 2010];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2024 - years[i]);
// }

// console.log(ages);

// const bobsArray = [
//   "Bob",
//   "Danil",
//   2024 - 1990,
//   "teacher",
//   "english",
//   1234567,
//   ["Tom", "Ann", "Michael"],
// ];

// for (let i = 0; i < bobsArray.length; i++) {
//   if (typeof bobsArray[i] === "number") break;

//   console.log(bobsArray[i]);
// }
