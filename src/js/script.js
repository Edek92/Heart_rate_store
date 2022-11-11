$(document).ready(function(){
    // Slider

    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider_arrow_left_solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider_arrow_right_solid.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
            }
        }]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    function toggleSlide (item) {
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
    
        })
    }
    
    toggleSlide ('.catalog-item__link');
    toggleSlide ('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function () {
        $(".overlay, #consultation").fadeIn()
    })

    $('.modal__close').on('click', function () {
        $(".overlay, #consultation, #thanks, #order").fadeOut('slow')
    })

    $('.button_mini').each(function(i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $(".overlay, #order").fadeIn()
        })
    })

    // Form validate

    function validForms (form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
    
            messages: {
                name: {
                    required: "Пожалуйста, введите своё имя",
                    minlength: jQuery.validator.format("Минимум {0} символа должно быть!")
                },
                email: {
                  required: "Пожалуйста, введите свой email",
                  email: "Неправильный адрес почты"
                },
                phone: "Пожалуйста, введите свой телефон"
              }
        });
    }

    validForms ('#order form');
    validForms ('#consultation-form');
    validForms ('#consultation form');

    $("input[name=phone]").mask("+375 (99) 999-99-99")

    // Smooth scroll and page up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    })

    new WOW().init()
});