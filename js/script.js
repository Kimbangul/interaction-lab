$(document).ready(function() {

    function fullpage_init(){
        $('#wrap').fullpage({
            //options here
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling: true,
            navigation: true,
            navigationPosition: 'left',
            navigationTooltips: ['MAIN', 'STEP 1', 'STEP 2', 'STEP 3', 'STEP 4'],
            showActiveTooltip: true,
            scrollOverflow: true,
            afterLoad: function(anchorLink, index){
                step3Animate_init(index);
            }


        });

    }

    function slickSlide_init(){
        
        function step2Slide(){
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
                autoplaySpeed: 7000,
                pauseOnHover: true,
                vertical: false,          
                draggable: true,               
            });
    
            $('#step-2 .card-slide').on("afterChange",function(){
                var cardNameTargetElem = document.querySelector('#step-2 .card-name');
                var commentTargetElem = document.querySelector('#step-2 .con > div.comment > div.text-box');
    
                var currentSlideImg = document.querySelector('#step-2 .card-slide .slick-current > img');
                var cardName = currentSlideImg.dataset['name'];
                var comment = currentSlideImg.dataset['comment'];
    
                cardNameTargetElem.innerHTML = cardName;
                commentTargetElem.innerHTML = comment;
            });
        }

        function step4Slide(){



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
            



            function step4ProBar(){

                function afterChange_init(){
                    $('#step-4 .progress-bar-wrap > .bar-wrap > .bar').addClass('animated');
                }

                function beforeChange_init(){
                    $('#step-4 .progress-bar-wrap > .bar-wrap > .bar').removeClass('animated');
                }
    
                $('#step-4 .slider').on('afterChange', afterChange_init);
    
                $('#step-4 .slider').on('beforeChange', beforeChange_init);
            }
            step4ProBar();


        }

        step2Slide();
        step4Slide();
    }

    function step3Animate_init(index){  
       
        var balloonPositionFirst = $("#cat-balloon").css("top");        
        if (index.index == 3){
            
            $(window).bind('mousewheel', function(e){
                
                var currentPosition = parseInt($("#cat-balloon").css("top"));
                var scrollDistance = 250;

                if(e.originalEvent.wheelDelta /120 > 0) {
                    if (parseInt(currentPosition - scrollDistance) >= parseInt(balloonPositionFirst)){
                        $("#cat-balloon").stop().animate({"top":currentPosition - scrollDistance + "px"},1000);
                        }
                    }
                else{
                    // scroll down                   
                  if (parseInt(currentPosition + scrollDistance) <= parseInt(balloonPositionFirst) + parseInt(scrollDistance * 3) ){
                    $("#cat-balloon").stop().animate({"top":currentPosition + scrollDistance + "px"},1000);
                  }
                  
                }
              });        
        }
        else{            
            $("#cat-balloon").css("top","20%");
        }


    }
   


    fullpage_init();
    slickSlide_init();


});