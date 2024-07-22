// Map , Filter , Reduce

// Map : Use when we want to transform the array
// transformation means takes each and every element of the arr
// and change it according to the requirement 
// Map are the higher order function

// Example 1 :
const arr = [2,3,4,8,5,6];
function double(x){
    return x*2;
}
// /Example 2 :
function triple(x){return x*3;}
const output = arr.map(double);
const outputOfTriple = arr.map(triple);

console.log(output);
console.log(outputOfTriple);


// we can also write logic inside the map function itself
const convertBinary = arr.map(function binary(x){
    return x.toString(2);
} ) 
console.log(convertBinary);



// Filter : use to filter the value inside the array

// let's use arrow funtion this time as you know there is no req of using return funtion if fthe arrow funtion is only 1 line big

const isOdd = arr.filter((x) => x%2 !== 0);
console.log(isOdd);

function isGreterThanFour(x){
    return x > 4;
} 

const aboveFour = arr.filter(isGreterThanFour);
console.log(aboveFour);


// Reduce : It does not reduce anything 
// here we take all the value of the array and come up with the single output out of them

// first lets normally understand ho things works in non funtional way

function findSum(arr){
    let sum = 0; // we first need to initialize a variable which will kept on increasing as the loop runs
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(findSum(arr));


// Similarly reduce funtion req to have accumulator and current value 

const totalSum = arr.reduce(function(acc, curr){
    acc += curr;
    return acc;
}, 0) // Here in the end meaning that the accumulator will be having the initial value initialize as 0 or we can chose to have whatever we want acc to demand

console.log(totalSum);

// Next Example : find Max

const findMax = arr.reduce(function(max,curr){
    if (curr > max ){  // here we are considering whereever our iterator is that is the biggest value and if it is true it will kept that otherwise curr value which i consider biggest will go along with me 
        max = curr;
    }
    return max;
}, 0)

console.log(findMax);


// More Real World Example


const users = [
    {firstName : "Abhishek", lastName: "Kaul", age : 21},
    {firstName : "Anku", lastName: "Sharma", age : 16},
    {firstName : "Ankush", lastName: "koul", age : 17},
    {firstName : "Ankur", lastName: "Bramin", age : 19},
];

const newOutput = users.map(function(x){
    return x.firstName +" "+ x.lastName;
});
console.log(newOutput);



// Chaining of these funtion 
// The highest Power Concept 

// find out the people who's age is greater than 18 and provide their first name

const nameOfAdults = users.filter((x) => x.age > 18).map((x) => x.firstName);
// In the above example mapping is done on the filtered values
console.log(nameOfAdults);

// challenge : do the above using the only reduce 