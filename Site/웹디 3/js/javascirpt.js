const sliderWrap = document.querySelector(".slider-wrap");
const sliderImg = sliderWrap.querySelector(".slider-img");
const sliderInner = sliderImg.querySelector(".slider-inner");
const slider = sliderInner.querySelectorAll(".slider");
const sliderBtn = sliderWrap.querySelector(".slider-btn");
const sliderBtnPrev = sliderBtn.querySelector(".prev");
const sliderBtnNext = sliderBtn.querySelector(".next");

let sliderCount = slider.length;
let sliderWidth = document.querySelector(".slider").offsetWidth;
let currentIndex = 0;

function gotoSlider(num) {
    sliderInner.style.transition = "all 300ms"
    sliderInner.style.transform = "translateX("+ -sliderWidth * num  +"px)";
    currentIndex = num;
}


function movePrev() {
    let prevIndex = (currentIndex - 1) % sliderCount;
    if ( currentIndex == 0) prevIndex = sliderCount -1;

    gotoSlider(prevIndex);
}

function moveNext() {
    let nextIndex = (currentIndex + 1) % sliderCount;
    gotoSlider(nextIndex);
}

sliderBtnPrev.addEventListener("click", movePrev);
sliderBtnNext.addEventListener("click", moveNext);

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

});

jQuery(document).ready(function(){
  $('.menu>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
  });
});