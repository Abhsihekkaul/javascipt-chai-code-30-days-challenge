let isStatus = document.querySelector("h2");
let btn = document.querySelector("button");

let check = 0;
btn.addEventListener("click", function(){
    if (check == 0){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "Green";
        btn.innerHTML = "Remove Friend"
        check = 1;
    }else{
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "Red";
        btn.innerHTML = "Add Friends"
        check = 0;
    }
})