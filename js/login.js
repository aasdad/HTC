 $(function(){
 	 if($(".box")[0].checked){
 	 	if($.cookie("user")){
 	 		var ouser=JSON.parse($.cookie("user"));
 	 		    $(".email").val(ouser.email);
 	 		    $(".password").val(ouser.code);
 	 	}
 	 	
 
 	 }
    
 
 
 
 $(".submit").click(function(){
	       $.post("http://localhost/log.php",{"userEmail":$(".email").val(),"userPass":$(".password").val()},function(data){
		    if(data.indexOf("1")>-1){
	         console.log(data);
	         var userinfo={};
	         userinfo.email=$(".email").val();
	         userinfo.code=$(".password").val();
		 	 $.cookie("user",JSON.stringify(userinfo),{path:'/',expires:7});
              location.href="shop.html";
		 }else{
		      alert('失败');
		      location.reload(true);
		 }
		 
	   })
    
	}) 
	
})