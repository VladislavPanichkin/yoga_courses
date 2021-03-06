$(document).ready(function () {
    $('.slider-container').slick({
        arrows: false,
        dots: true,
        touchMove: true,
        centerMode: true,
        variableWidth: true,
        centerPadding: '5000px',
        slidesToShow: 1
    });

    if (window.matchMedia("(max-width: 450px)").matches) {
        // showing .grid-container as a slider only on mobiles
        $('.grid-container').slick({
            arrows: false,
            dots: true,
            touchMove: true,
            centerMode: false,
            variableWidth: false,
            slidesToShow: 1
        });
    }


    let el = $("div.tutor-block, .slick-active");

    $('.tutor-slider').slick({
        arrows: false,
        dots: true,
        touchMove: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
            }
        ]
    });

    $('.reviews-block').slick({
        arrows: true,
        dots: true,
        touchMove: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 400,
                settings: "unslick"
            }
        ]
    })

});
