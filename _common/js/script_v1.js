$(window).on('beforeunload',function(){$(window).scrollTop(0);});
$(document).ready(function(){
	new LazyLoad();
    $('header').load('/_common/header.html');
    $('footer').load('/_common/footer.html');
	$(".text-paragraph h2,.text-paragraph p,.text-quote p").viewportChecker({
		classToAdd: 'show',
		offset: 100,
	});
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();    
		if (scroll >= 1 * $(window).height()) {
			$('#headerArea').css('opacity', '1');
		} else {
			$('#headerArea').css('opacity', '0');
		}
	});
	$(".image-gallery").hover(function(){
		$(this).find('p').toggleClass("show");
		$(this).find('img').toggleClass("zoom");
		$(this).find('.image-info').toggleClass("hidden");
	});
    $('.tile')
	.on('mouseover', function(){
	  $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
	})
	.on('mouseout', function(){
	  $(this).children('.photo').css({'transform': 'scale(1)'});
	})
	.on('mousemove', function(e){
	  $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
	})
	.each(function(){
	    $(this)
		.append('<div class="photo"></div>')
		.append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
		.children('.photo').css({'background-image': 'url('+ $(this).attr('data-original') +')'});
    })
});