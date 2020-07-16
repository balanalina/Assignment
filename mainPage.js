function loadSlider(){
	console.log("de ti ar sta bine gheeeeee gheeee");
	var slider = document.getElementById('mySlider');

	noUiSlider.create(slider, {
    	start: [40, 80],
    	connect: true,
    	range: {
        	'min': 15,
        	'max': 100
	    }
	});
}

function dropDown(el){
	//$(el).find(".child").slideDown('slow');
	$(el).find(".child").css({'color':'black','margin-top': 50,'background-color': 'transparent'
			}).fadeIn().animate({'margin-top': 8,'opacity': 1}, 'slow');
	
	$(el).mouseleave(function(){
				$(el).find('.child').animate({'margin-top':50},'slow').fadeOut('slow');
			});

	$(el).hover(function(){
				$(el).css({'color':'orange'});
			},function(){
				$(el).css({'color':'black'});
			});	

	$(".child > li").hover(function(){
				$(this).css({'color':'orange'});
			},function(){
				$(this).css({'color':'black'});
			});		
}