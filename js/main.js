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

new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1.25,
    spaceBetween: 15,
    slideToClickedSlide: true,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        stretch: 1,
        slideShadows: true,
    },
    centeredSlides: false,
    breakpoints: {
        768: {
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 1,
                slideShadows: true,
            },
            centeredSlides: true,
            slidesPerView: 2,
        }
    }
});




// Маска інпута
let element = document.getElementById('phone');
let maskOptions = {
    mask: '+(380)00-00-00-000',
    lazy: false
}
let mask = new IMask(element, maskOptions);