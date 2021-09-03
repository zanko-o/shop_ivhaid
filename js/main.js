const swiper_last_product = new Swiper('.swiper-last-product', {
    // Default parameters
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },


    breakpoints: {
        
        586: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        786: {
            slidesPerView: 3.5,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        // when window width is >= 480px
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        // when window width is >= 640px
        1400: {
            slidesPerView: 6,
            spaceBetween: 20,
        }
    },
    speed:100,
});