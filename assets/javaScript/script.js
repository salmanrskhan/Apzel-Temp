


// Navbar
jQuery(document).ready(function ($) {
    var alterClass = function () {
        var ww = document.body.clientWidth;
        if (ww < 767) {
            $('.navbar').removeClass('sticky-top');
        }
        else if (ww >= 768) {
            $('.navbar').addClass('sticky-top');
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('.navbar').css('background', 'white');
    } else {
        $('.navbar').css('background', 'transparent');
    }
});
// Nabbar End



// banner Slider
$(".logo_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive: {
        120: {
            items: 1
        },
        320: {
            items: 2
        },
        600: {
            items: 3
        },
        991: {
            items: 3
        }
    }

});
// banner slider end



// Screenshot Section
$(".certi_slider_area").owlCarousel({
    autoplay: true,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive: {
        120: {
            items: 1
        },
        320: {
            items: 1
        },
        767: {
            items: 2
        },
        600: {
            items: 2
        },
        991: {
            items: 4
        }
    }

});
// Screenshot End


// Review Section
$(".testmonial_slider_area").owlCarousel({
    autoplay: false,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive: {
        120: {
            items: 1
        },
        320: {
            items: 1
        },
        600: {
            items: 1
        },
        767: {
            items: 2
        },
        991: {
            items: 3
        }
    }

});
// Review section end


// Scroller to to btn
let scrlBtn = document.getElementById("scrlTpBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrlTpBtn.style.display = "block";
    }
    else {
        scrlTpBtn.style.display = "none";
    }
}

function topFun() {
    document.body.scrollTo = 0;
    document.documentElement.scrollTop = 0;
}