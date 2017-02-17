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
   
   //tuijian
 var  ord;
    $(".list2-Li").mouseenter(function(){
    	ord=$(".list2-Li").index(this)  
    	$(".recomment img").eq(ord).animate({"left":"10px","width":"150px","height":"170px","top":"60px"})
    	$(".buybutton").eq(ord).animate({"left":"0px"},"slow");
    	$(".wenzi").eq(ord).animate({"right":"0px"},"slow");
    	$(".list2-Li-bottom").eq(ord).animate({"left":"-268px"},"slow")
    	
    })
    
   $(".list2-Li").mouseleave(function(){
   	    $(".recomment img").eq(ord).stop().animate({"left":"0px","width":"238px","height":"242px","top":"0px","left":"10px"})
    	$(".buybutton").eq(ord).stop().animate({"left":"268px"},"1000");
    	$(".wenzi").eq(ord).stop().animate({"right":"-120px"},"1000");
    	$(".list2-Li-bottom").eq(ord).stop().animate({"left":"20px"},"fast")
    	

   	
   })
   
   //音乐播放器
       $(".video").append($("#music").html());
     var modeText = ['顺序播放','单曲循环','随机播放','列表循环'];
var player = new MPlayer({
	// 容器选择器名称
	containerSelector: '.mp',
	// 播放列表
	songList: mplayer_song,
	// 专辑图片错误时显示的图片
	defaultImg: 'img/mplayer_error.png',
	// 自动播放
	autoPlay: true,
	// 播放模式(0->顺序播放,1->单曲循环,2->随机播放,3->列表循环(默认))
	playMode:0,
	playList:0,
	playSong:0,
	// 当前歌词距离顶部的距离
	lrcTopPos: 34,
	// 列表模板，用${变量名}$插入模板变量
	listFormat: '<tr><td>${name}$</td><td>${singer}$</td><td>${time}$</td></tr>',
	// 音量滑块改变事件名称
	volSlideEventName:'change',
	// 初始音量
	defaultVolume:80
}, function () {
	// 绑定事件
	this.on('afterInit', function () {
		console.log('播放器初始化完成，正在准备播放');
	}).on('beforePlay', function () {
		var $this = this;
		var song = $this.getCurrentSong(true);
		var songName = song.name + ' - ' + song.singer;
		console.log('即将播放'+songName+'，return false;可以取消播放');
	}).on('timeUpdate', function () {
		var $this = this;
		console.log('当前歌词：' + $this.getLrc());
	}).on('end', function () {
		var $this = this;
		var song = $this.getCurrentSong(true);
		var songName = song.name + ' - ' + song.singer;
		console.log(songName+'播放完毕，return false;可以取消播放下一曲');
	}).on('mute', function () {
		var status = this.getIsMuted() ? '已静音' : '未静音';
		console.log('当前静音状态：' + status);
	}).on('changeMode', function () {
		var $this = this;
		var mode = modeText[$this.getPlayMode()];
		$this.dom.container.find('.mp-mode').attr('title',mode);
		console.log('播放模式已切换为：' + mode);
	});
});


$(document.body).append(player.audio); // 测试用

setEffects(player);

     
     
     
     
   
  
  //影音
   $(".kejibox-right li").hoverdir();
   
  //cookiedenglu
  
   if($.cookie("user")){
   	        $(".login1").empty();
   	   var vip=JSON.parse($.cookie("user"));
 	 		$(".login1").html('你好!'+vip.email+',<span class="login2">退出!</span>')
 	 		$(".login2").css({"color":"#fff","cursor":"pointer","font-size":"14px"})
   	
   	
   }
   
   $(".login2").click(function(){
   	$.cookie("user",JSON.stringify(vip),{expires:-1,path:'/'});
   	location.reload(true);
   })
   
  /* 商品列表*/
  
      $.get("http://localhost/shop1.php",function(data){
      	 console.log(data);
      })
   
   
})
