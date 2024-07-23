// Task 1: Selecting and Manipulating Element
let fPara = document.querySelector('.firstPara');
fPara.innerHTML = "I am Changed now ";
fPara.style.backgroundColor = "Red";
fPara.style.fontSize = "60px";

// Task 2: Creating and appending elements
let sPara = document.createElement("p");
sPara.innerHTML = "I am created Inside the Javascript";
document.querySelector("body").appendChild(sPara);

// Task 3: Creating and appending a new div
let newDiv = document.createElement("div");
document.querySelector("body").appendChild(newDiv);
newDiv.innerHTML = "Hey I'm a New Div";
newDiv.style.backgroundColor = "Red";

// Task 4: Creating and appending a list with items
let undefinedList = document.createElement("ul");
document.querySelector("body").appendChild(undefinedList);

let itemOne = document.createElement("li");
itemOne.innerHTML = "Tomatoes";
undefinedList.appendChild(itemOne);

let itemTwo = document.createElement("li");
itemTwo.innerHTML = "Bell Paper";
undefinedList.appendChild(itemTwo);

let itemThree = document.createElement("li");
itemThree.innerHTML = "Spinach";
undefinedList.appendChild(itemThree);

// Task 5: Deletion
newDiv.remove();

// Task 6: Remove the last child of a specific element
undefinedList.removeChild(undefinedList.lastChild);

// Task 7: Modifying attribute and Classes
undefinedList.setAttribute("class", "vegtableList");

let addedClass = document.querySelector('.vegtableList');
addedClass.removeChild(addedClass.lastChild);

// Task 8: Add and remove Class
fPara.setAttribute("class", "MyPara");
let newVar = document.querySelector(".MyPara");
newVar.innerHTML = "Click on me I got one more surprise";

// Task 9: Event Listener
newVar.addEventListener("click", function () {
    newVar.innerHTML = "I am getting changed for the third time";
});

// Task 10: mouseover Event Listener
// Recreate the newDiv as it was removed in Task 5
newDiv = document.createElement("div");
document.querySelector("body").appendChild(newDiv);
newDiv.innerHTML = "Hover over me";
newDiv.style.backgroundColor = "Blue";

newDiv.addEventListener("mouseover", function () {
    newDiv.style.backgroundColor = "Red";
});
