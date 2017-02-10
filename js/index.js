$(function(){
	//轮播图
	var aa=new shuffing(".bannerbox",1329,532,15,15,5,40,40);
	//footer
	$(".footer-middle").toggle(function(){
		 $(".footer-bottom").css("display","block")
		 $(".footer-main").animate({top:"-412px"},1000)
		
	},function(){
		$(".footer-main").animate({top:"0px"},1000,function(){
			 $(".footer-bottom").css("display","none")
		})
	})
	
     //video	
	$(".video").hover(function(){
		$(".shadow").css("display","none");
	},function(){
		$(".shadow").css("display","block");
	})
	
	$(".welcome").mouseover(function(){
		$(this).addClass("active")
	})
	$(".welcome").mouseout(function(){
		$(this).removeClass("active")
	})
	
	//buybutton
	$(".buybutton").hover(function(){
		$(this).addClass("active")
	},function(){
		$(this).removeClass("active")
	})
	
	
	
})
