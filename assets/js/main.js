(function($) {
    "use strict";

    var nav = $('nav');
    var navHeight = nav.outerHeight();

    $('.navbar-toggler').on('click', function() {
        if (!$('#mainNav').hasClass('navbar-reduce')) {
            $('#mainNav').addClass('navbar-reduce');
        }
    })

    // Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // --- ScrollTop
    $('.scrolltop-mf').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // --- CounterUp
    $('.counter').counterUp({
        delay: 15,
        time: 2000
    });

    // --- Start Nav
    var mainNav_height = $('#mainNav').outerHeight() - 22;
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var scrollto = target.offset().top - mainNav_height;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // --- Open Responsive
    if (window.location.hash) {
        var initial_nav = window.location.hash;
        if ($(initial_nav).length) {
            var scrollto_initial = $(initial_nav).offset().top - mainNav_height;
            $('html, body').animate({
                scrollTop: scrollto_initial
            }, 1000, "easeInOutExpo");
        }
    }

    // --- Close Responsive
    $('.js-scroll').on("click", function() {
        $('.navbar-collapse').collapse('hide');
    });

    //--- ScrollSpy
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });

    // --- Navbar Reduce
    $(window).trigger('scroll');
    $(window).on('scroll', function() {
        var pixels = 50;
        var top = 1200;
        if ($(window).scrollTop() > pixels) {
            $('.navbar-expand-md').addClass('navbar-reduce');
            $('.navbar-expand-md').removeClass('navbar-trans');
        } else {
            if (!$('#navbarDefault').hasClass('show')) {
                $('.navbar-expand-md').removeClass('navbar-reduce');
            }
            $('.navbar-expand-md').addClass('navbar-trans');
        }
        if ($(window).scrollTop() > top) {
            $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
        } else {
            $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
        }
    });

    // --- Text Slider
    if ($('.text-slider').length == 1) {
        var typed_strings = $('.text-slider-items').text();
        var typed = new Typed('.text-slider', {
            strings: typed_strings.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });
    }

    // --- Testimonial Owl
    $('#testimonial-mf').owlCarousel({
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            }
        }
    });

    // --- Portfolio Details
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // --- Venobox
    $(document).ready(function() {
        $('.venobox').venobox({
            'share': false
        });
    });

})(jQuery);