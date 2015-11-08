console.log('\'Allo \'Allo!');

(function () {

    // MOBILE MENU


    var navToggle = document.querySelector('.js-nav-toggle');
    var nav = document.querySelector('.js-nav');

    nav.classList.remove('js-nav_visible');

    navToggle.addEventListener('click', function (e) {
        nav.classList.toggle('js-nav_visible');
        e.preventDefault();
    })
})();

$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        fade: true,
        adaptiveHeight: true,
        arrows: false
    });
});