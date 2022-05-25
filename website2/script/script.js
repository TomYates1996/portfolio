let navBar = document.querySelector('.header-outer')

window.addEventListener('scroll', function(){
    if ((window.scrollY - document.querySelector('.details-outer').offsetTop) > -100){
        if(navBar.classList.contains('nav-colour')){
            return
        } else {
            navBar.classList.add('nav-colour')
        }
    } else {
        if(navBar.classList.contains('nav-colour')) {
            navBar.classList.remove('nav-colour')
        }
    }
})
