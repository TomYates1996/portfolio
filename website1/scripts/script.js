let buttonS = document.querySelectorAll(".btnpic");
let slideBox = document.querySelector(".slide-wrap")
let amountSlid = 0;
let clicked = false;
let smallButtons = document.querySelectorAll(".btncircle");
let currentSlide = 0;
let styleO1 = 2;
let styleO2 = 1;
let preSlide = null;
let postSlide = null;
let uncolour = 0;

buttonS.forEach(button => {
    button.addEventListener("click", function() {
        slideSlider(button);
    })
});

function slideSlider(a) {
    if (clicked == false) {
        clicked = true;
        if (a == buttonS[0]) {                 //left click
            preSlide = -50;
            postSlide = 0;
            if (currentSlide == 0) {
                currentSlide = 1;
                styleO1 = 2;
                styleO2 = 1;
                uncolour = 0;
            } else {
                if (currentSlide == 1) {
                    currentSlide = 0;    
                    styleO1 = 1;
                    styleO2 = 2;
                    uncolour = 1;      
                }
            }  
            doSlide();  
        }
        if (a == buttonS[1]) {      //right click
            preSlide = 0;
            postSlide = -50;
            if (currentSlide == 0) {
                currentSlide = 1;
                styleO1 = 1;
                styleO2 = 2;  
                uncolour = 0;             
            } else {
                if (currentSlide == 1) {
                    currentSlide = 0;
                    styleO1 = 2;
                    styleO2 = 1
                    uncolour = 1;
                }
            }
            doSlide();
        } 
        smallButtons[currentSlide].style.backgroundColor = "#757575";
        smallButtons[uncolour].style.backgroundColor = "#fff";
        setTimeout(function() {
            clicked = false;
        }, 1000)
    }  
}

function doSlide() {
    slideBox.style.transition = "none";
    slideBox.style.transform = "translate(" + preSlide + "%)";
    slideBox.children[0].style.order = styleO1;
    slideBox.children[1].style.order = styleO2;
    setTimeout(function() {
    slideBox.style.transition = "all 1s ease";
    slideBox.style.transform = "translate(" + postSlide + "%)";
    },10)  
}




smallButtons.forEach(button => {
    button.addEventListener("click", function() {
        smallBtnSlide(button);
    })    
});

function smallBtnSlide(a) {
    if (a == smallButtons[0]) {        
        if (currentSlide == 0) {

        } else {
            preSlide = -50;
            postSlide = 0;
            currentSlide = 0;
            styleO1 = 1;
            styleO2 = 2; 
            doSlide();
            smallButtons[0].style.backgroundColor = "#757575";
            smallButtons[1].style.backgroundColor = "#fff";
        }       
    } else {                       
        if (currentSlide == 1) {

        } else {
            preSlide = 0;
            postSlide = -50;
            currentSlide = 1;
            styleO1 = 1;
            styleO2 = 2; 
            doSlide();
            smallButtons[1].style.backgroundColor = "#757575";
            smallButtons[0].style.backgroundColor = "#fff";
        }
    }
}