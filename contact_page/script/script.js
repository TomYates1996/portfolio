let checkbox = document.querySelector('.checkbox-mobile');
let dropMenu = document.querySelector('.drop-menu');

checkbox.addEventListener('click', function() {
    toggleDrop()
});

function toggleDrop() {
    if (checkbox.checked == true){
        dropMenu.classList.add('active');
        console.log('active');
    } else {
        dropMenu.classList.remove('active');
        console.log('removed');
    }
};
