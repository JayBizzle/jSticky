(function($){
 $.fn.jSticky = function(options) {

  var defaults = {
   offsetTop: 0,
   stopScrollingAt:false
  };
  var options = $.extend(defaults, options);
    
  return this.each(function() {
  
		var stickerTop = parseInt($('#scroll').offset().top); //position from top
		var scrollHeight = $('#scroll').height(); // height of scroll menu
		var scrollTrack = $("#scroll"); // height of the scroll track
		var profileHeight = $('.scrollTrack').height(); // height of the main body text
		
		if(profileHeight > scrollHeight)
		{
		
			//$('#col-two').css({height: profileHeight, position:'relative'});
			$(window).scroll(function()
			{
				var scrollOffest = parseInt($('#scroll').offset().top + options.offsetTop);
				
				var result = scrollHeight + scrollOffest - stickerTop; // position from top the bottom of the #scroll div is
				
				
			
		    	var scrollAmount = parseInt($(window).scrollTop()) + scrollHeight - stickerTop;
		    	
		    	// uncomment following line for debugging
		    	$('#scroll').text(result + "-" +scrollAmount + "-" +profileHeight);
		    	
		    	if(scrollAmount < profileHeight)
		    	{
		    		scrollTrack.removeAttr("style");
					if(result < profileHeight)
					{
						if(jQuery.browser.version === '6.0')
						{	
							if(parseInt($(window).scrollTop()) > stickerTop)
							{
				    			scrollTrack.attr('style', 'position:relative;margin-top:'+parseInt(parseInt($(window).scrollTop()) - stickerTop) +'px');
				    		}
				    	}
				    	else
				    	{
				    		scrollTrack.css((parseInt($(window).scrollTop())+parseInt($("#scroll").css('margin-top')) > stickerTop-options.offsetTop) ? {position:'fixed',top:options.offsetTop+'px'} : {position:'relative'});
				    	}
				    }
				}
				else
				{
					    scrollTrack.removeAttr("style");
			    		scrollTrack.attr('style', 'position:absolute; bottom:0px');
				}
			}); 
		}
  });
 };
})(jQuery);