$(document).ready(function(){	
	$('.contain').each(function(e){
		if(e == 0){
			$(this).addClass('current');
		}
		 $(this).attr('id', 'handle' + e);
	})
	
	$('.tabs li').each(function(e){
		if(e == 0){
			$(this).addClass('current'); //adds class current to 1st li
			
		}

		$(this).wrapInner('<a class="title"></a>'); //wraps list items in anchor tag	

		$(this).append('<a><img /></a>'); //creates img tag		
		$(this).children('a').attr('href', '#handle' + e);//adds href to the anchors	
		y = $('#handle' + e + ' img').attr('src'); //grabs src from large pix
		$(this).find('img').attr('src', y); //appends src to small pix
		t = $(this).children('a').text(); 
		$('#handle' + e).append('<span class="rotat-title">' + t + '</span>'); //adds span and text to big images	
		
	})
	
	$('.tabs li a').click(function(){
		c = $(this).attr('href'); 		
		if($(c).hasClass('current')){
			return false;

		}else{
			
			showImage($(c), 20);
			$('.tabs li').removeClass('current');
			$(this).parent().addClass('current');
			//$(".tabs .current .tab-hover").css({
			//"display" : 'none'
			//});
			return false;
		}			
	})
	
})

function showImage(img, duration){		 

	$('.contain').removeClass('current').css({
			"opacity" : 0.0, 
			"zIndex" : 2
			});
	img.animate({opacity:1.0}, duration, function(){		
		$(this).addClass('current').css({zIndex:1});
	});	 
	
}

