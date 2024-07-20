// Funcitons

//  task 1
function checkEvenOrOdd(num){
    if (num%2 == 0) {
        return console.log("Even");
    }else{
        return console.log("Odd");
    }
}

checkEvenOrOdd(5);

// task 2

function numSquare(num){
    return console.log(num*num);
}
numSquare(5);

// task 3

function findMax(a, b) {
    if (a > b) {
        return `${a} is greater than ${b}`;
    } else {
        return `${b} is greater than ${a}`;
    }
}

console.log(findMax(5, 7));

// task 4

function concatStrings(a,b){
    return console.log(a+b);
}
concatStrings("Hello", " World");


// Task 5

const sumOfTwo = (a,b) => {
    return a+b;
}

console.log(sumOfTwo(5,7));

// task 6

const checkCharacter = (str ,char) => {
    if (str.includes(char)){
        return true;
    }else{
        return false;
    }
}

console.log(checkCharacter("Abhishek", "A"));

// task 7
const productOfTwo = (a,b=25) => {
    return a*b;
}

console.log(productOfTwo(18,));

// task 8
const greeting = (Name, Age = 18) => {
    return `Hello ${Name}, Welcome to My Coding Journey`;
}

console.log(greeting("Lalu Prasad Yadav 🤣", ));

// task 9

// Higher order function are left to be done
