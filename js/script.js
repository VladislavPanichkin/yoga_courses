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

    let el = $("div.tutor-block, .slick-active")

    $('.tutor-slider').slick({
        arrows: true,
        dots: false,
        touchMove: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1
    });

    function checkIndex() {
        switch $()
    } 
    
    ("el[data-slick-index='0']") {
        console.log('success');
        $(".dot_1").addClass("dot_active")
    }

    $('.tutor-slider').on('afterChange', function (slick, currentSlide) {
        console.log('action');
        $(".dot").removeClass("dot_active")
    })

});
