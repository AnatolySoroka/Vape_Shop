let element = document.getElementById('phone');
let maskOptions = {
    mask: '+(380)00-00-00-000',
    lazy: false
}
let mask = new IMask(element, maskOptions);