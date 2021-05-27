$(document).ready(function(){
  $('body,html').scrollTop(0);
    $('.lp_faq_accordion_show').click(function(){
        $(this).parent().find('.lp_faq_accordion_hide').slideDown(300);
        $(this).fadeOut(300);
    });
    $('.spec_slider').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="slider_arrow_default prev" id="prev" type="button"></button>',
        nextArrow: '<button class="slider_arrow_default next" next id="next" type="button"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    });
});

$(window).on('load resize', function() {
    if ($(window).width() < 640) {
        $('.lp_experts_slider:not(.slick-initialized)').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button class="slider_arrow_default prev" id="prev" type="button"></button>',
            nextArrow: '<button class="slider_arrow_default next" next id="next" type="button"></button>',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                }
            ]
        });
    } else {
        $(".lp_experts_slider.slick-initialized").slick("unslick");
    }
});


$('#file').change(function(){
    var fileResult = $(this).val();
    $(this).parent().find('.fileLoad').find('input').val(fileResult);
});

$('#file').hover(function(){
    $(this).parent().find('button').addClass('button-hover');
    }, function(){
    $(this).parent().find('button').removeClass('button-hover');
});



$(window).scroll(function() {
    if ($(this).scrollTop() > 94) {
        $('header').addClass("scroll");
    }
    else {
        $('header').removeClass("scroll");
    }
    ;
    if ($(this).scrollTop() > 1) {
        $('header').addClass("scroll_m");
    }
    else {
        $('header').removeClass("scroll_m");
    }
    ;


    $(function () {
        if ($(window).width() < 640) {
            if ($(this).scrollTop() > 150) {
                $('.sroll_nav').addClass("scroll");
            }
            else {
                $('.sroll_nav').removeClass("scroll");
            }
        }
        else {
            if ($(this).scrollTop() > 235) {
                $('.sroll_nav').addClass("scroll");
            }
            else {
                $('.sroll_nav').removeClass("scroll");
            }
        }
    });


});







