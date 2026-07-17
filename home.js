function getSlides() {
    return [...document.querySelectorAll(".hero__img")].filter(img => {
        return window.getComputedStyle(img).display !== "none";
    });
}

let slides = getSlides();
let current = 0;

function nextSlide() {
    slides[current].classList.remove("active");

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
}

setInterval(nextSlide, 5000);

window.addEventListener("resize", () => {
    slides.forEach(slide => slide.classList.remove("active"));

    slides = getSlides();
    current = 0;

    if (slides.length) {
        slides[0].classList.add("active");
    }
});