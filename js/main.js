$(document).ready(function () {
    $('.slider__item').slick({
        //autoplay: true,
        //autoplaySpeed: 3000
    });

});
$(document).ready(function () {
    $('.news__slideritem').slick({
        //autoplay: true,
        //autoplaySpeed: 3000
    });

});
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
