// alert('Hello World');

/* console.log(1);
console.log(2); */

// Number
let age = 25;
let year = 2020;
const points = 100;
console.log(age, year, points);

// Math operator: +, -, *, /, **, %
let radius = 10;
const pi = 3.14;
let area = pi * radius**2;
console.log(radius, pi, area);

// Old way of declaring variable
// var score = 75;
// console.log(score);

// String
let email = 'kevin@gmail.com';
console.log(email);

let firstName = 'Kevin';
let lastName = 'Horasia';
let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(fullName[3]);
console.log(fullName.length);
console.log(fullName.toUpperCase());

let index = email.indexOf('@');
let lastIndex = email.lastIndexOf('i');
let slice = email.slice(0, 5);
let substr = email.substr(5, 5)
let replace = email.replace('gmail', 'yahoo');
console.log(index, lastIndex);
console.log(slice, substr, replace);

// Template String
const title = 'Best reads of 2019';
const author = 'Mario';
const like = 30;

let template = `The blog called ${title} by ${author} has ${like} likes`;
console.log(template);

let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${like} likes</span>
`;
console.log(html);

// Array
let fruits = ['orange', 'manggo', 'banana', 'coconut'];
console.log(fruits);
fruits[1] = 'melon';
console.log(fruits[1]);

let random = ['kevin', 25];
console.log(random, random.length);
console.log(fruits.join('|'));
console.log(fruits.indexOf('orange'));
console.log(fruits.concat(['hello', 'world']));

console.log(fruits.push('kevin'));
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

// Null & Undefined
let x;
console.log(x, x + 3, `the age is ${x}`);
x = null;
console.log(x, x + 3, `the age is ${x}`);

// Boolean
console.log(true, false, 'true', 'false');
console.log(email.includes('@'));
console.log(email.includes('!'));
console.log(fruits.includes('orange'));

console.log(age == 25);
console.log(age == 21);
console.log(age != 21);
console.log(age > 21);
console.log(age < 21);
console.log(age >= 25);
console.log(age <= 25);

console.log(firstName == 'Kevin');
console.log(firstName == 'kevin');
console.log(firstName > 'Crystal');
console.log(firstName > 'crystal');

// Loose & Strict Comparison
console.log(age == 25);
console.log(age == '25');
console.log(age != 25);
console.log(age != '25');

console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');

// Type Conversion
let score = '100';
console.log(score + 1);
score = Number(score)
console.log(score + 1);
console.log(typeof score);

let s = String(50);
console.log(s, typeof s);

let b = Boolean(100);
console.log(b, typeof b);
b = Boolean(0);
console.log(b, typeof b);
b = Boolean('0');
console.log(b, typeof b);
b = Boolean('');
console.log(b, typeof b);

// For loops
for (let i = 0; i < 5; i++) 
    console.log('in loop:', i);
console.log('loop finished');

const names = ['cnidus', 'regit', 'carin'];
for (let i = 0; i < names.length; i++)
{
    console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

// While loops
let i = 0;
while (i < 5) 
{
    console.log('in loop:', i);
    i++;
}

i = 0;
while (i < names.length) 
{
    console.log(names[i]);
    i++;
}

// Do-While loops
i = 5;
do {
    console.log('in loop:', i);
    i++;
} while (i < 5);

// If statements
const num = 20;
if (num > 20) 
    console.log('you are over 20 years old');    
else
    console.log('you are below 20 years old');

const password = 'p@ss';
if (password.length >= 12 && password.includes('@'))
    console.log('password is strong');
else if (password.length >= 8 || password.includes('@'))
    console.log('password is strong enough');
else 
    console.log('password is not strong enough');

// Logical NOT (!)
let user = false;
if (!user) 
    console.log('you must be logged in to continue');  

console.log(!true);
console.log(!false);

// Break & Continue
const scores = [50, 25, 0, 30, 100, 20, 10];
for (let i = 0; i < scores.length; i++) 
{
    if (scores[i] === 0) 
        continue;

    console.log('your score:', scores[i]);

    if (scores[i] === 100) 
    {
        console.log('congrats, you got the top score!');
        break;    
    }
}

// Switch statements
const grade = 'D';
switch (grade) // switch is using strict equality
{
    case 'A':
        console.log('you got an A!');
        break;

    case 'B':
        console.log('you got an B!');
        break;

    case 'C':
        console.log('you got an C!');
        break;

    case 'D':
        console.log('you got an D!');
        break;

    case 'E':
        console.log('you got an E!');
        break;

    default:
        console.log('not a valid grade!');
        break; // break here is not necessary
}

// Variables & Block Scope
let scope = 30;
if (true) 
{
    let scope = 40;
    console.log('inside 1st code block:', scope);

    if (true) 
    {
        let scope = 50;
        console.log('inside 2nd code block:', scope);    
    }
}

console.log('outside code block:', scope);

// Function Declaration
function greet() 
{
    console.log('hello there');
}
greet();

// Function Expression
const speak = function(name='noname') 
{
    console.log(`good day ${name}`);    
};
speak();

// Return Value
// const calArea = function(radius) 
// {
//     // let area = 3.14 * radius**2;
//     // return area;
//     return 3.14 * radius**2;
// }

// const ca = calArea(5);
// console.log(ca);

// Arrow Function
const calArea = radius => 3.14 * radius**2;
const ca = calArea(5);
console.log(ca);

// Callbacks & Foreach
const fun = (callbackFun) => {
    let value = 50;
    callbackFun(value);
}

// fun(function(value) {
//     console.log(value);
// });

fun(value => {
    console.log(value);
});

let people = ['mario', 'luigi', 'kevin', 'joe', 'cnidus'];

people.forEach((person, index) => {
    console.log(index, person);
});

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

// Get HTML Reference
const ul = document.querySelector('.people');
let htmlOne = '';

people.forEach(person => {
    htmlOne += `<li style="color: purple">${person}</li>`
});

console.log(htmlOne);
ul.innerHTML = htmlOne;

// Object Literals
// Array of Object
const phones = [
    { number: '00001111', type: 'home' },
    { number: '11110000', type: 'work' }
];
console.log(phones);

let customer = {
    name: 'kevin',
    age: 25,
    email: 'kevin@gmail.com',
    location: 'indonesia',
    phones: [
        { number: '00001111', type: 'home' },
        { number: '11110000', type: 'work' }
    ],
    login: function() 
    {
        console.log('customer login');
    },
    logout() 
    {
        console.log('customer logout');
    },
    logPhones() 
    {
        console.log('customer phones number:');
        this.phones.forEach(phone => {
            console.log(phone.number, phone.type);
        });    
    }
};
console.log(customer);
console.log(customer.name);
console.log(customer['name']);

customer.age = 30;
customer['age'] = 76;
console.log(customer.age)
console.log(typeof customer);

customer.login();
customer.logout();
customer.logPhones();

// Math Object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const a = 7.7;
console.log(Math.round(a));
console.log(Math.floor(a)); // Lower bound
console.log(Math.ceil(a));  // Upper bound
console.log(Math.trunc(a)); // Leave the decimal

// Random number
const rand = Math.random();
console.log(rand);
console.log(Math.round(rand * 100));

// Primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// Reference values
const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;
console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);