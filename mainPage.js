
function loadSlider(){
	var slider = document.getElementById('mySlider');
	console.log(slider);
	noUiSlider.create(slider, {
    	start: [40, 80],
    	connect: true,
    	range: {
        	'min': 15,
        	'max': 100
	    }
	});
	slider.noUiSlider.on('update',function(values,handler){
	document.getElementById("first").innerHTML="$"+values[0];
	document.getElementById("second").innerHTML="$"+values[1];
});
	loadElements();
}

// $("#mySlider")[0].on('update',function(){
// 	var values=this.get();
// 	console.log(values);
// 	document.getElementById("first").innerHTML="$"+values[0];
// 	document.getElementById("second").innerHTML="$"+values[1];
// });

$(document).on('click','.item',function(){
		$(".delAdd").fadeIn().delay(7000).fadeOut();
		var clas = $(this).attr('class');
		var nr = clas.charAt(clas.length-1);
		$(".del").click(function(){ deleteEl(nr); });
	});

function addEl(){
	var title = prompt("Enter the name of the dish: ","Gourmet Croissant");
	var category = prompt("Enter the cateogory of the dish: ","Breakfast");
	var price = prompt("Enter the price of teh dish: ","$12");
	var src = prompt("Enter the dish picture source: ","");
	var length = parseInt(localStorage.getItem("itemsLength"));
	length+=1;
	localStorage.setItem('itemsLength',length);
	localStorage.setItem('category'+length,category);
	localStorage.setItem('title'+length,title);
	localStorage.setItem('price'+length,price);
	localStorage.setItem('src'+length,src);
	loadElements();
}

function deleteEl(el){
	localStorage.removeItem('title'+el);
	localStorage.removeItem('src'+el);
	localStorage.removeItem('category'+el);
	localStorage.removeItem('price'+el);
	$('.menu').innerHTML = "";	
	loadElements();
}

function writeElements(){
	//puts data in local storage
	localStorage.setItem('title1','Eggs');
	localStorage.setItem('title2','Sweets');
	localStorage.setItem('title3','Gourmet Breakfast');
	localStorage.setItem('title4','Risotto');
	localStorage.setItem('title5','Fancy Meat');
	localStorage.setItem('title6','Sea Weed Rice');
	localStorage.setItem('title7','Spaghetti');
	localStorage.setItem('title8','Spotted Burger');
	localStorage.setItem('category1','Breakfast');
	localStorage.setItem('category2','Breakfast');
	localStorage.setItem('category3','Breakfast');
	localStorage.setItem('category4','Second Courses');
	localStorage.setItem('category5','Second Courses');
	localStorage.setItem('category6','Entrees');
	localStorage.setItem('category7','Second Courses');
	localStorage.setItem('category8','Burgers');
	localStorage.setItem('price1','$12');
	localStorage.setItem('price2','$17');
	localStorage.setItem('price3','$20');
	localStorage.setItem('price4','$45');
	localStorage.setItem('price5','$70');
	localStorage.setItem('price6','$37');
	localStorage.setItem('price7','$40');
	localStorage.setItem('price8','$70');
	localStorage.setItem('src1','img/f1.jpg');
	localStorage.setItem('src2','img/f2.jpg');
	localStorage.setItem('src3','img/f3.jpg');
	localStorage.setItem('src4','img/f4.jpg');
	localStorage.setItem('src5','img/f5.jpg');
	localStorage.setItem('src6','img/f6.jpg');
	localStorage.setItem('src7','img/f7.jpg');
	localStorage.setItem('src8','img/f8.jpg');
	localStorage.setItem('itemsLength',8);
}

function loadElements(){
	
	var length = localStorage.getItem('itemsLength');
	//var nrOfRowDivs = Math.ceil(length/4);

	var el="<div class='delAdd'><p class='del'>Delete</p>"+
			"<p onclick='addEl()'>Add</p></div>";
			var count =0;
	for(var i=1;i<=length;i++){
		if(localStorage.getItem('src'+i) == null)
			continue;
		count+=1;
		if(count%4==1)
			el+="<div class='items'><div class='item "+i+"'>";
		else
			el+="<div class='item "+i+"'>";
		el+="<div class='picture'><img src='"+localStorage.getItem('src'+i)+"'></div>"+
				"<b><p clas='title' style='font-size: 30px;'>"+localStorage.getItem('title'+i)+"</p></b>"+
				"<p class='category'>"+localStorage.getItem('category'+i)+"</p>"+
				"<p class='price'>"+localStorage.getItem('price'+i)+"</p></div>";
		if(count%4==0)
			el+="</div>"	


	}
	$('.menu').html(el);
	//set the id for the outline 
	/*
	$('.1').attr("id","lefttop");
	$('.3').attr("id","top");
	$('.2').attr("id","top");
	$('.4').attr("id","topright");
	//nr of el on the last row
	var lastRowEl=length%4;
	if(lastRowEl == 0)
	lastRowEl=4; 
	$()
	for(var i=5;i<=length;i+=4){
		$('.'+i).attr("id","left");
		$('.'+(i+3)).attr("id","right");
	}
	/*
	var lastRow=length;
	for(var i=lastRowEl;i>0;i--){
		if(lastRowEl==4)
			$('.'+).attr("id","bottom right");
	}*/
}

function modify(){
	$(".delAdd").fadeIn();
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