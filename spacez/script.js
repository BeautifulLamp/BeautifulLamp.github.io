var headerrr = document.querySelector(".page-header");

window.onscroll = function () {
    if (window.pageYOffset > 150) {
        headerrr.classList.add('lol');
    } else {
        headerrr.classList.remove('lol');
    }
};  