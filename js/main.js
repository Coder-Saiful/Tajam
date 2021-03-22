$(document).ready(function () {

    // banner slider js

    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        speed: 1000
    });

    // video popup js

    $('.venobox').venobox();

    // team slider js

    $('.team_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 800,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // testimonial slider js

    $('.slide_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide_image'
    });
    $('.slide_image').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slide_text',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: true,
        dots: false,
        prevArrow: ".testimonial_slider_arrow_left",
        nextArrow: ".testimonial_slider_arrow_right",
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // sticky top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".sticky_top").addClass("menu_bg");
        } else {
            $(".sticky_top").removeClass("menu_bg");
        }
    });


    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });

    // scroll to top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll_to_top").fadeIn();
        } else {
            $(".scroll_to_top").fadeOut();
        }
    });

    $(".scroll_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    // wow js

    new WOW().init();

    // preloader js

    $(window).on("load", function () {
        $(".preloader").delay(2000).fadeOut(500);
    })
    
    // responsive menu js
    
    $(".openNav").click(function(){
        $(".overlay").show(500);
    });
    
    $(".closeNav").click(function(){
        $(".overlay").hide(500);
    });
    
    $(".overlay_top a img").click(function(){
        $(".overlay").hide(500);
    });
    
    $(".overlay_content ul li a").click(function(){
        $(".overlay").hide(500);
    });



});
