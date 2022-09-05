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
    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 0,
    //     stretch: 1,
    //     slideShadows: true,
    // },
    slidesPerView: 1.14,
    // slideToClickedSlide: true,
    loop: true,
    spaceBetween: 15
});




// Маска інпута
let element = document.getElementById('phone');
let maskOptions = {
    mask: '+(380)00-00-00-000',
    lazy: false
}
let mask = new IMask(element, maskOptions);

// Кнопка бургер-меню
// let btn = document.querySelector('.burger__menu');
// let menu = document.querySelector('.menu');
// let body = document.querySelector('body');
// let links = document.querySelector('.menu__list-link');

// btn.addEventListener('click', function() {
//     menu.classList.toggle('active');
//     body.classList.toggle('active');
// });

// // Приховує меню при кліку на посилання
// links.addEventListener('click', function() {
//     menu.classList.remove('active');
// })