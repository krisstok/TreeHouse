// fixed nav
const nav = document.getElementById('nav-fixed');
window.onscroll = () => {
    if (window.pageYOffset > 100) {
        nav.style.top = 0;
    } else {
        nav.style.top = -75 + 'px';
    }
}

// jump to section
$('li a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500);
    $('.bar-nav-mobile').removeClass('active');
})

// mobile menu
const bars = document.querySelectorAll('.fa-bars');
const menuMobile = document.querySelector('.bar-nav-mobile');

bars.forEach((bar) => {
    bar.addEventListener('click', () => {
        menuMobile.classList.add('active');
    });
});

// close menu

$('.faTimes').on('click', function () {
    $('.bar-nav-mobile').removeClass('active');
});