  new Swiper('.feedback__slider', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            spaceBetween: -50,
            allowTouchMove: true,
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
    })