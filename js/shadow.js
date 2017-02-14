$.fn.hoverdir=function(){
	$(this).on("mouseenter mouseleave",function(event){
		var evType=event.type;
		var direction=$.hoverdir.getdir($(this),{
			x:event.pageX,
			y:event.pageY
		});
		$.hoverdir.move($(this),direction,evType);
	});
	

}

 $.hoverdir={
 	getdir:function($el,coordinate){
 		var w=$el.width(),
 		    h=$el.height(),
 		    x=(coordinate.x-$el.offset().left-(w/2)*(w>h?h/w:1)),
 		    y=(coordinate.y-$el.offset().top-(h/2)*(h>w?w/h:1)),
 		    direction=Math.round((((Math.atan2(y, x)*(180 / Math.PI)) + 180) / 90) + 3) % 4;
 		    console.log(w);
 		    console.log(h);
 		    return direction;
 	},
 	move:function($el,direction,type){
 		var $layer=$el.find("span");
 		var coord={};
 		if(type==="mouseenter"){
 			console.log(direction)
 			switch(direction){
 				case 0 :$layer.css("top","-100%").css("left","0");break;
 				case 1 :$layer.css("top","0").css("left","100%");break;
 				case 2 :$layer.css("top","100%").css("left","0");break;
 				case 3 :$layer.css("top","0").css("left","-100%");break;
 			};
 			coord={left:"0px",top:"0px"}
 		}else{
 			switch(direction){
 				case 0 :coord={left:0,top:"-100%"};break;
 				case 1 :coord={left:"100%",top:0};break;
 				case 2 :coord={left:0,top:"100%"};break;
 				case 3 :coord={left:"-100%",top:0};break;
 			}
 		}
 		
 		$layer.stop().animate(coord,300);
 		
 	}
 	
 }
