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
       var reg= /^\w+@((126|139|163)\.(com|cn))|(qq\.com)$/i;

     	 if(reg.test( $(".email").val())){
     	 	
     	 	 $.get("http://localhost/regsiter.php",
             {"userEmail":$(".email").val()},function(data){
       	  if(data.indexOf("1")>-1){
       	  	  
       	 	    $("#form-email span").addClass("right").addClass("iconfont icon-duihao");
       	 	    $(".email")[0].name="1";
       	  }else{
       	  	console.log(data)
       	  	   $("#form-email span").addClass("yanze").html("已有人使用了");
       	   }
       });
     	 	  
     	 	  
     	 }else{
     	 	 $("#form-email span").addClass("yanze").html("格式不正确");
     	 	 $(".email")[0].name="0";
     	 }
     	
     })
     
     $(".email").focus(function(){
     	     $("#form-email span").removeClass().html("")
     })
     
    //密码
    
    $(".password").blur(function(){
    	var reg=/^\w{1,6}$/g;
    	var reg1=/^((\w)|([\.\?])){7,9}$/;
    	var reg2=/^((\w)|([\.\?])){10,16}$/;
    	if(reg.test($(".password").val())){
    		$(".strong1").css("background","#FBCA93");
    		
    		 $(".password")[0].name="1";
    	}else if(reg1.test($(".password").val())){
    		$(".strong2").css("background","orange");
    		 $(".password")[0].name="1";
    	}else if(reg2.test($(".password").val())){
    		$(".strong3").css("background","#CD0A0A");
    		 $(".password")[0].name="1";
    	}else{
    		  $(".passtext").css("display","block")
    		 $(".passtext").html("不合法")
    		  $(".password")[0].name="0";
    	}
    	
    	
    })
    
     $(".password").focus(function(){
       $(".passtext").css("display","none");
       $(".strong1").css("background","gray")
       $(".strong2").css("background","gray")
       $(".strong3").css("background","gray")
     	
     })
     
     var  charstr="";
      function showimg(){
  	 
  	var  fileArr=['_01','_02','_03','_04','_05','_06','_07','_08','_09','max_1','max_2',
  	'max_3','max_4','max_5','max_6','max_7','max_8','max_9','max_10','max_11',
  	'max_12','max_13','max_14','max_15','max_16','max_17','max_18','max_19',
  	'max_20','max_21','max_22','max_23','max_24','max_25','max_26','min_1',
  	'min_2','min_3','min_4','min_5','min_6','min_7','min_8','min_9','min_10',
  	'min_11','min_12','min_13','min_14','min_15','min_16','min_17','min_18',
  	'min_19','min_20','min_21','min_22','min_23','min_24','min_25','min_26'];
  	
  	charArr=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 	    
  	 
       var  imgstr="";
	      charstr="";
	     for(var i=0;i<4;i++){
	     	var index=parseInt(Math.random()*fileArr.length);
	     	imgstr+="<img src='img/img1/"+fileArr[index]+".jpg'/>";
	     	charstr+=charArr[index]
	     }
	     
	    $(".check").append(imgstr) 
      
       console.log(charstr)
      
      };
      
      showimg();
      function check(){
         
      	if($("#write").val().toLowerCase()==charstr.toLowerCase()){
      		
      		   $(".checkicon").addClass("checkicon2").addClass("iconfont icon-duihao");      	
      	}else{
      		   
      			$(".checkicon").addClass("checkicon1").html("不正确");
      	}
      	
      	
      }
      
      $("#write").focus(function(){
      	
      	 $(".checkicon").removeClass("checkicon1");
      	 $(".checkicon").removeClass("checkicon2");
      	 $(".checkicon").removeClass("iconfont icon-duihao")
      	 $(".checkicon").html("");
      });
      
      $("#write").blur(function(){
      		
      	    check();
      	 
      });
      
      $(".f5").click(function(){
      	$(".check").html("");
      	  showimg()
      })
      
       
	/*连接后台*/
	
	 $(".submit").click(function(){
	    if($(".email")[0].name==$(".password")[0].name){
	       $.post("http://localhost/regsiter.php",{"userEmail":$(".email").val(),"userPass":$(".password").val(),"userName":$("#name").val()},function(data){
		    if(data.indexOf("1")>-1){
		 	console.log(data)
              location.href="login.html";
		 }else{
		       alert('失败');
		      location.reload(true);
		 }
		 
	   })
	       
	    }else{
	     	alert("不能为空")
	     }
	    
	})    
	
})
