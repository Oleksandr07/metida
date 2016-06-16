$(function(){
	$('.fancybox').fancybox({
		padding: 0,
		margin: 0,
		openEffect: 'fade',
		closeEffect: 'fade',
		openSpeed: 400,
		closeSpeed: 400,
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	$('input[placeholder], textarea[placeholder]').placeholder();

	$('input[type="tel"]').mask('+7 (999) 999-99-99');


	//------------------    menu scroll    -------------------------------

	$('.top-menu li a').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top- parseInt($($(this).attr('href')).css('padding-top'))},800);

		if ($(window).width() < 1024) {
			$('.top-menu').slideUp(300);
			$('.navbar').removeClass('active');
		}
		return false;
	});

	//------------------    menu scroll    -------------------------------
	$('.navbar').click(function(){
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$('.top-menu').slideDown(300);
		} 
		else {
			$(this).removeClass('active');
			$('.top-menu').slideUp(300);
		}
	});
	$(window).resize(function(event) {
		if ($(window).width() > 1023) {
			$('.top-menu').css('display','');
			$('.navbar').removeClass('active');
		}
	});

	/*-------------------------         show lang list           --------------------------------*/
	$('.lang-head').click(function(event) {
		$(this).toggleClass('active');
		$('.lang-list').slideToggle(300);
	});

	/*-------------------------         switch lang           --------------------------------*/
	$('.lang-list a[data-lang="' + $('.lang-current').attr('data-lang') + '"]').parents('li').hide();
	$('.lang-list a').click(function(event) {
		$('.lang-list li').show();
		$(this).parents('li').hide();
		$('.lang-current').text($(this).attr('data-lang'));
		return false;
	});

	/*-------------------------         hide lang list           --------------------------------*/
	$(document).click( function(event){
		if($(event.target).closest('.lang').length) 
			return;
		$('.lang-head').removeClass('active');
		$('.lang-list').slideUp(300);
		event.stopPropagation();
	});

	/*-------------------------         head arr           --------------------------------*/
	$('.head-more a').click(function(event) {
		var $parent = $(this).parents('.head-box')
		if (!$parent.hasClass('active')) {
			$parent.addClass('active');
			$parent.find('.head-title').slideUp(0);
			$parent.find('.head-subtitle').slideUp(0);
			$parent.find('.a-more').slideUp(0);

			$parent.find('.head-text').slideDown(300);
			$parent.find('.a-back').slideDown(300);
		} 
		else {
			$parent.removeClass('active');
			$parent.find('.head-text').slideUp(0);
			$parent.find('.a-back').slideUp(0);

			$parent.find('.head-title').slideDown(300);
			$parent.find('.head-subtitle').slideDown(300);
			$parent.find('.a-more').slideDown(300);
		}
		return false;
	});
	// $('.a-back').click(function(event) {
	// 	$(this).parents('.head-box').removeClass('active');
	// 	return false;
	// });

	/*-------------------------         slider           --------------------------------*/
	$('.head-slider').slick({
		dots: true,
		arrows: false,
		speed: 500,
		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 3000,
	});



});