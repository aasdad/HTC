$(function(){
	
 /* nav	*/
	$(".firstUl>li>a").hover(function(){
	  $(this).css("background","#A5D04D")
	},function(){
	  $(this).css("background","none")
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
	
  //轮播图
	var aa=new shuffing(".bannerbox",1349,532,15,15,5,40,40);	
	
  //shoplist
  
  $(".shop-list ul li").mouseover(function(){
   	   $(this).css("border-top-color","#a5cf4c").css({"box-shadow":"0px 5px 10px #a5cf4c,0px 5px 10px #000"})
   	   
   })
   
    $(".shop-list ul li").mouseout(function(){
      $(this).css("border-top-color","#fff").css({"box-shadow":"none"})
    });
    
    //secondUl
    $(".secondUl li img").hover(function(){
    	$(this).addClass("act")
    	
    },function(){
    	$(this).removeClass("act")
    })
   
    $(".allphone").hover(function(){
    	$(".allphoneCard").css("display","block")
    	$(this).css("background","#A5D04D")
    },function(){
    	$(".allphoneCard").css("display","none")
    	$(this).css("background","none")
    })
    
     $(".partslist li img,.partslist li p").hover(function(){
    	$(this).addClass("act")
    	
    },function(){
    	$(this).removeClass("act")
    })
    
    $(".parts").hover(function(){
    $(".partsCard").css("display","block")
    	$(this).css("background","#A5D04D")
    },function(){
    	$(".partsCard").css("display","none")
    	$(this).css("background","none")
    })
    
    //右侧悬浮
    $(".gouwu").hover(function(){
    	$(".gouwucard").css("border-left","2px solid #a5cf4c");
    	$(".gouwucard").stop().animate({"width":"300px"},"slow")
    },function(){
    	$(".gouwucard").stop().animate({"width":"0px"},"slow")
    	$(".gouwucard").css("border-left","none");
    })
    $(".liulan").hover(function(){
    	$(".liulanCard").css("border-left","2px solid #a5cf4c");
    	$(".liulanCard").stop().animate({"width":"300px"},"slow")
    },function(){
    	$(".liulanCard").stop().animate({"width":"0px"},"slow");
    	$(".liulanCard").css("border-left","none");
    })
    
    //顶部悬浮；侧栏影藏，返回顶部
     $(window).scroll(function(){
     	var iscroll=$(window).scrollTop();   
     	if(iscroll>400){
     		$(".right-fix").fadeIn()
     	}else{$(".right-fix").fadeOut()};
     	
     	if(iscroll>100){
     		$(".nav").css({"position":"fixed","top":"0"});
     		
     	}else{
     		$(".nav").css("position","absolute")
     	}
     	
     	

     })
     
     $(".backtop").click(function(){
     	
       	$("body,html").animate({"scrollTop":"0px"},500);
        return false;
       })
    

   $(".hide-top-middle").toggle(function(){
   	  $(".footer-bottom").css("display","block")
   	  var $height=$("body,html").height();
   	    console.log($height)
   	    $("html,body").animate({"scrollTop":$height},1000)
   },function(){
   	$(".footer-bottom").css("display","none")
   })
    
   
})
