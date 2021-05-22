$(document).ready(function () {
    

    function fullpage_init() {
        $('#wrap').fullpage({
            //options here
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['MAIN', 'STEP 1', 'STEP 2', 'STEP 3', 'STEP 4', 'STEP 4.5', 'STEP 5', 'FOOTER'],
            showActiveTooltip: true,
            scrollOverflow: true,
            afterLoad: function (anchorLink, index) {
                step3Animate_init(index);
                fullpageNav_fix(index);
            }            

        });
        function fullpageNav_fix(index) {
            if (index.index == 5) {
                $('#fp-nav ul li:nth-child(5) > a').addClass('active');
            }
            if ($('footer').hasClass('active')){
                $('#end').addClass('active');
                $('#fp-nav ul li:nth-child(8) > a').addClass('active')
            }
        }
    
    }

    function slickSlide_init() {

        function step2Slide() {
            // section step 2
            $('#step-2 .card-slide').slick({
                slide: 'div.card',
                infinite: true,
                slidesToScroll: 1,
                speed: 1000,
                prevArrow: "<button type='button' class='slick-prev'><img src='img/btn-slide-left.png' alt='이전 슬라이드로'></button>", // 이전 화살표 모양 설정
                nextArrow: "<button type='button' class='slick-next'><img src='img/btn-slide-right.png' alt='다음 슬라이드로'></button>",
                dots: false,
                autoplay: false,
                centerMode: true,
                centerPadding: '33.3%',
                autoplaySpeed: 5000,
                pauseOnHover: true,
                vertical: false,
                draggable: true,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            centerMode: false,
                            autoplay: true
                        }
                    }
                ]
            });

            $('#step-2 .card-slide').on("afterChange", function () {
                var cardNameTargetElem = document.querySelector('#step-2 .card-name');
                var commentTargetElem = document.querySelector('#step-2 .con > div.comment > div.text-box');

                var currentSlideImg = document.querySelector('#step-2 .card-slide .slick-current > img');
                var cardName = currentSlideImg.dataset['name'];
                var comment = currentSlideImg.dataset['comment'];

                cardNameTargetElem.innerHTML = cardName;
                commentTargetElem.innerHTML = comment;
            });
        }

        function step4Slide() {
            // section step 4
            $('#step-4 .slider').slick({
                slide: 'div.section-slide',
                infinite: true,
                slidesToScroll: 1,
                speed: 1000,
                prevArrow: "<button type='button' class='slick-prev'><img src='img/btn-slide-left.png' alt='이전 슬라이드로'></button>", // 이전 화살표 모양 설정
                nextArrow: "<button type='button' class='slick-next'><img src='img/btn-slide-right.png' alt='다음 슬라이드로'></button>",
                dots: false,
                autoplay: true,
                autoplaySpeed: 7000,
                pauseOnHover: false,
                vertical: false,
                draggable: true
            });           

            function step4ProBar() {
                $('#step-4 .slider').on('afterChange', afterChange_init);

                $('#step-4 .slider').on('beforeChange', beforeChange_init);

                function afterChange_init() {
                    $('#step-4 .progress-bar-wrap > .bar-wrap > .bar').addClass('animated');
                }

                function beforeChange_init() {
                    $('#step-4 .progress-bar-wrap > .bar-wrap > .bar').removeClass('animated');
                }


            }
            function step4SlideCount() {
                var currentSlide = $('#step-4 .section-slide.slick-current').data('slick-index');
                var counter = document.querySelector('#step-4 .progress-bar-wrap > .count');
                counter.innerHTML = currentSlide + 1 + "&nbsp;";
            }    

            step4ProBar();
            $('#step-4 .slider').on('afterChange', step4SlideCount);




        }

        step2Slide();
        step4Slide();
    }

    function step3Animate_init(index) {

        var balloonPositionFirst = $("#cat-balloon").css("top");
        if (index.index == 3) {

            $(window).bind('mousewheel', function (e) {

                var currentPosition = parseInt($("#cat-balloon").css("top"));
                var scrollDistance = 250;

                if (e.originalEvent.wheelDelta / 120 > 0) {
                    if (parseInt(currentPosition - scrollDistance) >= parseInt(balloonPositionFirst)) {
                        $("#cat-balloon").stop().animate({
                            "top": currentPosition - scrollDistance + "px"
                        }, 1000);
                    }
                } else {
                    // scroll down                   
                    if (parseInt(currentPosition + scrollDistance) <= parseInt(balloonPositionFirst) + parseInt(scrollDistance * 3)) {
                        $("#cat-balloon").stop().animate({
                            "top": currentPosition + scrollDistance + "px"
                        }, 1000);
                    }

                }
            });
        } else {
            $("#cat-balloon").css("top", "20%");
        }


    }

    function step4Animate_init(){
        var card = $('#step-5 .card');
        card.hover(
            function(){
                // console.log($(this).siblings('.card'));
                $(this).siblings('.card').addClass('focus-out');
            },
            function(){
                $(this).siblings('.card').removeClass('focus-out');
            }
        );
    }

    function goToTop_init(){
        $('footer .con > .top-btn').click(function(e){
            e.preventDefault();            
            $("#wrap").fullpage.moveTo($(this).index(0) - 1);
        })
    }
          

    step4Animate_init();
    fullpage_init();
    slickSlide_init();
    goToTop_init();


});