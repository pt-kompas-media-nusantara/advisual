$(document).ready(function(){
	$(window).scrollTop(0);
	$('#headerArea').load('asset/header.html');
	$('#footerArea').load('asset/footer.html');
	
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
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();    
		if (scroll >= 1 * $(window).height()) {
			$('#headerArea').css('opacity', '1');
		} else {
			$('#headerArea').css('opacity', '0');
		}
	});
});