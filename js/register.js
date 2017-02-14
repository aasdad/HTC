$(function(){
	$(".select").load("select.html");
	
	$(".birthdayM").css("display","none")
	$(".mouth2").toggle(function(){
	$(".birthdayM").css("display","block")
	$(".birthdayM").attr("size","15");
	},function(){
		$(".birthdayM").removeAttr("size");
		$(".birthdayM").css("display","none")
	})
	
	$(".birthdayD").css("display","none")
	$(".day2").toggle(function(){
	$(".birthdayD").css("display","block")
	$(".birthdayD").attr("size","15");
	},function(){
		$(".birthdayD").removeAttr("size");
		$(".birthdayD").css("display","none")
	})
	
	$(".birthdayY").css("display","none")
	$(".year2").toggle(function(){
	$(".birthdayY").css("display","block")
	$(".birthdayY").attr("size","15");
	},function(){
		$(".birthdayY").removeAttr("size");
		$(".birthdayY").css("display","none")
	})

    $(".birthdayM").change(function(){
    	$(".mouth1").html($(".birthdayM").val())
    })
    
    $(".birthdayD").change(function(){
    	$(".day1").html($(".birthdayD").val())
    })
    
      $(".birthdayY").change(function(){
    	$(".year1").html($(".birthdayY").val())
    })
	
   //正则验证
   
     $(".email").blur(function(){
       var reg= /^\w+@((126|139)\.(com|cn))|(qq\.com)$/i;
          
     	 if(reg.test( $(".email").val())){
     	 	    $("#form-email span").addClass("right").addClass("iconfont icon-duihao")
     	 	  //$("#form-email span").css({"display":"inline-block","width":"120px","height":"30px","background":"#a5cf4c","border-rdius":"20px"}) 
     	 }else{
     	 	  $("#form-email span").addClass("yanze").html("格式不正确");
     	 }
     	
     })
     
     $(".email").focus(function(){
     	     $("#form-email span").removeClass().html("")
     })
     
    
	
})
