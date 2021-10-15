$('.nz-carousel__list').slick({
    infinite: false,
    slidesToShow: 4,
    dots: true,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '25px',
                slidesToShow: 1
            }
        }
    ]
});


$(".slick-next").appendTo(".slick-dots");

$(".slick-prev").prependTo(".slick-dots");
$(window).resize(function () {
    $(".slick-next").appendTo(".slick-dots");

    $(".slick-prev").prependTo(".slick-dots");
});