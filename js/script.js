// NAVIGATION

$('.hamburger').on('click', function () {
    $('nav').toggleClass('active');
    $('.hamburger').toggleClass('active');
})

$('.startNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.aboutMe').offset().top
    }, 1000)
})

$('.meNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.me').offset().top
    }, 1000)
})

$('.skillsNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.skills').offset().top
    }, 1000)
})

$('.portfolioNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.portfolio').offset().top
    }, 1000)
})

$('.portfolioNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.portfolio').offset().top
    }, 1000)
})

$('.contactNav').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 1000)
})