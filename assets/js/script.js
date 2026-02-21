document.addEventListener('DOMContentLoaded', ()=> {
    //Открытие и закрытие модального окна
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('menu-active');
    })
})