// 메뉴바
$(".nav > ul > li").hover (
    function(){
        $(this).find(".submenu").stop().slideDown();
    }, function(){
        $(this).find(".submenu").stop().slideUp();
});


// 슬라이드

//슬라이더
const sliderWrap = $(".slider-wrap");
let currentIndex = 0;
let sliderDuration = 1000;
let sliderEasing = "easeOutExpo";


const sliderImg = $(".slider-img");
const sliderInner = $(".slider-inner"); 
const slider = $(".slider");
let sliderHeight = slider.height();

setInterval(function() {
    sliderInner.animate({top: -sliderHeight}, sliderDuration, function(){ 
        $(".slider:first-child").appendTo(sliderInner); 
        sliderInner.css("top", "");  
    });
}, 3000);

// 요소 숨기기 열기

    const imgs = $(".main-banner-wrap img");
    const img1 = $(".main-banner-wrap .banner1");
    const sliderInner1 = $(".img-inner");
    const tab_btn1 = $(".left");
    const tab_btn2 = $(".right");
    const tab1 = $(".tab1");
    const tab2 = $(".tab2");

    
    tab_btn1.click(function() {
        tab1.toggleClass("none")
        tab2.toggleClass("none")
    })
    tab_btn2.click(function() {
        tab1.toggleClass("none")
        tab2.toggleClass("none")
    })

