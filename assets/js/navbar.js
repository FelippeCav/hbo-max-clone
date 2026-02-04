let lastScroll = 0;
const navbar = document.querySelector('.barra-menu');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 80) {
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
    }

    lastScroll = currentScroll;
});
