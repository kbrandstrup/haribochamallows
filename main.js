const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');


let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('menuopen');
        menu.classList.remove('menuclosed');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.add('menuclosed');
        menu.classList.remove('menuopen');
        menuOpen = false;
    }
});
