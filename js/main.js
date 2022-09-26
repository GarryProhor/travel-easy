$(document).ready(function () {
    $('.sliders').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        prevArrow:"<button type='button' class='btn btn-slick-prev btn-slider'><img src='images/Group%20145.svg' alt='145'/></button>",
        nextArrow:"<button type='button' class='btn btn-slick-next btn-slider'><img src='images/Group%20146.svg' alt='146'/></button>"
    });

    $('.mobile-menu').click(function (){
        $('.mobile-menu span').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('owerlay');
    });
});