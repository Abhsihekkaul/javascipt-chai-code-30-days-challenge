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


// task 8
let newpara = createElement("p");
newpara.innerHTML = "Hello World";
let dropdown = document.querySelector("select");
let example = document.querySelector(".example")

dropdown.addEventListener("change", function(event){
            const selectedOptionText = event.target.options[event.target.selectedIndex].text; // best!!!!

            // Print the selected option text to the <p> element
            newpara.textContent = `Selected option: ${selectedOptionText}`;
})




/*

Event delegation is a technique in JavaScript where you use a single event listener to
 manage events for multiple child elements. Instead of attaching an event listener to each 
 individual child element, you attach a single event listener to a common parent element. 
 This technique takes advantage of event bubbling, where events propagate up the DOM tree,
 
 allowing you to handle events more efficiently and manage dynamic content better.

Why Use Event Delegation?
Efficiency: Reduces the number of event listeners, which can improve performance, especially with a large number of child elements.
Dynamic Content: Simplifies handling events for dynamically added elements, as you don’t need to attach event listeners to new elements individually.
How Event Delegation Works
Attach a single event listener to a parent element.
Use the event object to determine which child element triggered the event.
Execute the appropriate event handler based on the target element.
Example: Click Event Delegation
Here’s a simple example that demonstrates event delegation for click events on a list of items:


html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation Example</title>
</head>
<body>
    <ul id="parentList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <button id="addItemButton">Add Item</button>

    <script>
        // Select the parent element
        const parentList = document.getElementById('parentList');

        // Add event listener to the parent element
        parentList.addEventListener('click', function(event) {
            // Check if the clicked element is a list item
            if (event.target && event.target.nodeName === 'LI') {
                alert(`You clicked on ${event.target.textContent}`);
            }
        });

        
        // Example of adding new items dynamically
        const addItemButton = document.getElementById('addItemButton');
        addItemButton.addEventListener('click', function() {
            const newItem = document.createElement('li');
            newItem.textContent = `Item ${parentList.children.length + 1}`;
            parentList.appendChild(newItem);
        });
    </script>
</body>
</html>
Explanation
HTML Structure:

An unordered list (<ul>) with some list items (<li>).
A button to add new list items dynamically.
JavaScript:

Select the parent list element using getElementById.
Attach a click event listener to the parent list element.
Inside the event listener, check if the event target (the actual element that was clicked) is a list item (<li>). If it is, handle the click event (e.g., show an alert with the item text).
Add a click event listener to the button to dynamically add new list items.
Benefits of Event Delegation
Performance: Instead of attaching event listeners to each list item, a single event listener on the parent handles all clicks.
Dynamic Content: Newly added list items automatically inherit the event listener without needing to attach listeners individually.
Event Delegation with Multiple Event Types
You can also use event delegation for different event types. Here’s an example that handles both click and mouseover events:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Delegation Example</title>
</head>
<body>
    <ul id="parentList">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    <button id="addItemButton">Add Item</button>

    <script>
        // Select the parent element
        const parentList = document.getElementById('parentList');

        // Add event listener to the parent element
        parentList.addEventListener('click', function(event) {
            // Check if the clicked element is a list item
            if (event.target && event.target.nodeName === 'LI') {
                alert(`You clicked on ${event.target.textContent}`);
            }
        });

        parentList.addEventListener('mouseover', function(event) {
            // Check if the hovered element is a list item
            if (event.target && event.target.nodeName === 'LI') {
                event.target.style.backgroundColor = 'lightblue';
            }
        });

        parentList.addEventListener('mouseout', function(event) {
            // Check if the mouseout element is a list item
            if (event.target && event.target.nodeName === 'LI') {
                event.target.style.backgroundColor = '';
            }
        });

        // Example of adding new items dynamically
        const addItemButton = document.getElementById('addItemButton');
        addItemButton.addEventListener('click', function() {
            const newItem = document.createElement('li');
            newItem.textContent = `Item ${parentList.children.length + 1}`;
            parentList.appendChild(newItem);
        });
    </script>
</body>
</html>
Conclusion
Event delegation is a powerful technique in JavaScript that can help you manage events efficiently, especially when dealing with dynamic content. By understanding and applying this technique, you can improve the performance and maintainability of your code.









*/