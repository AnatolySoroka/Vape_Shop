$(function() {
    $('.burger__menu').click(function(event) {
        $('.burger__menu,.menu').toggleClass('active');
        $('html').toggleClass('lock');
    });
    $('form').submit(function(event) {
        $('.popup').toggleClass('active');
        $('html').toggleClass('lock');
        return false
    });
    $('.close__btn').click(function(event) {
        $('.popup').toggleClass('active');
        $('html').toggleClass('lock');
    })
    $('.menu__list-link').click(function(event) {
        $('.menu').toggleClass('active');
        $('html').toggleClass('lock');
    })
})

// Слайдер

const swiper2 = new Swiper('.swiper', {
    slidesPerView: 1.25,
    spaceBetween: 15,
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
        1024: {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            centeredSlides: true,
            slidesPerView: 2.3,
        },

    }
});


// Маска інпута
let element = document.getElementById('phone');
let maskOptions = {
    mask: '+(380)00-00-00-000',
    lazy: false
}
let mask = new IMask(element, maskOptions);