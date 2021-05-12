$(document).ready(function() {

    function fullpage_init(){
        $('#wrap').fullpage({
            //options here
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['MAIN', 'STEP 1', 'STEP 2'],
            showActiveTooltip: true                 
        });

    }

    function slickSlide_init(){
        $('#step-2 .card-slide').slick({
            slide: 'div.card',
            infinite: true,
            slidesToShow: 1,
            centerPadding: '33%',
            slidesToScroll: 1,
            speed: 1000,
            prevArrow: "<button type='button' class='slick-prev'><img src='img/btn-slide-left.png' alt='이전 슬라이드로'></button>", // 이전 화살표 모양 설정
            nextArrow: "<button type='button' class='slick-next'><img src='img/btn-slide-right.png' alt='다음 슬라이드로'></button>",
            dots: false,
            autoplay: false,
            centerMode: true,
          
            autoplaySpeed: 7000,
            pauseOnHover: false,
            vertical: false,          
            draggable: true
        });
    }

    fullpage_init();
    slickSlide_init();


});