$(document).ready(function(e) {
    "use strict"
  $(".my-work li").on("click",function(){
	  $(this).addClass("mine-color").siblings().removeClass("mine-color");
	  
	  });
})
	$(window).load(function(){
	$(".loading").fadeOut(2000);
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