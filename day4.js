// Conditionals
// quick note : One need to declare their rray using the const keyword it does not make it a constant however we can still make changes to it it just make its referencce constant


// task 1

for(let i = 0; i < 10; i++){
    console.log(i+1);
}

console.log('\n')

// task 2
for(let i = 0; i < 10; i++){
    console.log((i+1)*5);
}

console.log('\n');

// task 3
let i = 0;
let sum = 0;
while(i <= 10){
    sum += i;
    i++;
}
console.log(sum);

console.log('\n')

// task 4
let num = 10;
while(num >= 0 ){
    console.log(num);
    num--;
}

console.log('\n');

// task 5
n = 0;
do{
    console.log(n+1);
    n++;

}while(n<5);

console.log('\n')
// task 6
num = 5;
let factorial = 1;
do{
    factorial *= num;
    num--; 
}while(num > 0);
console.log(factorial);

console.log('\n');
// task 7
let numOfRows = 5;
for(let i = 0; i < numOfRows; i++){
    let row = '';
    for(let j = 0; j <= i; j++){
        row += '*';
    }
    console.log(row);
}

console.log('\n');
// task 8
for(let k = 0; k <= 10; k++){
    if(k == 5){
        continue;
    }console.log(k);
}

console.log('\n');
// task 9
for(let k = 0; k <= 10; k++){
    if(k == 6){
        break;
    }console.log(k);
}