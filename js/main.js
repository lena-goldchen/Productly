$(function(){
    $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        responsive:[
        {
            breakpoint: 1175,
            settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
            }
        }    
    ]
    });


    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    })
});