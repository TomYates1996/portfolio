let languageSelect = document.querySelector(".country-box");
let countryBox = document.querySelector('.country-options');
let ladybuttons = document.querySelectorAll('.slide-btn');
let slidebox = document.querySelector('.product-scroll-container');
let transAmo = 190;
let prevTran = 0;
let allowReclick = true;
let maxTranny = slidebox.childElementCount * 220
let basket = document.querySelector('.basket');
let picnicMat = document.querySelector('.picnic-con');
let picNum = 2;
let endBasket = false;
let wheaty = document.querySelector('.wheat-grow-con');
let inBox = true;
let toggle = document.querySelector('.toggle');
let leftNav = document.querySelector('.left_nav');

console.log(maxTranny);

languageSelect.addEventListener('click',function() {
    toggleBox();
})

function toggleBox() {
    console.log(countryBox.style.display);
    if (countryBox.style.display!='flex') {
        countryBox.style.display='flex';
    }
    else {
        countryBox.style.display='none';
    }
}

ladybuttons.forEach(btn => {
    btn.addEventListener('click', function(){
        slideSlider(btn);
    })
});

function slideSlider(btn) {
    if (allowReclick==true) {
        allowReclick = false;
        if (btn.classList[1] == 'left' && (prevTran + 10 < 1)){
            btn.classList.add('l-animated-ladybird');
                prevTran = prevTran + 10;
                slidebox.style.transform = 'translateX(' + prevTran + '%)';
                setTimeout(function(){
                    btn.classList.remove('l-animated-ladybird');
                    allowReclick = true;
                }, 2000);
        } else {
            if (btn.classList[1] == 'right'  && (prevTran - 10 > -51)){
                btn.classList.add('r-animated-ladybird');
                prevTran = prevTran - 10;
                slidebox.style.transform = 'translateX(' + prevTran + '%)';
                setTimeout(function(){
                    btn.classList.remove('r-animated-ladybird');
                    allowReclick = true;
                }, 2000);
            } else {
                allowReclick = true;
            }
        }
    }
    
}


basket.addEventListener('mouseover', function() {
    if (endBasket == false){
        basket.style.top = '20%';
        basket.style.transform = 'rotate(180deg)';
    };
})
basket.addEventListener('click', function() {
    if (endBasket == false){
        basket.style.transform = 'all 0.3s linear';
        basket.style.top = '25%';
        setTimeout(function(){
            basket.style.top = '20%';
            picnicMat.children[picNum].style.display = 'flex';
            picNum = picNum + 1;
            console.log(picnicMat.childElementCount);
            if (picNum > picnicMat.childElementCount - 1) {
                endBasket = true;
                basket.style.top = '50%';
                basket.style.left = '20%';
                basket.style.transform = 'rotate(0deg)';
            };
        }, 700)
    };
})

// Scroll observer 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
                wheaty.classList.add('anim-wheat');
                console.log('in-box');
        };
    });
});
observer.observe(wheaty);

window.addEventListener("resize", function(){
    if (window.innerWidth>750 && leftNav.style.display=='none'){
        leftNav.style.display = 'flex';
        console.log(window.innerWidth);
    } else {
        if (this.window.innerWidth<550){
            slidebox.style.transform = 'translateX(' + 0 + '%)'
            prevTran = 0;
        };
    };
  });

// Toggle

toggle.addEventListener('click', function(){
    if (leftNav.style.display=='flex') {
        leftNav.style.display = 'none';
    } else {
        leftNav.style.display = 'flex';
    }
})


