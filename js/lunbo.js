	 function shuffing(div,width,height,liwidth,liheight,space,spanwidth,spanheight){
               this.div=div;
               this.width=width;
               this.height=height;
               this.liwidth=liwidth;
               this.liheight=liheight;
               this.space=space;
               this.spanwidth=spanwidth;
               this.spanheight=spanheight;
               this.index=0;
               this.iTimer=null;
               this.init();
               this.start();
               this.move();
               this.stump();
               this.bite();
              
          	 }

          	 shuffing.prototype.init=function(){
          	 var ileft=(this.width-(this.liwidth+this.space*2)*($(this.div).find("img").length)-1)/2;
               $(this.div).css({"width":this.width+"px","height":this.height+"px","position":"relative"});
               $(this.div).find("ul img").css({"width":this.width+"px","height":this.height+"px","vertical-align":"bottom"});
               $(this.div).find("ul").css({"position":"absolute","width":this.width*($(this.div).find("img").length)})
               $(this.div).find("ul li").css({"float":"left"})
               $(this.div).find("ol").css({"left":ileft+"px","bottom":"5px","position":"absolute"})
               $(this.div).find("ol li").css({"width":this.liwidth+"px","height":this.liheight+"px","float":"left","margin":this.space+"px"})
          	   $(this.div).find(".left").css({"display":"inline-block","position":"absolute","left":"0px","top":(this.height-this.spanheight)/2+"px","width":this.spanwidth,"height":this.spanheight})
          	   $(this.div).find(".right").css({"display":"inline-block","position":"absolute","right":"0px","top":(this.height-this.spanheight)/2+"px","width":this.spanwidth,"height":this.spanheight})
                  }

          	 shuffing.prototype.gostep=function(){
          	 	var that=this;
          	 	var length=$(this.div).find("img").length;
               that.index++;
               $(this.div).find("ul").stop(true,true).animate({left:-(this.width)*this.index},function(){
               	 if(that.index>length-2){
                    that.index=0;
               	  $(that.div).find("ul").css({"left":"0px"});
               	   }

               	  $(that.div).find("ol li").eq(that.index).addClass("active").siblings().removeClass("active")
               })
          	 }
           
            shuffing.prototype.start=function(){
            	var that=this;
               this.iTimer=setInterval(function(){
                	that.gostep()},2000);
            }

            shuffing.prototype.stop=function(){

            	clearInterval(this.iTimer)
            }

            shuffing.prototype.move=function(){
            	var that=this;
                $(this.div).mouseover(function(){

                	 that.stop();
                });
                $(this.div).mouseout(function(){
                	that.start()
                })
            	
            }

            shuffing.prototype.stump=function(){
            	var that=this;
              $(this.div).find("ol li").mouseover(function(){
                 var ord=$(that.div).find("ol li").index(this);
                     console.log(ord)
                     that.index=ord-1;
                     that.gostep();
                  })
            }
            shuffing.prototype.jian=function(){
               var that=this;
          	   var length=$(this.div).find("img").length;
               	 if(that.index<=0){
               	  $(that.div).find("ul").css({"left":-(this.width*(length-1))+"px"});
               	  $(that.div).find("ul").stop(true,true).animate({"left":-(this.width*(length-2))+"px"})
               	    that.index=length-2;
               	   }else{
                   that.index--;
               $(that.div).find("ul").stop(true,true).animate({"left":-(that.width*that.index)+"px"}
                 );
                      
               }
          $(that.div).find("ol li").eq(that.index).addClass("active").siblings().removeClass("active");
             

            }

            shuffing.prototype.bite=function(){
            	var that=this;
            	var length=$(this.div).find("img").length;
               $(this.div).find(".left").click(function(){
                   that.jian()


                  });
 
               $(this.div).find(".right").click(function(){
                  that.gostep();   
               });

            }
