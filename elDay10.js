// Event Handling

// Creating a function which will create the elements and return them
function createElement(elementType) {
    let element = document.createElement(String(elementType));
    document.querySelector("body").appendChild(element);
    return element;
}

// Activity 1 : Basic Event Handling

// Creating the Tag 1
let fPara = createElement("p");
fPara.innerHTML = "Hello World";
fPara.style.fontSize = "40px"; 

// Creating the button
let fButton = createElement("button");
fButton.innerHTML = "Click Me";
fButton.style.fontSize = "40px"; 

// Writing Logic for Event Handling
fButton.addEventListener('click', function(){
    fPara.innerHTML = "Thanks You Changed Me";
});

// Creating an h1 element
let firstName = createElement("h1");
firstName.innerHTML = "Hello Mate!";

// task 2: Adding an image
let img = createElement("img");
img.setAttribute("src", "d1.png");
img.style.border = "5px solid black";
img.style.borderRadius = "50%";
img.style.height = "300px";
img.style.width = "300px";

img.addEventListener("dblclick", function(){
    img.style.opacity = ".5";
});

// Activity 2 : Mouse Events

// task 3: Adding a div with mouseover event
let newDiv1 = createElement("div");
newDiv1.style.width = "100px";
newDiv1.style.height = "100px";
newDiv1.style.backgroundColor = "red";

newDiv1.addEventListener("mouseover", function(){
    newDiv1.style.backgroundColor = "yellow";
});

// task 4: Adding a div with mouseout event
let newDiv2 = createElement("div");
newDiv2.style.width = "100px";
newDiv2.style.height = "100px";
newDiv2.style.backgroundColor = "red";

newDiv2.addEventListener("mouseout", function(){
    newDiv2.style.backgroundColor = "green";
});

// Activity 3 : Keyboard Events

// task 5: Adding an input field with keydown event
let inputField = createElement("input");
inputField.setAttribute("type", "text");
inputField.style.height = "30px";
inputField.style.width = "100px";
inputField.style.margin = "20px";
inputField.style.display = "block";

inputField.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
        console.log("You pressed the downward key");
    }
});

// task 6: Adding another input field with keydown event (if needed, otherwise remove this if it's a duplicate)
let inputField2 = createElement("input");
inputField2.setAttribute("type", "text");
inputField2.style.height = "30px";
inputField2.style.width = "100px";
inputField2.style.margin = "20px";
inputField2.style.display = "block";

let nP = createElement("p")
inputField2.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") {
        nP.innerHTML = "Hey bitch! "
    }
});


// Activity 4 : Form Event
// task 7 : 
let h2 = createElement("h2");
h2.innerHTML = "Type Your Form"

let inputField3 = createElement("input");
inputField3.setAttribute("type", "text");
inputField3.style.height = "350px";
inputField3.style.width = "250px";
inputField3.style.margin = "30px";
inputField3.style.display = "block";

let SubmitButton = createElement("button");
SubmitButton.innerHTML = "Submit";

SubmitButton.addEventListener("click", function(){
        console.log(inputField3.value);
        inputField3.value = " ";
});
