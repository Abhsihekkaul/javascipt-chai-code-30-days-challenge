// Learn "this" Keyword

"use strict";//  to enable strict mode 


// the "This" keyword works differently in diffferent context

// 1 : "this" in global space

console.log(this);  //represent the global object
// so if we will be using it inside the console then it will show the window as a global object 
// Every Javascipt runtime will have their different value of this


// 2 : "this" inside a funtion
function x(){
    console.log(this);
    // Inside the funtion the value of "this" depends upon the strict and non strict mode 
}

x(); // while in strict mode the answer comes up as undefined 

// there is something knows as "this substitution"
// which states if the value of the this keyword is undefied or null then javascript willreplace this with global object 


// The value of this keyword also depends on how it is called 
// even if the funtion will be called with the window the it still gng to provide the window object as output
// window.x();



// "This" inside the object

const obj = {
    a : 20,
    x : function (){
        console.log(this);
    }
}

obj.x(); //Inside object the value of this is the object itself;
// if we will do this.a then the this will referenc eto the object and a will be reference 
// to the key inside the object obj



// Topic : call, apply and bind (Sharing method)


// if we have two objects and wee want to share the method of 1st obj to 2nd object then
// we use call apply and bind methods

const student = {
    name : "Abhishek",
    printName : function (){
        console.log(this.name); //this will be the student obj and .name will refer to the variable inside 
    }
}

console.log(student.printName());

const student2 = {
    name: "Anku",
}

// Now in order to use the method of the 1st funtion in second we will use the call 
student.printName.call(student2); //Here this is refering to student 2


// How does "this " works in arrow funtion 
// arrow funtion don't have this binding associated to it however "this " will be in arrow funtion is enclosing lexical context
// ṭherefore it will take the value of the window object as it lexically available in the global space

// if i create a method inside the object and inside the method i will further create a arrow funtion and inside arrow funtion i will
// print the "this" thereafter as we know the arrow funtion is encllosed inside the method therefore the answer will become 
//  the object rather than window objecct itself.

