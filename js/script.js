$(document).ready(function () {
    $('.slider-container').slick({
        arrows: false,
        touchMove: true,
        centerMode: true,
        variableWidth: true,
        centerPadding: '5000px',
        slidesToShow: 1
    });

    $('.grid-gallery').slick({
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 480,
                settings: "unslick",
                arrows: true,
                dots: true,
                slidestToShow: 1
            }
        ]
    })
});
