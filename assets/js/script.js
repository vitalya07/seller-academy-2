document.addEventListener('DOMContentLoaded', ()=> {
    //Открытие и закрытие меню
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('menu-active');
    });
    //Открытие и закрытие меню конец
    //slider
    const feedbackSlider = document.querySelector('.feedback__slider');
    if(feedbackSlider) {
        new Swiper('.feedback__slider', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            allowTouchMove: true,
                centeredSlides: true,  // Активный слайд по центру
            spaceBetween: 20, 
            pagination: {
                el: '.feedback__pagination',
            },
            navigation: {
                nextEl: '.feedback__next',
                prevEl: '.feedback__prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: -10,
                },
                450: {
                    slidesPerView: 1,
                    spaceBetween: -30,
                },
                1024: {
                    slidesPerView: 1,
                },
            }
        });
    };
    //slider конец
    //FAQ начало
        const FAQ = document.querySelector('.FAQ');
        if(FAQ) {
            const FAQItem = document.querySelectorAll('.FAQ__item');
            const FAQClose = document.querySelector('.FAQ__item-close')
            FAQItem.forEach((item,index)=> {
                item.addEventListener('click', ()=> {
                    item.classList.toggle('FAQ__item-open');
                })
            })
        }
    //FAQ конец
    const rateItem = document.querySelectorAll('.rate__item-title');
    const colors = ['#fcf2ff', '#fbedff', '#f3ccff'];

    rateItem.forEach((item, index) => {
        if (colors[index]) {
            item.style.backgroundColor = colors[index];
        }
    });
});
   