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
                arrows: false,
                slidestToShow: 1
            }
        ]
    });

    let el = $("div.tutor-block, .slick-active");

    $('.tutor-slider').slick({
        arrows: false,
        dots: true,
        touchMove: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1
    });

    

});
