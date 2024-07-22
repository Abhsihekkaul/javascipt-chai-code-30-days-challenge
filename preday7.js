// Higher Order Function
// A function which takes another function as argument or 
// returns function as an output are considered as 
// higher order funtion 

// Example 1 : 

// This one is considered as callback function 
function x(){
    console.log("Namaste");
}
// This one is the higher order funtion of above example
function y(x){
    x();
}
y(x);


// Higher order function are came into play so that one 
// will not repeat himself over and over again 

// below are the radius of 4 circles
const radiusOfCircles = [1,2,3,4,5];

const area = function(radiusOfCircles){
    return (2 * Math.PI * (radiusOfCircles*radiusOfCircles));
};

const circumference = function(radiusOfCircles){
    return (2 * Math.PI * radiusOfCircles);
} 

const calculate = function(radiusOfCircles, logicalFunction){
    const output = [];
    for(let i = 0; i < radiusOfCircles.length; i++){
        output.push(Math.round(logicalFunction(radiusOfCircles[i])));
    }
    return output;
}

console.log(calculate(radiusOfCircles, area));
console.log(calculate(radiusOfCircles, circumference));


// All we did in the above example is like writing the 
// code fofr the map function which in itself is an hof
console.log(radiusOfCircles.map(area));


// Watch this specific video again as the last part is difficult 
// https://www.youtube.com/watch?v=HkWxvB1RJq0
