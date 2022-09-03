$(function() {
$('.burger__menu').click(function(event) {
    $('.burger__menu,.menu').toggleClass('active');
    $('body').toggleClass('lock');
});
})


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