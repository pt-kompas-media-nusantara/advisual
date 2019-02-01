window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("header_progress_bar").style.width = scrolled + "%";
}

$(document).ready(function(){
	$(window).scrollTop(0);
	$('#headerArea').load('asset/header.html');
	$('#footerArea').load('asset/footer.html');
	$('.subbab3 .div-caption').load('bab3/subbab3.html');
	
	$(".text-paragraph p,.text-quote p").viewportChecker({
		classToAdd: 'show',
		offset: 100,
	});
    
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 30
	});
	$(".button-top").click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'slow');
	});
	$(".burger").click(function(){
		$(".menu").toggleClass("moveLeft");
	});
	$(".section,#headerArea,.parallax").click(function(){
		$(".menu").removeClass("moveLeft");
	});
	/* $(window).scroll(function() {    
		var scroll = $(window).scrollTop();    
		if (scroll >= 1 * $(window).height()) {
			$('#headerArea').css('opacity', '1');
		} else {
			$('#headerArea').css('opacity', '0');
		}
	}); */
});