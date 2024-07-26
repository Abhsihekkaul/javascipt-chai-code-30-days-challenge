function createElement(elementType){
    let element = document.createElement(String(elementType));
    document.querySelector("body").appendChild(element); 
    return element;
}

// Activity 1 : Template Literals

// Task 1  
let output1 = createElement("p");
let personName = "Abhishek";
let personAge = 20;
output1.innerHTML = `My name is ${personName} and my age is ${personAge}`;


// task 2
let output2 = createElement("p");
output2.innerHTML = 
`
I don't understand why
people are so
Annoying these 
Days. 🤣
`
// Array destructing 

// task 3
const array = [10, 20, 30, 40, 50];

// Destructuring the first and second elements
const [first, second] = array;

console.log(first);  // 10
console.log(second); // 20

// task 4 : object destruction
const objectDes = {
    Author : "Abhishek",
    Book : "Dumb ways to Die 🤣",
    year : 1991,
    games : "Gta V"
}

const {Author,Book} = objectDes;
console.log(Author)
console.log(Book);


// Spread and Rest Operator 
// task 5
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let newarr = [...arr1 , ...arr2]
console.log(newarr);

// task 6
function sum(...numbers){
    return numbers.reduce((acc,curr) => acc+curr,0 )
}
console.log(sum(1, 2, 3, 4)); // 10


// Activity 4 : default Parameter
// task 7

function twoProduct(a,b = 25){
    return a*b;
}
console.log(twoProduct(12,));













// Activity 5 : Enchaced Object Literals

// Task 8 : 
/*

Enhanced object literals in JavaScript make it easier to work with objects by providing shorthand syntax and features that streamline object creation and property assignment. They are especially useful in modern JavaScript (ES6+) and help make your code more concise and readable.

Here’s a breakdown of the key features of enhanced object literals:

1. Shorthand Property Names
If the property name is the same as the variable name, you can use shorthand syntax:

javascript
Copy code
const name = "John";
const age = 30;

const person = {
    name, // Equivalent to name: name
    age   // Equivalent to age: age
};

console.log(person); // { name: "John", age: 30 }
2. Shorthand Method Names
If a property is a method, you can use a shorthand syntax without the function keyword:

javascript
Copy code
const person = {
    name: "John",
    age: 30,
    greet() { // Equivalent to greet: function() { ... }
        console.log("Hello!");
    }
};

person.greet(); // "Hello!"
3. Computed Property Names
You can use expressions inside square brackets to set property names dynamically:

javascript
Copy code
const key = "age";

const person = {
    name: "John",
    [key]: 30 // Equivalent to age: 30
};

console.log(person.age); // 30
4. Method Definitions
In ES6, method definitions are simplified. You don't need to use the function keyword:

javascript
Copy code
const person = {
    name: "John",
    greet() {
        console.log("Hello!");
    },
    sayAge() {
        console.log(`I am ${this.age} years old.`);
    }
};

person.greet();  // "Hello!"
person.sayAge(); // "I am 30 years old."
5. Object Spread Syntax
You can use the spread operator (...) to copy or merge objects:

javascript
Copy code
const person = {
    name: "John",
    age: 30
};

const address = {
    city: "New York",
    country: "USA"
};

// Merging objects
const personWithAddress = {
    ...person,
    ...address
};

console.log(personWithAddress);
// { name: "John", age: 30, city: "New York", country: "USA" }
6. Property Shorthand in Destructuring
When destructuring objects, property shorthand lets you create variables with the same name as the property:

javascript
Copy code
const person = {
    name: "John",
    age: 30
};

const { name, age } = person;

console.log(name); // "John"
console.log(age);  // 30
Example Combining Multiple Features
Here’s an example combining several of the enhanced object literal features:

javascript
Copy code
const name = "John";
const age = 30;
const key = "email";

const person = {
    name,
    age,
    [key]: "john@example.com",
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

console.log(person.name); // "John"
console.log(person.email); // "john@example.com"
person.greet(); // "Hello, my name is John."
Summary
Enhanced object literals simplify object creation and manipulation with:

Shorthand Property Names
Shorthand Method Names
Computed Property Names
Simplified Method Definitions
Object Spread Syntax
Property Shorthand in Destructuring
These features help you write cleaner and more maintainable code.









*/