jQuery(".leftBlock,.summaryLinks").on("click","a", function (event) {
		event.preventDefault();
		var id  = jQuery(this).attr('href'),
			top = jQuery(id).offset().top;
		jQuery('body,html').animate({scrollTop: top}, 1000);
	});
jQuery('body').click(function () {
  if(jQuery('.VinCheckSnippet__inputContainer input.TextInput__control').is( ":focus" )){
jQuery('.VinCheckSnippet__inputContainer .TextInput_has-placeholder').addClass('TextInput_has-focus');
} else {
  jQuery('.VinCheckSnippet__inputContainer .TextInput_has-placeholder').removeClass('TextInput_has-focus');
}
});
jQuery('.tableTr.tableTrHover').click(function () {
  if(jQuery(this).next().height() == 0){
    jQuery(this).next().css({'max-height':'9000px','transition':'0.5s','padding-bottom':'30px'});
    jQuery(this).children().children('.viewMore').text('Скрыть');
    jQuery(this).children().children('.viewMore').addClass('rotateViewMore');
  } else {
    jQuery(this).next().css({'max-height':'0px','transition':'0.5s','padding-bottom':'0px'});
    jQuery(this).children().children('.viewMore').text('Подробнее');
    jQuery(this).children().children('.viewMore').removeClass('rotateViewMore');
  }
});

jQuery(window).scroll(function () {
	if(jQuery(window).scrollTop() < 70){
		if(jQuery(window).width() > 940){
			 jQuery('.leftBlock').css({'position':'absolute','top':'0px'});
		}
	} else {
		if((jQuery(window).scrollTop() + jQuery('.leftBlock').height()) > (jQuery('body').height() - jQuery('footer').height() - 100 ) && jQuery(window).width() > 940 ){
	    jQuery('.leftBlock').css({'position':'absolute','bottom':'0px','top':'auto'});
	  } else {
			console.log(jQuery(window).scrollTop());
	    jQuery('.leftBlock').css({'position':'fixed','bottom':'auto'});
	  }
	}

});
let heightScroll;
if(jQuery(window).scrollTop() > 70){
	heightScroll = 0;
} else {
		heightScroll = 70 - jQuery(window).scrollTop();
}
jQuery('.mobVersion').css({'margin-top':heightScroll+'px'});
if(jQuery(window).width() < 940){
jQuery('.leftBlock').css({'margin-top':heightScroll+'px'});
}

jQuery(window).scroll(function () {
	if(jQuery(window).scrollTop() > 70){
		heightScroll = 0;
	} else {
		heightScroll = 70 - jQuery(window).scrollTop();
	}
	jQuery('.mobVersion').css({'margin-top':heightScroll+'px'});
	if(jQuery(window).width() < 940){
	jQuery('.leftBlock').css({'margin-top':heightScroll+'px'});
	}
})






jQuery('.leftBlock li a').click(function () {
	if(jQuery(window).width() < 960){
		jQuery('.leftBlock').css({'transform':'translate(-113% , 0px)','transition':'0.5s'});
		jQuery('.backWhite').css({'display':'none'});
	}

})



function Scroll_block(){
       var scroll_top = jQuery(document).scrollTop();
       jQuery("#top-menu a").each(function(){
           var hash = jQuery(this).attr("href");
           var target = jQuery(hash);
           if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
               jQuery("#top-menu li.active").parent().removeClass("active");
               jQuery(this).parent().addClass("active");
           } else {
               jQuery(this).parent().removeClass("active");
           }
       });
   }


   jQuery(document).on("scroll", Scroll_block);



   function findOption(select) {
      const option = select.querySelector(`option[value="${select.value}"]`);
      if(jQuery(option).text() != 'Все типы событий'){
        jQuery('.historyBlock .tableBlock .tableTr').css({'display':'none'});
        jQuery('.historyBlock .tableBlock .tableTr').eq(0).css({'display':'flex'});
        jQuery('.historyBlock  .tableTr ').each(function () {
          if(jQuery(this).children('.tableTd').eq(1).text() == jQuery(option).text()){
						if(jQuery(window).width() > 650){
							jQuery(this).css({'display':'flex'});

						}else {
							jQuery(this).css({'display':'block'});

						}
}
        });
      } else {
        jQuery('.historyBlock  .tableTr ').css({'display':'flex'})
      }
   }



jQuery('.mobClick').click(function () {
  console.log(jQuery('.leftBlock').css('transform'));
  if(jQuery('.leftBlock').css('transform') != 'matrix(1, 0, 0, 1, 0, 0)'){
    jQuery('.leftBlock').css({'transform':'translate(0% , 0px)','transition':'0.5s'});
		jQuery('.backWhite').css({'display':'block'});
  } else {
    jQuery('.leftBlock').css({'transform':'translate(-113% , 0px)','transition':'0.5s'});
		jQuery('.backWhite').css({'display':'none'});
  }
});

jQuery('.backWhite').click(function () {
	jQuery(this).css({'display':'none'});
	jQuery('.leftBlock').css({'transform':'translate(-113% , 0px)','transition':'0.5s'});
});






jQuery('.photoList > div').click(function () {
	jQuery('.photoListFull').css({'display':'flex'})
	jQuery('.listFullBlock').slick({
	 slidesToShow: 1,
	 slidesToScroll: 1,
	 arrows: false,
	 fade: true,
	 asNavFor: '.listFullBlockNav'
	});
	jQuery('.listFullBlockNav').slick({
	 slidesToShow: 8,
	 slidesToScroll: 1,
	 asNavFor: '.listFullBlock',
	  arrows: false,
	 centerMode: true,
	 responsive: [
    {
      breakpoint: 768,
      settings: {


        slidesToShow: 6
      }
    },
    {
      breakpoint: 480,
      settings: {

        slidesToShow: 2
      }
    }
  ],
	 focusOnSelect: true
 });
 jQuery('.listFullBlock').append('<span class="closeListPhoto"></span>');
});
jQuery('body').on('click','.closeListPhoto',function () {
	jQuery('.photoListFull').css({'display':'none'})
});
jQuery('.surveyMore').click(function () {
	if(jQuery('.surveyMoreBlock > div').height() == 62){
		jQuery('.surveyMoreBlock > div').css({'max-height':'1500px',"transition":'0.5s'});
		jQuery('.surveyMore').addClass('rotateViewMore').text('Свернуть результат диагностики');

	} else {
		jQuery('.surveyMoreBlock > div').css({'max-height':'62px',"transition":'0.5s'});
		jQuery('.surveyMore').removeClass('rotateViewMore').text('Показать результат диагностики');

	}
})






jQuery('.loginUserBlock').mouseover(function () {
  jQuery('.loginUserHidden').css({'display':'block'});
});

jQuery('.loginUserBlock').mouseout(function () {
  jQuery('.loginUserHidden').css({'display':'none'});
});



jQuery('.checkInButton,.checkHead').click(function () {
  jQuery('.backgroundPopup,.popupLogin').css({'display':'block'});
});
jQuery('.register').click(function () {
	jQuery('.backgroundPopup,.popupRegister').css({'display':'block'});
});

jQuery('.registerLink').click(function () {
jQuery('.popupRegister').css({'display':'block'});
jQuery('.popupLogin').css({'display':'none'});
});
jQuery('.backgroundPopup,.popupLogin ._3BUWW,.popupRegister ._3BUWW').click(function () {
  jQuery('.backgroundPopup,.popupLogin,.popupRegister').css({'display':'none'});
});
