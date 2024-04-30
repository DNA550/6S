
// Вызвать alert

alert("Я JavaScript!"); 
//


// variables

let stalker = ''
let name = 'Артём'
stalker = name;
alert (stalker)


// Constants
const username = "Артём";
username = "Bob";   // ошибка, username - константа, поэтому мы не можем изменить ее значение
alert (username)
//


// Data types Number

const x = 45;
const y = 123.897;
const z = -0.123;

//


// Data  BigInt

const num = 9223372036854775801n;
console.log(num);   // 9223372036854775801n

//


// Strings

const user = "Артём";
const company = 'GTD.MARKET';
const language = `JavaScript`;

console.log(user);
console.log(company);
console.log(language);

//


//   Interpolation

const user = "Артём";
const age = 37;
const isMarried = false;
const text = `Name: ${user}   Age: ${age}   IsMarried: ${isMarried}`;
console.log(text);  // Name: Артём   Age: 37   IsMarried: false


// null

email = null;
console.log(email);     // null
//

// undefined

let email;
console.log(email); // undefined

//


// object
const user = {name: "Артём", age:42};
console.log(user.name);
console.log(user.age);

//


//  typeof operator
let id;
console.log(typeof id);       // undefined

id = 45;
console.log(typeof id);   // number

id = 45n;
console.log(typeof id);     // bigint

id = "45";
console.log(typeof id);     // string
//


//  confirm

let isBoss = confirm("Ты здесь главный ментор по JS?");
alert( isBoss ); 

//


//  prompt

let name = prompt("Ваше позиция в структуре S6?", "");
alert(name);

//


// String conversion

const number1 = "56";
const number2 = 4;
cont result = number1 + number2;
console.log(result); // 564

// parseInt


const number1 = "56";
const number2 = 4;
const result = parseInt(number1) + number2;
console.log(result); // 60


//



//  
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет главный по JS!") ); // true
alert( Boolean("") ); // false

//

// Строгое равенство (===)
const x = 100;
const y = 100;  
console.log(x === y ); // true

// 

// Строгое равенство (===)
const x = 100; // number (число)
const y = '100'; // string (строка)

console.log(x === y ); // false  
//

// Оператор двойного равенства (==)
const x = 100; // number
const y = '100'; // string

console.log(x == y ); // true
//


// Оператор не равно (!==)
const x = 50; // number (число)
const y = 50; // number (число)

console.log(x !== y ); // false    

//



// Оператор не равно (!==)
const x = 50; // number (число)
const y = '50'; // string (строка)

console.log(x !== y ); // true    
//



// Оператор больше чем (>)
const x = 60;
const y = 50;

console.log(x > y); // true   

//


// Оператор больше или равно (>=)
const x = 40;
const y = 50;

console.log(x >= y); // false 
//

