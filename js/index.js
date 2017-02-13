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
	$(".allphone").hover(function(){
	$(this).addClass("active")
	},function(){
		$(this).removeClass("active")
	})
	
	//遮罩
	$(".video").click(function(){
		$("#mainShadow").css("display","block");
		$("#shadowvideo").css("display","block")
	})
	
	$(".close").click(function(){
		$("#mainShadow").css("display","none");
		$("#shadowvideo").css("display","none")
	})
	
	//shop
	$(".seedt").hover(function(){
		var ord=$(".seedt").index(this);
		console.log(ord)
		$(".seedt1").eq(ord).css("display","none")
		$(".seedt2").eq(ord).css("display","block")
	},function(){
			var ord=$(".seedt").index(this);
		$(".seedt1").eq(ord).css("display","block")
		$(".seedt2").eq(ord).css("display","none")
	})
	
	
	//xuanxiaka
	$(".produce").mouseover(function(){
		$(".card").slideDown("slow");
		$(".produce").css({"background":"#F4F4F4","color":"#a5cf4c"})
	})
    $(".produce").mouseout(function(){
    	$(".card").slideUp("slow");
    	$(".produce").css({"background":"#FFF","color":"#000"})
    })
    $(".card").mouseover(function(){
    	$(this).stop(true,true).css("display","block")
    	$(".produce").css({"background":"#F4F4F4","color":"#a5cf4c"})
    	
    })
     $(".card").mouseout(function(){
    	$(this).stop(true).slideUp("slow")
    	$(".produce").css({"background":"#FFF","color":"#000"})
    })
    
})
