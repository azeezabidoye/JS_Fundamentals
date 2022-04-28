console.log('Javascript is fun 🎉🙌');

// VARIABLES
// let fullName, birthYear, job, isMarried;
// fullName = 'Saalma Rambo';          //String
// birthYear = 1997;           //Number
// job = 'Soldier';          // String
// isMarried = true;          //Boolean

// console.log(fullName);
// console.log(birthYear);
// console.log(job);
// console.log(isMarried);
// console.log('My name is ' + fullName + '. I was born in ' + birthYear +', I am a ' + job + ' and my marital status is ' + isMarried);
// console.log('My name is ' + fullName + '. I was born in ' + birthYear +', \n I am a ' + job + ' and my marital status is ' + isMarried);
// console.log('My name is ' + fullName + '. I was born in ' + birthYear +', I\'m a ' + job + ' and my marital status is ' + isMarried);

/**Using 'typeof' to check Variables */
// console.log(typeof(fullName));
// console.log(typeof(birthYear));
// console.log(typeof(isMarried));

// The 7 DATA-TYPES of JavaScript
// 1. Numbers...numbers have decimals
let myNumber = 7;

// 2. String...are texts written in-between single or double quotes
let myCountry = 'Nigeria';

// 3. Boolean...Javascript logic which returns either TRUE or FALSE
let _canVote = true;

// 4. Undefined...this is the VALUE if we don't assign any value to a VARIABLE.
// Undefined can be used to set a VALUE for a VARIABLE also.
let mySchool;
let myDept = undefined;

// 5. Null...is an empty Object
let $can_drive = null;

/**Javascript KEYWORDS that can't be used to set VARIABLES */
// 1. name
// 2. new
// 3. keyword
// 4. function
// 5. array
// 6. Variable Keywords


/**VARIABLE MUTABILITY ===> Between const, let, var */
// let age = 30;
// age = 40;
// age = 50
// console.log(age);

// const birthYear = 1990;
// console.log(birthYear);

// let myRegion;
// myRegion = 'South-West';
// console.log(myRegion);

// const favColor = 'black';
// console.log(favColor);

// var job;
// job = 'Programmer';
// job = 'Teacher';
// console.log(job);


/**JAVASCRIPT BASIC OPERATORS */
// Minus Operator (-)
// const thisYear = 2022;
// const ageJohn = thisYear - 1990;
// const ageSarah = thisYear - 2004;
// const ageBob = thisYear - 1976;
// console.log(ageJohn, ageSarah);

// Plus Opearator (+)
// const myBalance = 2500 + 658;
// console.log(myBalance);

// The Plus Operator can used for CONCATENATION
// const firstName = 'Jack';
// const lastName = 'Sparrow';
// const fullName = firstName + lastName;
// console.log(fullName);
// console.log(firstName + ' ' + lastName)


/**JAVASCRIPT ASSIGNMENT OPERATORS */
// Plus or Equal (+=)
// let salary = 1000;
// console.log(salary)

// let salaryPlus = 870;

// let moreSalary = salary += salaryPlus;
// console.log(moreSalary);


// Minus or Equal (+=)
// let fee = 2345;
// let newFee = fee -= 120;
// console.log(newFee);

// Times or Equal (+=)
// let ageSola = 22;
// let ageMummy = ageSola *= 2;
// console.log(ageMummy);

// Exponetiation (**)
// const powerThree = 3 ** 2;
// console.log(powerThree);

/**JAVASCRIPT COMPARISON OPERATORS */
// Less Than (<) and Greater Than (>)
// const isLess = 86 < 72;
// console.log(isLess);        //False

// Less or Equal (<=) and Greater or Equal (>=)
// const isGreater = 86 >= 78;
// console.log(isGreater);     //True

// console.log(ageSarah >= 18);        // False

/** CODING CHALLENGE #1 */
// const massMark = 95;
// const massJohn = 85;

// const heightMark = 1.88;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// const hasHigherBMI = BMIMark > BMIJohn;     // True

// console.log(BMIMark, BMIJohn)
// console.log(hasHigherBMI);

/**JAVASCRIPT STRINGS & TEMPLATE LITERALS */
// const firstName = 'Jane';
// const lastName = 'Mena';
// const job = 'Dancer';
// const yearOfBirth = 1994;

// ES5 Strings
// const janeES5 = 'I\'m ' + firstName + ' ' + lastName +  ',\n\ I\'m a ' + job + ' and I am ' + (2022 - yearOfBirth) + ' years old';
// console.log(janeES5);

// ES6 Template Literals
// const janeES6 = `I'm ${firstName} ${lastName}`;
// console.log(janeES6);
// console.log(`We are here learning \n\how to code`);



/**JAVASCRIPT DECISION MAKING (IF/ELSE STATEMENT) */
// const ageSarah = 20;

// if (ageSarah >= 18) {
//     console.log(`Sarah is old enough to drive 🚗`);
// } else {
//     console.log(`Sarah is too young to drive`);
// }

////////////////////////
// const birthYear = 1997;
// let century;

// if (birthYear < 2000) {
//     century = 20;
//     console.log(`${century}th`);
// } else {
//     century = 21;
//     console.log(`${century}st`);
// }

// const firstName = 'Jane';
// const job = 'boxer'; 

// if (job === 'Actor') {
//     console.log(`${firstName} is a popular ${job}`);
// } else if (job === 'Teacher') {
//     console.log(`${firstName} teaches children how to code`);
// } else if (job === 'Police') {
//     console.log(`${firstName} is your corrupt friend`)
// } else if (job === 'driver') {
//     console.log(`The official driver of Cola Hotel is ${firstName}`);
// } else {
//     console.log(`${firstName} smokes igbo every time 🤞`)
// }


/**JAVASCRIPT TYPE CONVERTION & COERSION */
// Convertion
// const inputYear = '1991';
// console.log(inputYear)          // String
// console.log(Number(inputYear));         // Number

// console.log(Number('John'));            // NaN 
// console.log(typeof(NaN));   

// const myLocalNum = 23;
// console.log(String(myLocalNum));        // String
// console.log(myLocalNum.toString());     // String

// Coersion
// When you add a number to a string; it becomes a string
// console.log('I am ' + 23 + ' years old');

// console.log('78' + '42');       // 7842 ==> string
// console.log('78' - '42');       // 36 ==> number
// console.log('72' / '8');        // 9 ==> number
// console.log('20' * '7');        // 140 ==> number
// console.log('23' - '10' - 3)
// console.log('23' - '10' + 5)


// Guess the answer
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// DOM Manipulation
// const firstNumber = document.querySelector('#firstNum');
// const secondNumber = document.getElementById('secondNum');
// const submitBtn = document.getElementById('submitBtn');
// const calcOutput = document.getElementById('calcOutput');

// submitBtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const firstValue = Number(firstNumber.value);
//     const secondValue = Number(secondNumber.value);

//     function multiplyNums (a, b) {
//        return (a * b);
//     }
//     calcOutput.textContent = multiplyNums(firstValue, secondValue);
// })


/** CODING CHALLENGE #2 */
// const massMark = 95;
// const massJohn = 85;

// const heightMark = 1.88;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark)
// console.log(BMIJohn)

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI of ${BMIMark} is higher than John's BMI of ${BMIJohn}`)
// } else if (BMIJohn > BMIMark) {
//     console.log(`John's BMI of ${BMIJohn} is higher than Mark's BMI of ${BMIMark}`)   
// }


/**JAVASCRIPT TRUTHY & FALSY VALUES */

// Falsy Values
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// // Truthy Values
// console.log(Boolean(27));
// console.log(Boolean('Ade'));

// const money = 100;

// if (money) {
//     console.log(`Dont't spend all that $${money}`)
// } else {
//     console.log('You need to get a job!')
// }


/**JAVASCRIPT EQUALITY OPERATORS */

// Double-equal (==) 👉 this does type-coersion.
// console.log('18' == 18);

// Tripple-equal (===) 👉 this does NOT do type-coersion.
// console.log('84' === 84);

// const favNum = String(prompt('What is your favorite number'));
// console.log(typeof favNum);

// if (favNum !== 7) {
//     console.log('Your favorite number is a string');
// } else if (favNum === 7) {
//     console.log('Now, you have a real number');
// }


/**JAVASCRIPT BOOLEAN LOGIC */

// AND-Operator (&&) 👉 when ALL conditions are TRUE

// OR-Operator (||) 👉 when One-of-the-conditions is TRUE

// const firstName = 'Alabi';
// const hasDriverLicence = false;
// const hasGoodVision = false;
// const isTired = false;

// if (hasDriverLicence && hasGoodVision && isTired) {
//     console.log(`${firstName} can drive in the night!`)
// } else if (!hasDriverLicence && !hasGoodVision && !isTired) {
//     console.log(`Police might arrest Mr. ${firstName}`)
// }

// CODING CHALLENGE #3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins wins the trophy 🏆`)
// } else if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas wins the trophy 🏆`)
// } else if (scoreDolphins === scoreKoalas) {
//     console.log(`They played a drawn match. No winner 🤷‍♂️`)
// }


/** CODING CHALLENGE #3 */
// const scoreDolphins = (97 + 110 + 90) / 3;
// const scoreKoalas = (109 + 95 + 93) / 3;
// console.log(scoreDolphins);
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log(`Dolphins wins the trophy with ${scoreDolphins} points 🏆`)
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log(`Koalas wins the trophy with ${scoreKoalas} points 🏆`) 
// } else if (scoreDolphins === scoreKoalas && scoreDolphins <= 100 && scoreKoalas <= 100) {
//     console.log(`Nobody wins the match. They have less than 100 points 🤷‍♂️`)
// }

/**JAVASCRIPT SWITCH STATEMENTS */

// const dayOfTheWeek = prompt('Pick a day you like...😀');
// console.log(dayOfTheWeek);


// if (dayOfTheWeek === 'monday') {
//     console.log(`Have a fruitful week!`)
// } else if (dayOfTheWeek === 'tuesday') {
//     console.log(`It's a beautiful ${dayOfTheWeek}`);
// } else if (dayOfTheWeek === 'wednesday' || dayOfTheWeek === 'thursday')  {
//     console.log(`On ${dayOfTheWeek} I have to go and teach at the bootcamp`);
// } else if (dayOfTheWeek === 'friday') {
//     console.log(`${dayOfTheWeek} is for Jummah and I will go to the mosque 🕌`);
//     console.log(`Thank God it's ${dayOfTheWeek}...we club all night🎉`)
// } else if (dayOfTheWeek === 'saturday') {
//     console.log(`It's half day at work. Nothing much!`);
// } else if (dayOfTheWeek === 'sunday') {
//     console.log(`Yay! It's weekend and I watches football ⚽`);
// } else {
//     console.log('Wrong week day')
// }

// switch (dayOfTheWeek) {
//     default:
//         console.log(`You have entered a wrong week day...🚨`);
//         break;
//     case 'monday':
//         console.log(`Today is the first day of the week.`);
//         break;
//     case 'tuesday':
//         console.log(`It's a free day.`);
//         console.log(`I can decide to sleep all day`);
//         break;
//     case 'wednesday':
//         console.log(`On ${dayOfTheWeek} I have to go and teach at the bootcamp`);
//         break;
//     case 'thursday':
//         console.log(`The same thing on ${dayOfTheWeek} too`);
//         break;
//     case 'friday':
//         console.log(`${dayOfTheWeek} is for Jummah and I will go to the mosque 🕌`);
//         console.log(`Thank God it's ${dayOfTheWeek}...we club all night🎉`)
//         break;
//     case 'saturday':
//         console.log(`It's half day at work. Nothing much!`);
//         break;
//     case 'sunday':
//         console.log(`Yay! It's weekend and I watches football ⚽`);
//         break;
// }

/**JAVASCRIPT TERNARY OPERATOR */
// const drinkerName = 'Bello';
// const age = 27;
// const canDrink = age >= 18 ? 'can drink shayo' : 'Can only drink water';
// console.log(canDrink)

// const isEmployed = false;
// console.log(isEmployed ? 'He works at Celo' : 'God punish Buahri');

// console.log(`Bola is ${2022 -1999} years old`)

// if (age >= 18) {
//     console.log(`${drinkerName} can drink shayo 🍻`);
// } else {
//     console.log(`${drinkerName} can only drink water 💧`);
// }

// const bill = 128;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, and the tip was ${tip} and the total value is ${bill + tip}`);


//  1. Write a JavaScript program to display the current time
// Sample Output : Current time is : 10 PM : 30

const d = new Date();
const hour = d.getHours();
const _hour = d.getHours() > 12 ? hour - 12 : hour;
const minute = d.getMinutes();
const prepand = hour < 12 ? 'am' : 'pm';

console.log(`Current  Time: ${_hour}: ${minute} ${prepand}`);

console.log(d.getDay())