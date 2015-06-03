
//6a
	$(document).ready(function(){
     $("button.button1").click(function(){
          $(#logo1).attr('src', 'turnoff.jpg');
		            $(#logo2).attr('src', 'turnoff.jpg');
     });
});
//6b

	$(document).ready(function(){
		$("button.button2").click(function(){
			$("#button1").css('color', "green");
			$("#button2").css('color', "blue");
			$("#button3").css('color', "yellow");
			$("h1").css('font-family', "verdana,sans-serif");			
		});
	});
	
//6c
	$(document).ready(function(){
		$("button.button3").click(function(){
			$("#mainnav").animate({
				right: '800px',
				opacity: '0.75',
			});
		});
	});
	
	
