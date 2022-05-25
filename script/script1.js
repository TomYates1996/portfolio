let menuclicker = document.querySelector(".menu-checkbox");
let menu = document.querySelector(".navbar .nav-container .websites-box");
let top2 = 0
let menuset = getComputedStyle(menu, null).display;
let top1 = -150;
let menuheight = 250
let timer = null;
let speed = (25)
let up = true;
let moving = "no";

menuclicker.addEventListener("click",function(){
    menushow();
});

function menushow(){
    if (up==true){
        menu.style.maxHeight = '350px';
        up = false;
    } else {
        menu.style.maxHeight = '0px';
        up = true;
    }
}


// function menushow() {
//     if (up == "up" && moving == "no") {
//         menuset = menu.style.display = "flex";
//         top2 = 100;  
//         timer = setInterval(slidein, 1); 
//         up = "no";       
//         moving = "yes";
//     } else{
//         if (moving == "no") {
//             menuset = menu.style.display = "flex";
//             top2 = -250;
//             timer = setInterval(slideout, 1);  
//             up = "up";
//             moving = "yes";
//         }
//     }
// }



function slidein() {   
    if (top1 == 100) {
        clearInterval(timer); 
        moving = "no";       
    } else {
        top1 = top1 + speed;
        menu.style.top = top1 + "px";
    }
}
function slideout() {
    if (top1 == -150) {
        clearInterval(timer); 
        moving = "no";     
    } else {
        top1 = top1 - speed;
        menu.style.top = top1 + "px";
    }
}
