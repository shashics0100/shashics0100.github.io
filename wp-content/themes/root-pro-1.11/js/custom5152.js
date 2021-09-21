jQuery(function($){

	$(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('#go-top').fadeIn();
        }else{
            $('#go-top').fadeOut();
        }
    });

	$(window).resize(function(){
        $('#masthead').css('min-height',$('#masthead .masthead-inner-wrap').outerHeight());
        
	    $('.slider-caption').each(function(){
	    var cap_height = $(this).actual( 'outerHeight' );
	    $(this).css('margin-top',-(cap_height/2));
	    })
    }).resize();

	$(window).on('load', function(){
		var pagerWidth = $('#message-slider .bx-pager').outerWidth();
		$('#message-slider .bx-pager').css('margin-left',-(pagerWidth/2));
	})

    $('.text-slider').bxSlider({
    	controls:false
    });

    $('.project-slider').bxSlider({
    	minSlides: 1,
		maxSlides: 2,
		slideWidth: 263,
		slideMargin: 10,
    	controls:false,
    	moveSlide:1,

    });

    $(".fancybox-gallery").nivoLightbox();

    $('.testimonail-content:first').show();
    $('.testimonial-thumb:first').addClass('active');

    $('.testimonial-thumb').click(function(){
        $('.testimonial-thumb').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('id');
        $('.testimonail-content').hide();
        $('.'+id).fadeIn();
        return false;
    });

    $('.search-icon a').click(function() {
        $('.search-box').addClass('active');
    });

    $('.search-box .close').click(function() {
        $('.search-box').removeClass('active');
    });

    if($('#masthead.sticky-header').length > 0) {
        var headerHeight = 200;//$('#masthead').outerHeight();
        $(window).scroll(function() {
            if ($(window).scrollTop() > headerHeight) {
                $('.masthead-inner-wrap').addClass('menu-fix');
            } else{
                $('.masthead-inner-wrap').removeClass('menu-fix');
            }
        });
    }
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            $('#go-top').fadeIn();
        } else {
            $('#go-top').fadeOut();
        }
    });
    
    $('#go-top').click(function(){
        $('body,html').animate({scrollTop:0},800);
        return false;
    });
    
     /*Short Codes Js*/
  $('.slider_wrap').bxSlider({
    pager:false,
    auto:true,
    adaptiveHeight: true,
    captions:true,
    prevText:'<i class="fa fa-angle-left"></i>',
    nextText:'<i class="fa fa-angle-right"></i>'
  });

  $('.ap_accordian:first').children('.ap_accordian_content').show();
  $('.ap_accordian:first').children('.ap_accordian_title').addClass('active');
  $('.ap_accordian_title').click(function(){
    if($(this).hasClass('active')){
    }
    else{
      $(this).parent('.ap_accordian').siblings().find('.ap_accordian_content').slideUp();
      $(this).next('.ap_accordian_content').slideToggle();
      $(this).parent('.ap_accordian').siblings().find('.ap_accordian_title').removeClass('active')
      $(this).toggleClass('active')
    }
  });

  $('.ap_toggle_title').click(function(){
      $(this).next('.ap_toggle_content').slideToggle();
      $(this).toggleClass('active')
  });

  $('.ap_tab_wrap').prepend('<div class="ap_tab_group clearfix"></div>');

  $('.ap_tab_wrap').each(function(){
    $(this).children('.ap_tab').find('.tab-title').prependTo($(this).find('.ap_tab_group'));
    $(this).children('.ap_tab').wrapAll( "<div class='ap_tab_content' />");
  });

  $('#page').each(function(){
    $(this).find('.ap_tab:first-child').show();
    $(this).find('.tab-title:first-child').addClass('active')
  });
 

  $('.ap_tab_group .tab-title').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $(this).parent('.ap_tab_group ').next('.ap_tab_content').find('.ap_tab').hide();
    var ap_id = $(this).attr('id');
    $(this).parent('.ap_tab_group ').next('.ap_tab_content').find('.'+ap_id).show();
  });

});