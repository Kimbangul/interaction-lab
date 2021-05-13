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
            pauseOnHover: false,
            vertical: false,          
            draggable: true
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

    function step3Animate_init(index){  
        console.log(index);  
        if ($('#step-3').hasClass('active')){
            console.log('true');
            $(window).bind('mousewheel', function(e){
                if(e.originalEvent.wheelDelta /120 > 0) {
                  console.log(e.originalEvent.wheelDelta);
 
                }
                else{
                  console.log(e.originalEvent.wheelDelta);

                }
              });
            var currentPosition = parseInt($("#cat-balloon").css("top")); 
            $(window).scroll(function() { 
                var position = $(window).scrollTop(); 
                console.log(position);
                $("#cat-balloon").stop().animate({"top":position+currentPosition+"px"},1000); 
            });
        }


    }
   


    fullpage_init();
    slickSlide_init();


});