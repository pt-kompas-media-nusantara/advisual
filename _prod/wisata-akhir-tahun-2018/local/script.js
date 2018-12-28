var controller = new ScrollMagic.Controller({
	globalSceneOptions: {triggerHook: '1'}
});
var scene = new ScrollMagic.Scene({triggerElement: "#content", duration: 1000})
	.setTween(".heading1", {transform: "translate(0,-10vh)"})
	/* .addIndicators({name: "1 (duration: 1000)"}) */
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#content", duration: 1000})
	.setTween(".landmark", {transform: "translate(0,-5vh)"})
	/* .addIndicators({name: "1 (duration: 1000)"}) */
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".cerita"})
	.setClassToggle(".cerita_prop","cerita_prop_show")
	/* .addIndicators({name: "1 (duration: 1000)"}) */
	.addTo(controller);

var scene = new ScrollMagic.Scene({
		triggerElement: ".train_stop", 
		duration: '130%',
		triggerHook: 'onEnter'
	})
	.setClassToggle(".cerita_prop","cerita_prop_stop")
	/* .addIndicators({name: "1 (duration: 1000)"}) */
	.addTo(controller);

function delay (URL) {
	setTimeout(function(){window.location = URL},3300);
}

$(document).ready(function(){
	var cw = $('.back_diorama').width();
	$('.back_diorama').css({'height':cw+'px'});
	$(".text-paragraph p,.text-quote p,.text-paragraph h2").viewportChecker({
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
	$("#peta_dunia h2").hover(function(){
		$(this).toggleClass("zoom");
	});
	$("#btn_jepang").click(function(){
		var pesawat = $('<div class="back_pesawat"><img src="img/pesawat-2.png"></div>');
		$("#btn_jepang").append(pesawat);
	});
	$("#btn_malaysia").click(function(){
		var pesawat = $('<div class="back_pesawat"><img src="img/pesawat-2.png"></div>');
		$("#btn_malaysia").append(pesawat);
	});
	$("#btn_korea").click(function(){
		var pesawat = $('<div class="back_pesawat"><img src="img/pesawat-2.png"></div>');
		$("#btn_korea").append(pesawat);
	});
	$("#btn_singapura").click(function(){
		var pesawat = $('<div class="back_pesawat"><img src="img/pesawat-2.png"></div>');
		$("#btn_singapura").append(pesawat);
	});
	$("#btn_thailand").click(function(){
		var pesawat = $('<div class="back_pesawat"><img src="img/pesawat-2.png"></div>');
		$("#btn_thailand").append(pesawat);
	});
});