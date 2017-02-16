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
   

   //fengxiang
   
    $(".share").mouseover(function(){
            $(".box1").stop().addClass("gong").animate({
            	height:"100px",
            },1000)
		});
		 $(".share").mouseout(function(){
                 $(".box1").stop().animate({
            	height:"0",
            },1000,function(){$(".box1").removeClass("gong")})
		 });

         var ord;
		 $(".box2 span").mouseenter(function(){
             ord=$(".box2 span").index(this)
             console.log(this)
             console.log(ord)
              console.log($(this))
		 	$(this).append('<b class="zhao"></b>')
		 	$(this).siblings("span").empty();
             console.log($(this).siblings().children())
		 })

		 $(".box2 span").mouseleave(function(){
		 	$(".box2 span").eq(ord).empty()
		 })


    //xiangqingye
      
     $(".left-bottom li img").mouseenter(function(){
		var ord=$(this).index();
		$(this).addClass(".fd-act")
		$(".left-top img")[0].src=this.src;
		$("#big-img")[0].src=this.src;
	})
    $(".left-bottom li img").mouseleave(function(){
       $(this).removeClass(".fd-act")
    })
    
      
      
    //给middle-img添加移入事件
    $(".container-left")[0].onmouseenter=function(){
    	$("#shadow").css({"display":"block","cursor":"pointer"})
    	$(".big-box").css("display","block");
    
    }
    
    $(".container-left")[0].onmouseleave=function(){
    	$("#shadow").css("display","none")
    	$(".big-box").css("display","none")
    }
      
    
     //给mainphoto-left-top添加移入 
    $(".container-left")[0].onmousemove=function(ev){
    	var ev=ev||window.event;
    	iX=ev.clientX,
    	iY=ev.clientY,
    	iLeft=iX-$("#shadow")[0].offsetWidth,
    	iTop=iY-$("#shadow")[0].offsetHeight;
    	if(iLeft<0){
    		iLeft=0;
    	}
    	if(iTop<0){
    		iTop=0;
    	}
    	if(iLeft>275){
    		iLeft=275;
    	}
    	if(iTop>250){
    		iTop=250;
    	}

    	$("#shadow")[0].style.left=iLeft+"px";
        $("#shadow")[0].style.top=iTop+"px";
    
    
        $("#big-img")[0].style.left=-iLeft*2+"px";
        $("#big-img")[0].style.top=-iTop*2+"px";
        
    }   
     
     
   /*  /xuangxiangka/*/
     $(".main-contect").eq(0).css("display","block");
     $(".main-card ul li").eq(0).css("border-top","2px solid #A5CF4C")
     $(".main-card ul li").click(function(){
     
     	var index=$(this).index();
     		$(".main-card ul li").eq(index).css("border-top","2px solid #A5CF4C").siblings().css("border-top","none")
     	$(".main-contect").eq(index).css("display","block").siblings(".main-contect").css("display","none")
     })
   
   /*悬浮*/
   $(window).scroll(function(){
    	var iscroll=$(window).scrollTop()
    	 console.log(iscroll)
    	if(iscroll>800){
    		$(".main-nav").css("display","block")
    		
    	}
    	
    	else{$(".main-nav").css("display","none")}
    })
   
    $(".main-nav ul li").click(function(){
     	var num=$(this).index();
    	$(this).css({"border":"none","border-top":"2px solid #A5CF4C"});
    	$(this).siblings().css({"border":"none"});
    	
    	$("html,body").animate({
    		scrollTop:680
    	},500)
    	
    	   $(".main-card ul li").eq(num).trigger("click");
    	})
  
})
