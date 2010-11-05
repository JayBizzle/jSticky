(function($){
 $.fn.jSticky = function(options) {

  var defaults = {
   offsetTop: 0, // Offset from top of browser we should make element sticky
   offsetBottom: 0,
   stopScrollingAt:false,
   debug: false
  };
  var options = $.extend(defaults, options);
  
  
	if(options.debug)
	{
		$('body').append('<div style="position:fixed; top:0; right:0; width:200px" id="jStickyDebug"></div>')
	
	}
    
  return this.each(function() {
  
		var stickerTop = parseInt($('#scroll').offset().top); //position from top
		var scrollHeight = $('#scroll').height(); // height of scroll menu
		var scrollTrack = $("#scroll"); // scroll track object
		var scrollTrackHeight = $('.scrollTrack').height(); // height of the main body text
		
		if(scrollTrackHeight > scrollHeight) // Only do the scrolling if there is room to do it
		{
			//$('#col-two').css({height: profileHeight, position:'relative'});
			$(window).scroll(function()
			{
				var scrollOffset = parseInt($('#scroll').offset().top);
				
				var scrollTrackOffset = parseInt($('.scrollTrack').offset().top);
				
				var baseFromTop = scrollHeight +  stickerTop; // position from top the base of the #scroll div is
				
			
			
		    	var scrollAmount = parseInt($(window).scrollTop());
		    	
		    	// output debugging values
		    	if(options.debug)
		    	{
		    		$('#jStickyDebug').html(
		    			"Base from top: " + baseFromTop +
		    			"<br />Scroll amount: " + scrollAmount +
		    			"<br />Scroll track height: " + scrollTrackHeight +
		    			"<br />Scroll track offset: " + scrollTrackOffset +
		    			"<br />Scroller height: " + scrollHeight +
		    			"<br />Position from top: " + stickerTop);
		    	}
		    	
		    	scrollTrack.removeAttr("style");
		    	if(scrollAmount < scrollTrackHeight + scrollTrackOffset)
		    	{
					if(baseFromTop < scrollTrackHeight + scrollTrackOffset)
					{
						
						console.log(baseFromTop);
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
				    else
					{
						if(scrollAmount < baseFromTop)
						{
							scrollTrack.css((parseInt($(window).scrollTop())+parseInt($("#scroll").css('margin-top')) > stickerTop-options.offsetTop) ? {position:'fixed',top:options.offsetTop+'px'} : {position:'relative'});
						}
						else
						{
						    scrollTrack.removeAttr("style");
				    		scrollTrack.attr('style', 'position:absolute; bottom:0px');
			    		}
					}
				}
				else
				{
					    scrollTrack.removeAttr("style");
			    		scrollTrack.attr('style', 'position:absolute; bottom:0px');
				}
				
				if(options.debug)
				{
					$('#jStickyDebug').append("<br />" + scrollTrack.attr('style'));
				}
			}); 
		}
  });
 };
})(jQuery);