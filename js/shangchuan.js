
$(function(){
   $(".btn").click(function(){
   	
  
	 $.get("http://localhost/send.php",{
	 	"name":$(".name").val(),
	 	"shopId":$(".Id").val(),
	 	"shopPrice":$(".price").val(),
	 	"shopDescrible":$(".des").val(),
	 	"shopCount":$(".count").val(),
	 	"shopImg":$(".Img").val(),
	 	"backup1":$(".back1").val(),
	 	"backup2":$(".back2").val(),
	 	"backup3":$(".back3").val()
	 },function(data){
	 	console.log(data)
	 	  if(data.indexOf("1")>-1){
	 	  	
	 	  	alert("上传成功")
	 	  }else{
	 	  	alert("上传失败")
	 	  }
	 })
	
    })	
	
})
