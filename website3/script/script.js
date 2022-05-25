let slide1 = document.querySelector("#slide1");
let slide2 = document.querySelector("#slide2");
let slide3 = document.querySelector("#slide3");
let slidesarray = document.querySelectorAll(".slide");
let timer = null;
let currentslide = 0;
let rightbutton = document.querySelector("#rightbutton");
let leftbutton = document.querySelector("#leftbutton");
let cb1 = document.querySelectorAll(".cb1");
let cb2 = document.querySelectorAll(".cb2");
let btnnum = -1;
let currentactive = 0;
let hideslide = -1;
let switching = "false";
let endslidenumber = slidesarray.length - 1;
let movingtab = document.querySelector(".find-out-more-tab");
let scrolling = document.addEventListener("scroll", function() {
    scrolldo();    
})
let slidebox = document.querySelector(".image-showcase-con");
let slideboxTop = slidebox.offsetTop;
let slideboxHeight = slidebox.offsetHeight;
let bottomTab = document.querySelector(".find-out-more-tab")
let LonelySlide = document.querySelector(".single-slide-load")
let TopLonelySlide = LonelySlide.offsetTop;
let currentCb2 = 0;
// Long slide box variables //
let longBox = document.querySelector(".long-slide-box");
let longSlides = document.querySelectorAll(".car-slide");
let AmountLongSlides = longSlides.length;
let translateAmountPer = 100/AmountLongSlides;
let translateAmount = null;
let autoCb2Timer = null;
let newCb2AndSlide = -1;
let bonusButtons = document.querySelectorAll("#smallshow-cb2")
// Geolocate button //
let geoButton = document.querySelector(".geolocate");
let userLocation = null;
let geoSearchBar = document.querySelector(".search-geolocate")
// Getting the mobile navs checkboxes 
let outerCheckboxes = document.querySelectorAll(".a-check");
let innerCheckboxes = document.querySelectorAll(".b-check");
let lastAtype = null;
let lastBtype = null;
let toggleCheckbox = document.querySelector(".toggle-m");
//
// let wasBelow = null;
// if (window.innerWidth <= 620) {
//     wasBelow = true;
// } else {
//     wasBelow = false;
// }



// window.addEventListener('resize', function() {
//     if (wasBelow == true && window.innerWidth > 620) {
//         AmountLongSlides = longSlides.length;
//         translateAmountPer = 100/AmountLongSlides;
//         wasBelow = false;
//     } else {
//         if (wasBelow != true && window.innerWidth <= 620) {
//             translateAmountPer = 200/AmountLongSlides;
//             console.log(translateAmountPer);
//             wasBelow = true;
//         }
//     }  
// });



toggleCheckbox.addEventListener("click", function() {   
    closeAllChecks();    
})
function closeAllChecks() {
    if (lastAtype == null) {
    } else {
        if (lastBtype == null) {
            
        } else {
        lastBtype.checked = false;  
        }
        lastAtype.checked = false;
    } 
      
}


outerCheckboxes.forEach(box => {
    box.addEventListener("click", function() {
    closeOuterBox(box);    
    }) 
});
function closeOuterBox(box) {
    if (lastAtype == null || lastAtype == box) {
        if (lastAtype == box && lastBtype != null) {
            lastBtype.checked = false;
            lastBtype = null;
        }
    } else {
        lastAtype.checked = false;
        if (lastBtype == null) {          
        } 
    }
    lastAtype = box;
    box.scrollIntoView();
}

innerCheckboxes.forEach(box => {
    box.addEventListener("click", function() {
    closeInnerBox(box);    
    }) 
});
function closeInnerBox(box) {
    if (lastBtype == null || lastBtype == box) {
        // if (lastBtype == box) {
        //     lastAtype.scrollIntoView();          
        // }
    } else {
        lastBtype.checked = false;
        box.scrollIntoView();
    }
    lastBtype = box;
    
}


// innerCheckboxes.forEach(box => {
//     console.log("hello");
//     box.checked = true;   
//     console.log(box.checked); 
// });





cb1.forEach(button => {
    button.addEventListener("click", function(e) {
        if (switching == "true") {
            
        } else {
        manualchange(cb1, button);        
        }
        e.preventDefault();
    })    
});

cb2.forEach(button => {
    button.addEventListener("click", function(e) {
        clearInterval(autoCb2Timer);
        autoCb2Timer = null;
        if (switching == "true") {
            
        } else {
            btnnum = 0;
            while (cb2[btnnum] !== button) {
                btnnum++;
            }
            if (btnnum == currentCb2) {
                cb2[btnnum].children[0].style.animation = "none";
                cb2[btnnum].children[0].children[0].style.animation = "none";
                cb2[btnnum].children[0].children[0].children[0].style.animation = "none";
                cb2[btnnum].children[0].children[1].style.animation = "none";
                setTimeout(function() { 
                    cb2[btnnum].children[0].style.animation = "";
                    cb2[btnnum].children[0].children[0].style.animation = "";
                    cb2[btnnum].children[0].children[0].children[0].style.animation = "";
                    cb2[btnnum].children[0].children[1].style.animation = ""; 
                    autoCb2Timer = setInterval(function () {
                        autoSlideCb2s();
                    }, 10000);        
                      }, 10);
            } else {
                changebutton(btnnum, cb2);
                slidetheslider(btnnum); 
            }
                    
        }
        e.preventDefault();
    })    
});

function slidetheslider(btnnum) {
    if (getComputedStyle(bonusButtons[1]).display == "none") {
        translateAmount = translateAmountPer*btnnum;
    } else {
        translateAmount = translateAmountPer*btnnum/2;
    }
    longBox.style.transform = "translateX(" + -translateAmount + "%)";
    if (autoCb2Timer == null) {
        autoCb2Timer = setInterval(function () {
            autoSlideCb2s();
        }, 10000); 
                       
    }
}

autoCb2Timer = setInterval(function () {
    autoSlideCb2s();
}, 10000);


function autoSlideCb2s() {
    if (getComputedStyle(bonusButtons[1]).display == "none") {
        if (newCb2AndSlide = currentCb2 + 1 > cb2.length/2 - 1) {
            newCb2AndSlide = 0;
        } else {
            newCb2AndSlide = currentCb2 + 1
        }
    } else {
        if (newCb2AndSlide = currentCb2 + 1 > cb2.length - 1) {
            newCb2AndSlide = 0;
        } else {
            newCb2AndSlide = currentCb2 + 1
        }
    }
    changebutton(newCb2AndSlide, cb2);
    slidetheslider(newCb2AndSlide); 
}



function changebutton(makeactive, array) {
    array[currentCb2].classList.remove("active");
    array[makeactive].classList.add("active");
    currentCb2 = makeactive;
}


function manualchange(array, item) {
    btnnum = 0;
        while (array[btnnum] !== item) {
            btnnum++;
        }
    changeactive(btnnum);
    currentslide = btnnum;
    clearInterval(timer);
    timer = setInterval(function () {
        autoslide();   
       }, 10000);
}

function changeactive(toadd) {
    switching = "true";
    if (toadd == currentactive) {
        cb1[toadd].classList.remove("active");
        slidesarray[currentactive].classList.remove("active");
        slidesarray[toadd].classList.add("endingimage");
        setTimeout(function() {
            slidesarray[toadd].classList.remove("endingimage");
            slidesarray[toadd].classList.add("active");
            cb1[toadd].classList.add("active");
            switching = "false";
        }, 500)
    } else {
    cb1[toadd].classList.add("active");
    cb1[currentactive].classList.remove("active");
    slidesarray[currentactive].classList.add("endingimage");
    setTimeout(function() {
        slidesarray[currentactive].classList.remove("active");
        slidesarray[currentactive].style.display = "none";
        slidesarray[currentactive].classList.remove("endingimage");
        slidesarray[toadd].classList.add("active");
        slidesarray[toadd].style.display = "flex";
        currentactive = toadd;
        switching = "false";
    }, 500) }
    
   
}


leftbutton.addEventListener("click", function () {
    if (currentactive == 0) {
        changeactive(endslidenumber);
        currentslide = endslidenumber;
    } else {
        changeactive(currentactive - 1);
        currentslide = currentactive - 1;
    }       
    clearInterval(timer);
    timer = setInterval(function () {
        autoslide();   
       }, 10000);
})
rightbutton.addEventListener("click", function () {
    if (currentactive == endslidenumber) {
        changeactive(0); 
        currentslide = 0;
    } else {
        changeactive(currentactive + 1);
        currentslide = currentactive + 1;
    }       
    clearInterval(timer);
    timer = setInterval(function () {
        autoslide();   
       }, 10000);
})

function initialiseslides() {
    slidesarray.forEach(slide => {
        slide.style.display = "none";
    });
    slidesarray[0].style.display = "flex";
    cb1[0].classList.add("active");
    slidesarray[0].classList.add("active");
    currentactive = 0;
}
initialiseslides();

function autoslide() {
    if (currentslide == endslidenumber) {
        currentslide = 0;        
    } else {
        currentslide = currentslide + 1;   
    }   
    changeactive(currentslide) 
}

timer = setInterval(function () {
     autoslide();   
    }, 10000);

function scrolldo() {
    if ((window.scrollY + window.innerHeight) >= (slideboxHeight + slideboxTop)) {
        if ( bottomTab.style.position = "fixed") {
             bottomTab.style.position = "absolute";
        } 
        if (window.scrollY + window.innerHeight >= TopLonelySlide + 200) {
            LonelySlide.classList.add("at-marker");
        }   
    } else {
        if ( bottomTab.style.position = "absolute") {
            bottomTab.style.position = "fixed";
        }
    }
};


// ADDING AN EVENT LISTENER TO THE GEOLOCATE BUTTON WITH A FUNCTION //
geoButton.addEventListener("click", function () {
    getLocationFN();    
})

function getLocationFN() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        userLocation = "Geolocation is not supported by this browser.";
      } 
}
function showPosition(position) {
    userLocation = "Latitude: " + position.coords.latitude +
    ", Longitude: " + position.coords.longitude;
    
    console.log(userLocation);
    console.log(userLocation);
    geoSearchBar.value = userLocation;      
} 
