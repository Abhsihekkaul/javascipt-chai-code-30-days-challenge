// Conditionals

// task 1
let a = 19
if (a >= 0){
    console.log("the num is positive")
}else if (a == 0){
    console.log("The number is 0")
}else{
    console.log("The number is negative")
}

// task 2
let Age = 25
if (Age >= 18){
    console.log("You can Vote")
}else{
    console.log("You can not vote")
}

// task 3
let one = 0
let two = 20
let three = 29

if (one > two){
    if (one > three){
        console.log("One is biggest")
    }else{
        console.log("Three is biggest")
    }
}else if(two > one){
    if(two > three){
        console.log("two is biggest")
    }else{
        console.log("Three is biggest")
    }
}

// task 4
let Score = 95;

switch (true) {
    case (Score > 90):
        console.log("A");
        break;
    case (Score > 80 && Score <= 90):
        console.log("B");
        break;
    case (Score > 70 && Score <= 80):
        console.log("C");
        break;
    case (Score > 60 && Score <= 70):
        console.log("D");
        break;
    case (Score > 50 && Score <= 60):
        console.log("E");
        break;
    case (Score <= 50):
        console.log("F");
        break;
}

// Task 6 : Ternary operator 
let num = 3

let result = num%2 == 0 ? "Even " : "ODD"
console.log(result)

// Task 7 : Combining Conditions
