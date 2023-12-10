const menuLinks = document.querySelectorAll('.nav-item a[href^="#"]');

menuLinks.forEach ((link) => {
    link.addEventListener('click', scrollToSection);
});

function getDistanceFromTop (element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToSection (event) {
    event.preventDefault();
    const distance = getDistanceFromTop(event.target) - 90;
    scrollNative(distance);
}
scrollNative.animate(1.0);

function scrollNative (DistanceFromTop) {
    window.scroll ({
        top: DistanceFromTop,
        behavior : "smooth",
    });
}