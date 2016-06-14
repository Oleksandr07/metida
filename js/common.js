$(function(){
	$('.fancybox').fancybox({
		padding: 0,
		margin: 10,
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


	$('.lang-head').click(function(event) {
		$(this).toggleClass('active');
		$('.lang-list').slideToggle(300);
	});

	$('.lang-list a[data-lang="' + $('.lang-current').attr('data-lang') + '"]').parents('li').hide();
	$('.lang-list a').click(function(event) {
		$('.lang-list li').show();
		$(this).parents('li').hide();
		$('.lang-current').text($(this).attr('data-lang'));
		return false;
	});
	$(document).click( function(event){
		if($(event.target).closest('.lang').length) 
			return;
		$('.lang-head').removeClass('active');
		$('.lang-list').slideUp(300);
		event.stopPropagation();
	});


	//------------------    menu scroll    -------------------------------

	/*$('.top_menu li a.subNavBtn').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-30},800);
		return false;
	});

    function setNavCurrentSection(){
		var s_top=$(document).scrollTop();
		var w_hgh=window.innerHeight;
		var b_hgh=$('body').outerHeight();
		var cur_sect=$('.top_menu li a.subNavBtn').eq(0);
		$('.top_menu li a.subNavBtn').each(function(){if((w_hgh/3+s_top)>$($(this).attr('href')).offset().top){cur_sect=$(this);}});
		if((s_top+w_hgh+500)>b_hgh){cur_sect=$('.top_menu li a.subNavBtn').last();}
		if(!cur_sect.hasClass('active')){$('.top_menu li a.subNavBtn.active').removeClass('active');cur_sect.addClass('active');}
		if(s_top>$('header').innerHeight()) {$('.top_menu').addClass('fixed');$('body').css('padding-top', '40px');}
		else{$('.top_menu').removeClass('fixed');$('body').css('padding-top', 0);}
	}

	setNavCurrentSection();
	$(window).on('load',function(){
		setNavCurrentSection();
	});
	$(window).resize(function(){
		setNavCurrentSection();
	});
	$(document).on('scroll',function(){
		setNavCurrentSection();
	});*/


});