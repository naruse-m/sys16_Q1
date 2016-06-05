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
  });
  $('aside').on('mouseout',function(){
    $(this).stop(true).animate({
      left: '-280px'
    },200);
  });
});
