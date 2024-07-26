// DOM : Document Object Model

// 4 Pillars of DOM : 1. Selection of Element , 2. Changing HTML
//                    3. Changing CSS , 4. Event Listeners


// Selection

let a = document.querySelector("h1");

// changing Html
a.innerHTML = "Changed HTML";


// Changing css
// in order to do it just write .sytle
// Remeber to use camelCase while using the properties
a.style.backgroundColor = 'green';


// Event Listener
 a.addEventListener('click', function(){
    a.innerHTML = "Badal Gya hu main Teri ex ki tarah 🤣";
 })


//  Bulb project

let bulb = document.querySelector(".bulb");
let buttonForLight = document.querySelector(".btn")
let flag = 0;
buttonForLight.addEventListener('click', function(){
    if(flag == 0){
        bulb.style.backgroundColor = "Yellow";
        flag = 1;
        buttonForLight.innerHTML = "OFF"
    }else{
        bulb.style.backgroundColor = "transparent";
        flag = 0;
        buttonForLight.innerHTML = "ON"
    }
})