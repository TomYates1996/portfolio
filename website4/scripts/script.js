let menuUl = document.querySelector(".menu-ul");
let listItems = document.querySelectorAll(".menu-ul li a");
let backButton = document.querySelectorAll(".return-item");
let oldActive = null;
let innerDropDown = document.querySelectorAll(".main-li-el");
let categoryBar = document.querySelector(".heading-toggle-menu");
let closeBtn = document.querySelector(".close-bar");
let navOpener = document.querySelector(".nav-toggle");
let oldOne = null;
let currentA = null;
let slideBtn = document.querySelectorAll(".slidebtn");
let slideBox = document.querySelector(".long-box");
let amountSlide = null;
let boxes = document.querySelectorAll(".sliding-box-item");
let transAmo = 0;
let showMore = document.querySelector(".showmore");
let gridLis = document.querySelectorAll(".toggle-shows");
let secondSlideBtns = document.querySelectorAll(".cl-slidebtn");
let secondSlideBox = document.querySelector(".cl-long-box");
let reviewBoxes = document.querySelectorAll(".cl-box-item");
let footExtender = document.querySelectorAll(".e-f-t");
let customerBox = reviewBoxes[6];
let slidingReviews = false;
let slideAmount = 0;                              // need to reduce box count for larger screens
let bounds = 0;
let navMenu = document.querySelector(".nav-menu-con");
let offMenu = document.querySelector(".off-menu");


offMenu.addEventListener("click", function() {
    if (window.innerWidth >= 980) {
            oldActive.style.display = "none";
            oldActive = null;
            currentA.style.backgroundColor = "inherit"; 
            offMenu.style.display = "none";
    } else {
       closeMenu();  
    }
})

listItems.forEach(item => {
    item.addEventListener("click", function() {
        menuSlide(item);        
    });
});

backButton.forEach(btn => {
    btn.addEventListener("click", function() {
    menuUnslide();
    });
});

navOpener.addEventListener("click", function() {
    navMenu.style.left = "0%";
    offMenu.style.display = "flex";
})

function menuSlide(a) {
    if (oldActive == null) {
        if (window.innerWidth >= 980) {
            a.nextElementSibling.style.display = "flex";
            oldActive = a.nextElementSibling;
            a.style.backgroundColor = "#860888";
            currentA = a;
            offMenu.style.display = "flex";
        } else {
            offMenu.style.display = "flex";
            a.nextElementSibling.classList.add("active-inner");
            menuUl.classList.add("active-tab");
            oldActive = a.nextElementSibling;
            categoryBar.children[0].style.marginRight = "130%";
            categoryBar.children[1].style.right = "50%";
            categoryBar.children[1].style.width = "100%";
            a.style.backgroundColor = "#860888";
            currentA = a;
        }
        
    } else {
        if (window.innerWidth >=980) {
            if (oldActive == a.nextElementSibling) {
                oldActive.style.display = "none";
                oldActive = null;
                currentA.style.backgroundColor = "inherit"; 
                a.style.backgroundColor = "inherit";
                currentA = a;
                offMenu.style.display = "none";
            } else {
                oldActive.style.display = "none";
                a.nextElementSibling.style.display = "flex";
                oldActive = a.nextElementSibling;
                currentA.style.backgroundColor = "inherit"; 
                a.style.backgroundColor = "#860888";
                currentA = a;
            }
        } else {
            oldActive.classList.remove("active-inner");
            a.nextElementSibling.classList.add("active-inner");
            currentA = a;
            menuUl.classList.add("active-tab");
            oldActive = a.nextElementSibling;
            categoryBar.children[0].style.marginRight = "300%";
            categoryBar.children[1].style.right = "50%";  
            categoryBar.children[1].style.width = "100%";  
            currentA.style.backgroundColor = "#860888";
             
        }   
    } 
}
function menuUnslide() {
    menuUl.classList.remove("active-tab");
    categoryBar.children[0].style.marginRight = "0%";
    categoryBar.children[1].style.right = "35px";
    categoryBar.children[1].style.width = "auto";
    if (currentA != null) {
        currentA.style.backgroundColor = "inherit"; 
        currentA = null;
    }
    if (oldOne != null) {
        oldOne.previousElementSibling.children[1].innerHTML = "+";
        oldOne.classList.remove("max-heighto"); 
        oldOne.previousElementSibling.style.backgroundColor = "inherit";
        oldOne = null;
    }
            
    
}

innerDropDown.forEach(el => {
    el.addEventListener("click", function() {
        extendBox(el);
    })
});

function extendBox(a) {
    if (window.innerWidth >= 981) {
        
    } else {
    if (a.nextElementSibling.classList.contains("max-heighto") == true) {
        a.nextElementSibling.classList.remove("max-heighto") 
        a.children[1].innerHTML = "+";
        a.style.backgroundColor = "inherit";
        a.style.borderBottom = "1px #fff solid";
        oldOne = null;        
    } else {
        a.nextElementSibling.classList.add("max-heighto");
        a.style.backgroundColor = "#860888";
        a.children[1].innerHTML = "-";
        a.style.borderBottom = "none";
        if (oldOne != null) {
            oldOne.previousElementSibling.children[1].innerHTML = "+";
            oldOne.classList.remove("max-heighto"); 
            oldOne.previousElementSibling.style.backgroundColor = "inherit";
            a.style.borderBottom = "1px #fff solid";
        }
        oldOne = a.nextElementSibling;
    };  
}
};

closeBtn.addEventListener("click", function() {
    closeMenu();    
});
function closeMenu() {
    navMenu.style.left = "-100%";
    offMenu.style.display = "none";        
    setTimeout(function() {
        menuUnslide();        
    }, 300);
};




slideBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        slideSlider(btn);        
    })    
});




function slideSlider(b) {
    if (b == slideBtn[0]) {       //left
        slideBox.style.transition = "all 0.1s ease-in"
        slideBox.style.transform = "translateX(" + 33.33/2 + "%)";
        setTimeout(function() {
            changeBoxOrder();
        },100)
    }   else {
        if (b == slideBtn[1]) {
            slideBox.style.transition = "all 0.1s ease-in"
            slideBox.style.transform = "translateX(" + -33.33/2 + "%)";
            setTimeout(function() {
                changeBoxOrderRight();
            },100) 
        }
    }
}

function changeBoxOrder() {
    transAmo = -33.33/2;
    slideboxSwap();
    boxes.forEach(box => {
        if (box.classList.contains("right-box") == true) {
            box.classList.remove("right-box");
            box.classList.add("left-box");
        } else {
            if (box.classList.contains("left-box") == true) {
            box.classList.remove("left-box");
            box.classList.add("active-box");    
            } else {
                if (box.classList.contains("active-box") == true) {
                box.classList.remove("active-box");
                box.classList.add("right-box");               
                }
            }
        }
    });
};
function slideboxSwap() {
    slideBox.style.transition = "none";
    slideBox.style.transform = "translateX(" + transAmo + "%)"
    setTimeout(function() {
    slideBox.style.transition = "all 0.1s ease-out";
    slideBox.style.transform = "translateX(" + 0 + "%)";                
    }, 1);
}

function changeBoxOrderRight() {
    transAmo = 33.33/2;
    slideboxSwap();
    boxes.forEach(box => {
        if (box.classList.contains("right-box") == true) {
            box.classList.remove("right-box");
            box.classList.add("active-box");
        } else {
            if (box.classList.contains("left-box") == true) {
            box.classList.remove("left-box");
            box.classList.add("right-box");   
            } else {
                if (box.classList.contains("active-box") == true) {
                box.classList.remove("active-box");
                box.classList.add("left-box");             
                }
            }
        }
    });
};


showMore.addEventListener("click", function() {
    toggleShowMore();    
})

function toggleShowMore() {
    if (gridLis[0].style.maxHeight == "300px") {
        gridLis.forEach(li => {
            li.style.maxHeight = "0px";
            showMore.children[0].innerHTML = "Show More";
        });
    } else {
        gridLis.forEach(li => {
            li.style.maxHeight = "300px";
            showMore.children[0].innerHTML = "Show Less";
        });
    }
}
console.log(getComputedStyle(customerBox).display);

//// SECOND SLIDING SECTION
secondSlideBtns.forEach(btn => {
    btn.addEventListener("click", function() {
        slideReviews(btn);        
    })
})

let oldTranny = 0;
// 100 divided by review box amount times 3 then 100 - answer // or 100/reviewboxamount * reviewboxamount-3
// should give left and right bounds

function initialiseCustomerVar() {
    if (window.innerWidth >= 600) {
        slideAmount = 100/(reviewBoxes.length);                              // need to reduce box count for larger screens
        bounds = slideAmount*(reviewBoxes.length -3)/2;
    } else {
        slideAmount = 100/reviewBoxes.length;                              // need to reduce box count for larger screens
        bounds = slideAmount*(reviewBoxes.length -3)/2;
    }

}
initialiseCustomerVar();

// window.onresize = function () {
//      if (window.innerWidth >= 600) {
      slideAmount = 100/(reviewBoxes.length);  
      console.log(slideAmount);                            // need to reduce box count for larger screens
//         bounds = slideAmount*(reviewBoxes.length -4)/2;
//         secondSlideBox.style.transform = "translateX(" + (0) + "%)"; 
//         oldTranny = 0;
//         console.log(bounds);
//      }
// }

let prev = 0;
reviewBoxes.forEach(box => {
    box.style.order = prev + 1;
    prev = prev + 1;
});
function slideReviews(b) {
    if (slidingReviews == true) {
        
    } else {
        slidingReviews = true;
      if (b == secondSlideBtns[0]) {                // Left click  
        secondSlideBox.style.transition = "all 0.4s ease"                       //secondSlideBox    
        secondSlideBox.style.transform = "translateX(" + (-12.65+slideAmount) + "%)";
        setTimeout(function() {
            secondSlideBox.style.transition = "none";
            secondSlideBox.style.transform = "translateX(" + -12.65 + "%)";
            reviewBoxes.forEach(box => {
            if (box.style.order >= 15) {
                box.style.order = 1;
            } else {
                box.style.order = (parseInt(box.style.order) + 1);
            } 
        })
        slidingReviews = false; 
        }, 400);
        
    } else {
        if (b == secondSlideBtns[1]) {
            secondSlideBox.style.transition = "all 0.4s ease"                       //secondSlideBox    
            secondSlideBox.style.transform = "translateX(" + (-12.65-slideAmount) + "%)";
            setTimeout(function() {
            secondSlideBox.style.transition = "none";
            secondSlideBox.style.transform = "translateX(" + -12.65 + "%)";
            reviewBoxes.forEach(box => {
            if (box.style.order <= 1) {
                box.style.order = 15;
            } else {
                box.style.order = (parseInt(box.style.order) - 1);
            } 
        })
        slidingReviews = false; 
        }, 400);
        }
    }  
    }
}


// Foot
let lastFoot = null;

footExtender.forEach(item => {
    item.addEventListener("click", function () {
        extendFoot(item);
    })    
});

function extendFoot(a) {
    if (lastFoot != null) {
        if (a == lastFoot) {
            a.nextElementSibling.style.maxHeight = "0px";
            a.children[1].innerHTML = "+";
            lastFoot = null;
        } else {
             a.nextElementSibling.style.maxHeight = "300px";
             a.children[1].innerHTML = "-";
             lastFoot.nextElementSibling.style.maxHeight = "0px";
             lastFoot.children[1].innerHTML = "+";
             lastFoot = a;
        }
    } else {
        a.nextElementSibling.style.maxHeight = "300px";
        a.children[1].innerHTML = "-";
        lastFoot = a;
    }
}