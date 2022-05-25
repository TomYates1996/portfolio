let linkTags = [...document.querySelectorAll('.nav-links li a')];
let ball = document.querySelector('.ball');
let highTime = null;

linkTags.forEach(el => {
    let i = linkTags.indexOf(el);
    el.addEventListener('mouseenter', function(el) {
        enterTag(el, i)
        }
    );
    el.addEventListener('mouseleave',  function(el) {
        leaveTag(el, i)
        }
    );
});

function enterTag(el, i) {
    ball.classList.add(`position-${i}`);
    ball.classList.add(`up`);
    highTime = setTimeout(function(){
        ball.classList.remove(`up`);
    }, 250);
}
function leaveTag(el, i) {
    ball.classList.remove(`position-${i}`);
    console.log(ball.classList.length);
    if (ball.classList.length == 2 && ball.classList.contains('up')) {
        ball.classList.remove(`up`);
    }
    clearTimeout(highTime);
}