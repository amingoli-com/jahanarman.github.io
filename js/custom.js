jQuery(window).on("load", function() {
    "use strict";
    $("#preloader").fadeOut("slow");
    $('.flexslider.flexslider-banner').flexslider({
        controlNav: false
    });
    $('.flexslider').flexslider({
        animation: "slide",
        directionNav: false,
        slideshow: false
    });
});
jQuery(function($) {
    "use strict";
    $('a').addClass('transition');
    jQuery('#nav').singlePageNav({
        offset: jQuery('#nav').outerHeight(),
        filter: ':not(.external)',
        speed: 1200,
        currentClass: 'current',
        easing: 'easeInOutExpo',
        updateHash: true,
        beforeStart: function() {
            console.log('begin scrolling');
        },
        onComplete: function() {
            console.log('done scrolling');
        }
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color", "#2B2C30");
        } else {
            $("#navigation").css("background-color", "rgba(43, 44, 48, .4)");
        }
    });
    var slideHeight = $(window).height();
    $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);
    $(window).resize(function() {
        'use strict', $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);
    });
    $(".service-item").on("mouseover", function() {
        $('.service-item .effect').addClass('shadow');
    });
    $(".project-wrapper").mixItUp();
    $(".portfolio-lightbox").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });
    $('#facts').parallax("50%", 0.3);
    $(".number-counters").appear(function() {
        $(".number-counters [data-to]").each(function() {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").on("click", function() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
    $("#testimonial-slider").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        pagination: true,
        transitionStyle: "backSlide",
        autoPlay: true
    });

    function initialize() {
        var myLatLng = new google.maps.LatLng(31.04095, 31.37847);
        var mapOptions = {
            zoom: 14,
            center: myLatLng,
            disableDefaultUI: true,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
            }
        };
        var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: '../img/ju5vuS/location_icon.png',
            title: '',
        });
    }
    google.maps.event.addDomListener(window, "load", initialize);
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 120,
        mobile: false,
        live: true
    });
    wow.init();
    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "come on, you have a name don't you?",
                minlength: "your name must consist of at least 2 characters"
            },
            email: {
                required: "no email, no message"
            },
            message: {
                required: "yea, you have to write something to send this form.",
                minlength: "thats all? really?"
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "sendmail.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});