$(function() {
	$('#menu-tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.t3').hide();
		$('div.' + thisClass).fadeIn(2500);
		$('#menu-tabs .rhombus').removeClass('active');
		$(this).find('.rhombus').addClass('active');
		return false;
	});
	$('li.t1').click();
	$('.you_review').slick();
	$('.slider_team').slick({
  	dots: true,
  	infinite: false,
  	speed: 300,
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	responsive: [
    	{
      	breakpoint: 1024,
      	settings: {
        	slidesToShow: 3,
        	slidesToScroll: 1,
        	infinite: true,
        	dots: true
      	}
    	},
    	{
      	breakpoint: 600,
      	settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1
      	}
    	},
    	{
      	breakpoint: 480,
      	settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1
      	}
    	}
  	]
	});
	$(window).scroll(function () {
	    var sc = $(window).scrollTop()
	    if (sc > 100) {
	        $("header").addClass("fixed")
	    } else {
	        $("header").removeClass("fixed")
	    }
	});
	$('.logo-txt').click(function () {
		$('html, body').animate({
			scrollTop: $(".banner ").offset().top
		}, 2000);
	});
});
