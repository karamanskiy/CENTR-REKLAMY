"use strict";

$(function(){


	var handler = function() {
		var $header = $('.header'),
		inWidth = $(window).width();
		if(inWidth > 690 && $header.length){
			$(window).on('scroll', fixedHeader);
		} else {
			$(window).off('scroll', fixedHeader);
			$header.removeClass('fixed');
			$('body').removeClass('padding-menu');
		}

	}; // end handler

	$(window).bind('load', handler);
	$(window).bind('resize', handler);

	function fixedHeader() {
		var height = $(window).scrollTop();
		if(height > 400){
			$('.header').addClass('fixed');
			$('body').addClass('padding-menu');
		} else{
			$('.header').removeClass('fixed');
			$('body').removeClass('padding-menu');
		}
	}


	$(document).ready(function(){


		//отмена перетаскивания картинок
		$("img, a").on("dragstart", function(e) { e.preventDefault(); });

		//navigation scroll to
		$(".menu").on("click","a.scroll", function (e) {
			e.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
		});


		//AJAX email send
		$('form').submit(function(event) {
			event.preventDefault();

			var id = $(this).attr('id');
			var data = $(this).serialize();

			$.ajax({
				url				: '/emailOrder.php',
				data			: data,
				type			: 'post',
				success		: function(){
					$('#'+ id +' input, #'+ id + ' textarea').val('');
					alert('Письмо успешно отправлено!');
				},
				error			: function(){
					alert('Ошибка отправки формы :(');
				}
			});
		});



	// кнопки меню в адаптивке
	// $('.close-btn, .mobile-menu a').click(function() {$('.mobile-menu').removeClass('active');});
	// $('.hamb-btn').click(function() {$('.mobile-menu').addClass('active');});


	// вызов всплывающего окна
	$('.header__callback-btn').click(function() {$('#callback-modal').arcticmodal();});

	//инициализация слайдеров
	$('.main-slider').slick({
		dots: true,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		dotsClass: 'main-slider-dots'
	});


	$('.portfolio__slider1').slick({
		dots: false,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: true
	});
	$('.portfolio__slider2').slick({
		dots: false,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: true
	});
	$('.portfolio__slider3').slick({
		dots: false,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: true
	});


	var maxSlides,
	activeSlideInd,
	slideWidth,
	width = $(window).width();

	if (width < 900) {
		maxSlides = 1;
		activeSlideInd = 0;
		$('.hide-slide-mob').remove();
	} else {
		maxSlides = 3;
		activeSlideInd = 1;
	}

	// $(window).on('load', function () {
		var $revSlider = $('.reviews__slider').bxSlider({
			controls: true,
			pager: false,
			speed: 200,
			infiniteLoop: false,
			nextText: '',
			prevText: '',
			touchEnabled: true,
			minSlides: maxSlides,
			maxSlides: maxSlides,
			moveSlides: 1,
			slideWidth: 325,
			slideMargin: 85,
			onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
				$('.active-slide').removeClass('active-slide');
				$('.bxslider .reviews__slider-item').eq(currentSlideHtmlObject + activeSlideInd).addClass('active-slide');
			},
			onSliderLoad: function () {
				$('.bxslider .reviews__slider-item').eq(1).addClass('active-slide');
			}
		});
		if(window.innerWidth > 900) {
			setTimeout(function() {
				$revSlider.goToNextSlide();
			}, 1000);
		}
	// });

	$(window).on('resize', function() {
		if(window.innerWidth > 850 && window.innerWidth < 950) {
			location.reload(true);
		}
	});




	
	

	// $(window).on('load', function() {
	// 	if(window.innerWidth > 690 && $(window).scrollTop() > 400){
	// 		$('.header').addClass('fixed');
	// 		$('body').addClass('padding-menu');
	// 	}
	// });

	function animateLine(classLine) {
		var scroll_height = $(window).scrollTop();
		scroll_height += window.innerHeight/1.5;
		var line_name = $(classLine);
		var block_offset = line_name.offset().top;
		if(scroll_height > block_offset) {
			line_name.addClass('active_line');
		} else {
			line_name.removeClass('active_line');
		}
	}

	$(window).on('scroll load', function() {
		animateLine('.blue_line');
		animateLine('.pink_line');
		animateLine('.yellow_line');
		animateLine('.preim');
		animateLine('.about__descr');
		animateLine('.reviews');
		animateLine('.pink_line2');
	});

	// menu mobile
	$('.header__hamb').on('click', function () {
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
	});

	// SCROLL TOP BTN
	$('.scroll-top').click(function() {
		$('html, body').animate({
			scrollTop: $('body').offset().top
		}, 1000);
		return false;
	});

	if($('.scroll-top').length){
		$(window).scroll(function() {
			var scr_top = $(window).scrollTop();
			if (scr_top > 900) {
				$('.scroll-top').addClass('active');
			} else{
				$('.scroll-top').removeClass('active');
			}
		});
	}



	//ТАБЫ
	$(".tab_item").not(":first").hide();
	$(".tabs_portfolio .tab").click(function() {
		$(".tabs_portfolio .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_portfolio .tab_item").hide().eq($(this).index()).fadeIn();
		$('.portfolio__slider1').slick('refresh');
		$('.portfolio__slider2').slick('refresh');
		$('.portfolio__slider3').slick('refresh');
	}).eq(0).addClass("active");

	$(".uslugi__accordeon .tab").each(function(index) {$(this).attr('data-index', index);});
	$(".uslugi__right .tab_item").each(function(index) {$(this).attr('data-index', index);});

	$(".uslugi__accordeon .tab").click(function() {
		$(".uslugi__accordeon .tab").removeClass("active").eq($(this).data('index')).addClass("active");
		$(".uslugi__cols .tab_item").hide().eq($(this).data('index')).fadeIn();
	}).eq(0).addClass("active");
	$(".uslugi__cols .tab_item").eq(0).fadeIn();

	// АККОРДЕОН
	$(".uslugi__accordeon dd").hide().prev().click(function() {
		var firstTab = $(this).siblings('dd').find('.tab').eq(0);
		var firstTabIndex = firstTab.data('index');
		firstTab.addClass('active');
		$(".uslugi__cols .tab_item").hide().eq(firstTabIndex).fadeIn();
		$(this).parents(".uslugi__accordeon").find("dd").not(this).slideUp(200).prev().removeClass("active");
		$(this).next().not(":visible").slideDown(200).prev().addClass("active");
	}).eq(0).addClass("active");
	$(".uslugi__accordeon dd").eq(0).slideDown(200);

	$(".uslugi__accordeon dt").wrapInner('<span class="dt_text"></span>').append('<span class="innerLine"></span>');


	// Тоггл формы в Контактах
	$('.contacts__forma-click').on('click', function () {
		$(this).toggleClass('active');
		$('.contacts__form').toggleClass('active');
	});

	// скрытие placeholder
	$('input').on('focus', function () {
		var $this = $(this);
		var placehold = $this.attr('placeholder');
		$this.attr('data-placeholder', placehold);
		$this.attr('placeholder', '');
		// $this.data($this, 'placeholder', placehold);
	});
	$('input').on('blur', function () {
		var $this = $(this);
		$this.attr('placeholder', $this.data('placeholder'));
	});



	// masked input
	var $phoneInput = $('input[type="tel"]');
	$phoneInput.mask("+7 (999) 999-99-99");

	$phoneInput.focus(function() {
		if ( $(this).val() == '' ) { $(this).val('+7 ('); }
	});


	// scroll to elements
	$('.js-scroll').click(function(e) {
		e.preventDefault();
		if(width.innerWidth > 680) {var myOffset = 0;} else {var myOffset = 75;}
		$('.header__menu, .header__hamb').removeClass('active');
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - myOffset
		}, 1000);
		return false;
	});







	//исправление бага ArcticModal в Firefox
	$('.arcticmodal-close').click(function() {
		$('body').css({'overflow-y': 'scroll'});
	});
	$("body").click(function(){$(this).css('overflow-y','visible')});

	if($('#main-map').length) {initMap();}


//==========EoF==============
});
});