const nav = document.getElementById('nav-fixed');

window.onscroll = () => {
    if (window.pageYOffset > 100) {
        nav.style.top = 0;
    } else {
        nav.style.top = -75 + "px";
    }
}