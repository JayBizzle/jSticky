$(window).load(function() {

	if($('#scroll').length != 0)
	{
		var stickerTop = parseInt($('#scroll').offset().top); //position from top
		var scrollHeight = $('#scroll').height(); // height of scroll menu
		var scrollTrack = $("#scroll"); // height of the scroll track
		var profileHeight = $('.company-profile').height(); // height of the main body text
		
		if(profileHeight > scrollHeight)
		{
		
			$('#col-two').css({height: profileHeight, position:'relative'});
			$(window).scroll(function()
			{
				var scrollOffest = parseInt($('#scroll').offset().top);
				
				var result = scrollHeight + scrollOffest - stickerTop; // position from top the bottom of the #scroll div is
				
				
			
		    	var scrollAmount = parseInt($(window).scrollTop()) + scrollHeight - stickerTop;
		    	
		    	// uncomment following line for debugging
		    	//$('#looking-for h1').text(result + "-" +scrollAmount + "-" +profileHeight);////
		    	
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
				    		scrollTrack.css((parseInt($(window).scrollTop())+parseInt($("#scroll").css('margin-top')) > stickerTop) ? {position:'fixed',top:'0px'} : {position:'relative'});
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
	}
});