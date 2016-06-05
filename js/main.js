$(function(){
  $(window).on('resize',function(){
      var $window = $(this),
          windowWidth = $window.width(),
          windowHeight = $window.height(),
          imgAspectRatio = 1000/734;

      if(imgAspectRatio > windowWidth/windowHeight){
        $('.TopImg').css({
          top: 0,
          height: '100%',
          width: windowHeight*imgAspectRatio,
          left: (windowWidth-windowHeight*imgAspectRatio)/2
        });
      }else if(imgAspectRatio <= windowWidth/windowHeight){
        $('.TopImg').css({
          top: (windowHeight-windowWidth/imgAspectRatio)/2,
          height: windowWidth/imgAspectRatio,
          width: '100%',
          left: 0
        });
      }
  });
  $(window).trigger('resize');


  $('aside').on('mouseover',function(){
    $(this).stop(true).animate({
      left: '0px'
    },300);
    $('.aside_link').css('border-top','1px solid white');
    $('.aside_link').css('border-bottom','1px solid white');
    $('aside li').css('border-top','1px solid white');
    $('aside li:last-child').css('border-bottom','1px solid white');

  });
  $('aside').on('mouseout',function(){
    $(this).stop(true).animate({
      left: '-280px'
    },200);
    $('.aside_link').css('border-top','1px solid rgba(0,0,0,0.14)');
    $('.aside_link').css('border-bottom','1px solid rgba(0,0,0,0.14)');
    $('aside li').css('border-top','1px solid rgba(0,0,0,0.14)');
    $('aside li:last-child').css('border-bottom','1px solid rgba(0,0,0,0.14)');
  });


  $('.link').each(function(){
    $(this).on('mouseover',function(){
      $(this).stop(true).animate({
          'background-color': 'white'
      },100);
      $(this).find('h3').stop(true).animate({
        'color': 'black'
      },100);
      $(this).find('h2').stop(true).animate({
        'color': 'black'
      },100);
      $(this).find('p').stop(true).animate({
        'color': 'black'
      },100);

      // $(this).find('.study').css('background-position','0px 0px');
      // $(this).find('.maru').css('background-position','0px -80px');
      // $(this).find('.oya').css('background-position','0px -160px');
      // $(this).find('.sugi').css('background-position','0px -240px');
      // $(this).find('.naru').css('background-position','0px -320px');
      // $(this).find('.stair').css('background-position','0px -400px');

      $(this).find('.study').css('background-position','-160px 0px');
      $(this).find('.maru').css('background-position','-160px -80px');
      $(this).find('.oya').css('background-position','-160px -160px');
      $(this).find('.sugi').css('background-position','-160px -240px');
      $(this).find('.naru').css('background-position','-160px -320px');
      $(this).find('.stair').css('background-position','-160px -400px');
    });
  });
  $('.link').each(function(){
    $(this).on('mouseout',function(){
      $(this).stop(true).animate({
          'background-color': 'rgba(0,0,0,0)'
      },100);
      $(this).find('h3').stop(true).animate({
        'color': 'white'
      },100);
      $(this).find('h2').stop(true).animate({
        'color': 'white'
      },100);
      $(this).find('p').stop(true).animate({
        'color': 'white'
      },100);

      $(this).find('.study').css('background-position','-80px 0px');
      $(this).find('.maru').css('background-position','-80px -80px');
      $(this).find('.oya').css('background-position','-80px -160px');
      $(this).find('.sugi').css('background-position','-80px -240px');
      $(this).find('.naru').css('background-position','-80px -320px');
      $(this).find('.stair').css('background-position','-80px -400px');
    });
  });


});
