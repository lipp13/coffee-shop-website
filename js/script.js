// toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// ketika humberger menu di klik
document.querySelector('#humberger-menu').
    onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar buat menghilangkan nav
const hamberger = document.querySelector('#hamberger-menu');

document.addEventListener('click', function (e) {
    if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});