$(document).ready(function(e) {
    "use strict"
  $(".my-work li").on("click",function(){
	  $(this).addClass("mine-color").siblings().removeClass("mine-color");
	  
	  });
});

//products 
$(".byadli ").click(function(){
	 $(this).addClass("active-products");
	 $(".tasweqli").removeClass("active-products");
	 $(".tasmenli").removeClass("active-products");
	 $(".alfli").removeClass("active-products");
	 
	 $(".byad").css({"display":"block"});
	 $(".tasmen").css({"display":"none"});
	 $(".tasweq").css({"display":"none"});
	 $(".alf").css({"display":"none"});
	 
	
	
	});
	
	$(".tasmenli ").click(function(){
	 $(this).addClass("active-products");
	 $(".byadli").removeClass("active-products");
	 $(".tasweqli").removeClass("active-products");
	 $(".alfli").removeClass("active-products");
	 
	 $(".tasmen").css({"display":"block"});
	 $(".byad").css({"display":"none"});
	 $(".tasweq").css({"display":"none"});
	 $(".alf").css({"display":"none"});
	 
	
	
	});
	
	$(".tasweqli ").click(function(){
	 $(this).addClass("active-products");
	 $(".byadli").removeClass("active-products");
	 $(".tasmenli").removeClass("active-products");
	 $(".alfli").removeClass("active-products");
	 
	 $(".tasweq").css({"display":"block"});
	 $(".tasmen").css({"display":"none"});
	 $(".byad").css({"display":"none"});
	 $(".alf").css({"display":"none"});
	 
	
	
	});
	
	$(".alfli ").click(function(){
	 $(this).addClass("active-products");
	 $(".tasweqli").removeClass("active-products");
	 $(".tasmenli").removeClass("active-products");
	 $(".byadli").removeClass("active-products");
	 
	 $(".alf").css({"display":"block"});
	 $(".tasmen").css({"display":"none"});
	 $(".tasweq").css({"display":"none"});
	 $(".byad").css({"display":"none"});
	 
	
	
	});
	

	  /// navbar hover
	$(window).scroll(function(){
		

		
		if($(this).scrollTop()> 100){
			$(".my-navbar .navbar").css({"background-color":"#FFF"});
			$(".my-navbar .navbar-default .navbar-nav > li > a").css({"color":"inherit"});
			$(".my-navbar .navbar-default .navbar-nav > li > a").hover(function(){ $(this).css({"color":"#fcc121"})},function(){$(this).css({"color":"inherit"})});
         
				
		}else{
			$(".my-navbar .navbar").css({"background-color":"inherit"});
			$(".my-navbar .navbar-default .navbar-nav > li > a").css({"color":"#FFF"});
			$(".my-navbar .navbar-default .navbar-nav > li > a").hover(function(){ $(this).css({"color":"#fcc121"})},function(){$(this).css({"color":"#FFF"})});
			
		}
		$(".my-block").each(function() {
			if($(window).scrollTop()>$(this).offset().top-20){
				var blockId = $(this).attr("id");
				$(".navbar-collapse li a").removeClass("my-active");
				$(".navbar-collapse li a[data-scroll='"+blockId+"']" ).addClass("my-active");
				
				
			}
            
        });
		
		}); 